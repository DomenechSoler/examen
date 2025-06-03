export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-black">Enunciat Examen UF4</h2>
      <pre className="text-black whitespace-pre-wrap">
{`
Examen UF4
Crea una web que, mitjançant l’API ‘The Movie Database (TMDB)’ et permeti mostrar les pel·lícules populars de la seva base de dades.

Examen UF4
Exercici 1 – Entorn de desenvolupament (0.25p)
Exercici 2 - Desplegament (0.25p)
Exercici 3 - Vistes i navegació (1p)
Exercici 4 - Component ‘Peliculas’ (3p)
Exercici 5: Component ‘Detalle’ (3p)
Exercici 6: Populares (1.5p)
Exercici 7: Cercador (1p)
Annex
1. Obtener Películas Populares
2. Obtener Detalles de Película
3. Búsqueda de Películas
4. Obtener Géneros
Lliuramet
Exercici 1 – Entorn de desenvolupament (0.25p)
Crea un projecte NEXT
Modifica el layout per tenir una estructura bàsica amb <header>, <main> i <footer>.
Escriu el teu nom dins del header.
Exercici 2 - Desplegament (0.25p)
Crea un repositori i puja el teu projecte a github
Desplega el teu projecte en un servidor vercel.
Comparteix el repositori
Puja el link del repositori i desplegament a classroom
Exercici 3 - Vistes i navegació (1p)
Crea el component ‘Header’ amb un menú de navegació per a les vistes.
Crea la vista MovieExplorer fent servir el prototip. Crea la vista About  amb l’enunciat de l’examen.
Exercici 4 - Component ‘Peliculas’ (3p)
Crea un component peliculas amb les pel·lícules més populars de TMDB , mitjançant Endpoint: /movie/popular de la api

Exercici 5: Component ‘Detalle’ (3p)
Crea el component ‘Detalle’ que permet mostrar la informació de la pel·lícula seleccionada.

Exercici 6: Favoritos(1.5p)
Crea un sistema per emmagatzemar la informació de les teves pel·lícules favorites mitjançant localstorage.
Exercici 7: Cercador (1p)
Crea un sistema per fer la búsqueda de pel·lícules

* L’aspecte de la pàgina web ha de complir amb l’estructura bàsica del prototip, tot i que no serà determinant en la nota final de l’examen.
Annex
1. Obtener Películas Populares
fetch(\`\${BASE_URL}/movie/popular?api_key=\${API_KEY}&language=es-ES&page=\${page}\`)
Endpoint: /movie/popular
Parámetros:
api_key: Clave de API de TMDB
language: es-ES (español)
page: Número de página para paginación
2. Obtener Detalles de Película
fetch(\`\${BASE_URL}/movie/\${id}?api_key=\${API_KEY}&language=es-ES&append_to_response=videos,credits\`)
Endpoint: /movie/{id}
Parámetros:
api_key: Clave de API
language: es-ES
append_to_response: videos,credits (información adicional)
3. Búsqueda de Películas
fetch(\`\${BASE_URL}/search/movie?api_key=\${API_KEY}&language=es-ES&query=\${encodeURIComponent(query)}&page=\${page}\`)
Endpoint: /search/movie
Parámetros:
api_key: Clave de API
language: es-ES
query: Término de búsqueda (codificado para URL)
page: Número de página
4. Obtener Géneros
fetch(\`\${BASE_URL}/genre/movie/list?api_key=\${API_KEY}&language=es-ES\`)
Endpoint: /genre/movie/list
Parámetros:
api_key: Clave de API
language: es-ES

Lliurament
Puja a classroom:
La url del teu repositori
La url de la pàgina desplegada
`}
      </pre>
    </section>
  );
}