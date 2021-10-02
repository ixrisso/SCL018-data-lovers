import { /* nombres de funciones */ example } from './data.js';

import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const films = data.films;   
console.log("peliculas", films);

const div = document.getElementById("contenedorpeliculas");

const drawCard = (pelicula) => {
  return`<div class="card">
    <ol>
         <img alt="poster ${pelicula.title}" src=${pelicula.poster}
         width=90%>
    <li>Nombre: ${pelicula.title}</li>
    <li>Año: ${pelicula.release_date}</li>

    </ol>
  </div>`;
};
  
for (let i=0; i < 19; i++) {
  div.innerHTML += drawCard(films[i]);
} 
