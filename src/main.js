//TODOS LOS NOMBRES DE COSAS VAN EN INGLES ojo ojo
import { /* filterByDirector, ordenAlfabetico, yearMovie */ } from './data.js'; //importar datos del js

import data from './data/ghibli/ghibli.js';

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


const yearMovie = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(a.release_date, b.release_date);
})
};

const ordenAlfabetico = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (a.title, b.title)
  })
}

//Filtrar cosas? por director quiza
const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  };

//botones de filtro y ordenados

let nombreOrden = document.getElementById("name");
nombreOrden.addEventListener ("click", () => {
  document.getElementsByClassName("contenedorpeliculas") [0].innerHTML = "";   ordenAlfabetico(films);
});

