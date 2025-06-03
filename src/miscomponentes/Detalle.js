import React from 'react';

const Detalle = ({ pelicula }) => {
    
  return (
    <div className="detalle-pelicula" style={{ color: '#000' }}>
      <h2 style={{ color: '#000' }}>{pelicula.titulo}</h2>
      <img src={pelicula.imagen} alt={pelicula.titulo} style={{ maxWidth: '300px' }} />
      <p><strong>Sinopsis:</strong> {pelicula.sinopsis}</p>
      <p><strong>Género:</strong> {pelicula.genero}</p>
      <p><strong>Fecha de estreno:</strong> {pelicula.fechaEstreno}</p>
      <p><strong>Duración:</strong> {pelicula.duracion}</p>
      <h3 style={{ color: '#000' }}><strong> Reparto: </strong></h3>
      <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', padding: 0 }}>
        {pelicula.reparto.map((actor, idx) => (
          <li key={idx} style={{ color: '#000', textAlign: 'center' }}>
            <img src={actor.imagen} alt={actor.nombre} style={{ width: '100px' }} />
            <div style={{ marginTop: '8px' }}>{actor.nombre}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detalle;