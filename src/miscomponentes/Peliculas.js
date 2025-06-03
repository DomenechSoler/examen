"use client";
import React, { useEffect, useRef, useState } from 'react';
import Detalle from './Detalle';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const detalleRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        let url = '';
        if (query.trim() === '') {
            url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`;
        } else {
            url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=${page}`;
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results || []);
                setLoading(false);
            });
    }, [query, page]);

    const handleSeleccionarPelicula = async (peli) => {
        const res = await fetch(`${BASE_URL}/movie/${peli.id}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`);
        const data = await res.json();

        setPeliculaSeleccionada({
            titulo: data.title,
            imagen: `https://image.tmdb.org/t/p/w300${data.poster_path}`,
            sinopsis: data.overview,
            genero: data.genres?.map(g => g.name).join(', '),
            fechaEstreno: data.release_date,
            duracion: data.runtime ? `${data.runtime} min` : '',
            reparto: data.credits?.cast?.slice(0, 5).map(actor => ({
                nombre: actor.name,
                imagen: actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : 'https://via.placeholder.com/50x50?text=?',
            })) || [],
        });

        setTimeout(() => {
            if (detalleRef.current) {
                detalleRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        setPage(1);
        setPeliculaSeleccionada(null);
        setQuery(e.target.elements.busqueda.value);
    };

    if (loading) return <p>Carregant...</p>;

    return (
        <div>
            <form onSubmit={handleBuscar} style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
                <input
                    type="text"
                    name="busqueda"
                    placeholder="Busca tu pelicula..."
                    defaultValue={query}
                    style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        color: '#000'
                    }}
                />
                <button type="submit" style={{ padding: '8px 16px', borderRadius: '4px', background: '#0070f3', color: '#fff', border: 'none' }}>
                    Buscar
                </button>
            </form>
            <h2 className="text-2xl font-bold mb-4 text-black">Pel·lícules {query ? 'resultat de la cerca' : 'més populars'}</h2>
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
                            cursor: 'pointer',
                            border: peliculaSeleccionada && peliculaSeleccionada.titulo === peli.title ? '2px solid #0070f3' : 'none'
                        }}
                        onClick={() => handleSeleccionarPelicula(peli)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w300${peli.poster_path}`}
                            alt={peli.title}
                            style={{ width: '100%', borderRadius: '6px', marginBottom: '8px' }}
                        />
                        <div style={{ color: '#000', fontWeight: 'bold', fontSize: '1rem' }}>
                            {peli.title}
                        </div>
                    </div>
                ))}
            </div>
            <div ref={detalleRef} style={{ marginTop: '32px' }}>
                {peliculaSeleccionada && <Detalle pelicula={peliculaSeleccionada} />}
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    disabled={page === 1}
                    style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', background: page === 1 ? '#eee' : '#fff' }}
                >
                    Anterior
                </button>
                <span style={{ alignSelf: 'center' }}>Pàgina {page}</span>
                <button
                    onClick={() => setPage(page + 1)}
                    style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', background: '#fff' }}
                >
                    Següent
                </button>
            </div>
        </div>
    );
}