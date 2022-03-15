import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading.jsx';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import http from '../store/httpService';
import React from 'react';
import "../css/Film.css";

const queryClient = new QueryClient();

function Film() {
  const navigate = useNavigate();
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  const { isLoading, data } = useQuery('getFilm', async () => {
    try {
      const { data } = await http.get(`films?id=${id}`);
      console.log(data);
      return data;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        navigate('/not-found');
      }
    }
  });

  useEffect(() => {
    if (data) {
        setFilm(data);
        console.log(data);
    }
  }, [data]);

  const handlePayment = (e) => {
    e.preventDefault();
    navigate('/films', { replace: true });
  };

  return (
    <div className="py-16 px-4">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pt-6">
            {film.map((pelicula) => (
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="py-16 px-4 img-film">
                        <img
                            src={pelicula.image}
                            alt=""
                            className="w-full h-full object-center object-cover img-film"
                        />
                    </div>
                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                {pelicula.title}
                            </h1>
                        </div>
                         {/* Options */}
                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <h2 className="sr-only">{pelicula.original_title}-</h2>
                            <h3 className="sr-only">Director: {pelicula.director}</h3>
                            <p className="text-3xl text-gray-900">Description: {pelicula.description}</p>
                        </div>
                    </div>
                    <button onClick={handlePayment}>
                        Back
                    </button>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default function Wraped() {
  return (
    <QueryClientProvider client={queryClient}>
      <Film />
    </QueryClientProvider>
  );
}
