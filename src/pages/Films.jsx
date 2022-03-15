import {Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from '../components/Loading.jsx';
import http from '../store/httpService';
import React from 'react';
import "../css/Films.css";


const queryFilms = new QueryClient();

function Films() {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);

  const { isLoading, data } = useQuery('getFilms', async () => {
    try {
      const { data } = await http.get('films');
      return data;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        navigate('/not-found');
      }
    }
  });

  useEffect(() => {
    if (data) {
      setFilms(data);
      console.log(data);
    }
  }, [data]);

  return (
   <div className="bg-white content-box ">
   <div className="card-size card-margen ">
     <h2 className="sr-only">Films</h2>
     {isLoading ? (
       <Loading />
     ) : (
       <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {films.map((product) => (
           <Link to={`/films/${product.id}`} className="group" key={product.id}>
             <div className="cat w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
               <img
                 src={product.image}
                 alt={product.description}
                 className="w-full h-full object-center object-cover group-hover:opacity-75"
               />
             </div>
             <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
             <p className=" text-link">${product.original_title}</p>
           </Link>
         ))}
       </div>
     )}
   </div>
 </div>
  );
}

export default function Wraped() {
  return (
    <QueryClientProvider client={queryFilms}>
      <Films />
    </QueryClientProvider>
  );
}