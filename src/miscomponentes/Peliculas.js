"use client";
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ca-ES`;

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setPeliculas(data.results || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregant...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black">Pel·lícules més populars</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        {peliculas.map(peli => (
          <div
            key={peli.id}
            style={{
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '12px',
              textAlign: 'center',
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${peli.poster_path}`}
              alt={peli.title}
              style={{ width: '100%', borderRadius: '6px', marginBottom: '8px' }}
            />
            <div style={{ color: '#222', fontWeight: 'bold', fontSize: '1rem' }}>
              {peli.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}