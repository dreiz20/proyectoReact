import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from '../components/Loading.jsx';
import http from '../store/httpService';
import React from 'react';

const queryPeople = new QueryClient();

function People() {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const { isLoading, data } = useQuery('getPeople', async () => {
    try {
      const { data } = await http.get('people');
      return data;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        navigate('/not-found');
      }
    }
  });

  useEffect(() => {
    if (data) {
      setPeople(data);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="container mt-5" align="center">
      <h4>Lista de Personajes</h4>

      <div className="row">
        <div className="py-16 px-4">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="pt-6">
              {/* Image gallery */}
              <div>
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Genero</th>
                      <th scope="col">Edad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.map((people) => (
                        <tr key={people.id}>
                          <td>{people.name}</td>
                          <td>{people.gender}</td>
                          <td>{people.age}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Wraped() {
  return (
    <QueryClientProvider client={queryPeople}>
      <People />
    </QueryClientProvider>
  );
}