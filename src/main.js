/* TODOS LOS NOMBRES DE COSAS VAN EN INGLES ojo ojo
Se importan las funciones desde data.js y la informacion desde ghibli.js */
import { /* filterByDirector, ordenAlfabetico, yearMovie */ } from './data.js'; 
import data from './data/ghibli/ghibli.js';

/* Se crea variable para llamar a la data, y variable para el contenedor */
const films = data.films;   
const container = document.getElementById("contenedorpeliculas");

/* Se establece la estructura(tarjeta) correspondiente a cada pelicula con la data */
const drawCard = (film) => {
  return`<div class="card">
    <ul>
      <img class="poster" alt="poster ${film.title}" src=${film.poster}>
      <h5>${film.title}</h5>
      <h6> ${film.release_date}</h6>
    </ul>
  </div>`;
};

/* Se dibuja cada tarjeta/estructura recorriendo toda la data de los films */
for (let i=0; i < films.length; i++) {
  container.innerHTML += drawCard(films[i]);
} 

/* Comparar dos strings, pedir office hour, porque no entiendo el return  */
function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

/* Ordenar peliculas por año, es una funcion flecha, donde */
const yearMovie = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(b.release_date, a.release_date);
})
};

let yearMovieClick = document.getElementById("filtro_pro");
yearMovieClick.addEventListener ("change", function(){
  console.log("Esto si se escucha");
  document.getElementById("contenedorpeliculas").innerHTML = "";
  let dataYear = yearMovie(films);
  drawCard(dataYear);
  console.log(drawCard(yearMovie(films)));
  console.log("")
});






/* Pedir office hour para lograr que ese console log se materialice */


/* 
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

 */