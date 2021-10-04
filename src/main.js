import { /* nombres de funciones */ example } from './data.js'; //importar funciones especificas del data.js

import data from './data/ghibli/ghibli.js'; //importar datos del js


const films = data.films;   
const div = document.getElementById("contenedorpeliculas");

const drawCard = (pelicula) => {
  return`<div class="card">
    <ul>
         <img class="poster" alt="poster ${pelicula.title}" src=${pelicula.poster}>
      
    <li>Nombre: ${pelicula.title}</li>
    <li>Año: ${pelicula.release_date}</li>

    </ul>
  </div>`;
};

for (let i=0; i < 19; i++) {
  div.innerHTML += drawCard(films[i]);
} 
