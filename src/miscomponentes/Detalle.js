import React from 'react';

const Detalle = ({ pelicula }) => {
  if (!pelicula) return null;

  return (
    <div className="detalle-pelicula" style={{ color: '#000', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '32px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          style={{ maxWidth: '220px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
        />
        <div style={{ flex: 1, minWidth: 220 }}>
          <h1 style={{ color: '#000', fontSize: '2.2rem', fontWeight: 700, marginBottom: 16 }}>{pelicula.titulo}</h1>
          <p style={{ margin: '12px 0' }}><strong>Sinopsis:</strong> {pelicula.sinopsis}</p>
          <p style={{ margin: '12px 0' }}><strong>Género:</strong> {pelicula.genero}</p>
          <p style={{ margin: '12px 0' }}><strong>Fecha de estreno:</strong> {pelicula.fechaEstreno}</p>
          <p style={{ margin: '12px 0' }}><strong>Duración:</strong> {pelicula.duracion}</p>
        </div>
      </div>
      <h3 style={{ color: '#000', marginTop: '32px', marginBottom: '16px', fontSize: '1.3rem' }}><strong>Reparto</strong></h3>
      <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', padding: 0, margin: 0 }}>
        {pelicula.reparto.map((actor, idx) => (
          <li key={idx} style={{ color: '#000', textAlign: 'center', minWidth: '100px' }}>
            <img src={actor.imagen} alt={actor.nombre} style={{ width: '100px', height: '140px', objectFit: 'cover', marginBottom: '8px' }} />
            <div style={{ marginTop: '8px', fontWeight: 500 }}>{actor.nombre}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detalle;