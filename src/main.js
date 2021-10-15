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

  return (a < b) ? -1 : (a > b) ? 1 : 0; //los signos interrogacion son un if o un else
}

/* Ordenar peliculas por año, es una funcion flecha, donde */
const yearMovieAsc = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(b.release_date, a.release_date);
})
};

let yearMovieClickAsc = document.getElementById("sortby_pro");
yearMovieClickAsc.addEventListener ("change", function(){
    document.getElementById("contenedorpeliculas").innerHTML = "";
  let dataYear = yearMovieAsc(films);
  for (let i=0; i < films.length; i++) {
    container.innerHTML += drawCard(films[i]);
  } console.log(dataYear);
});

/* Esta es la version al reves de la funcion de ordenar por fecha de publicacion */
/* const yearMovieDesc = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(a.release_date, b.release_date);
})
}; */

/* let yearMovieClickDesc = document.getElementById("sortby_pro");
yearMovieClickDesc.addEventListener ("change", function(){
  console.log("Esto si se escucha");
  document.getElementById("contenedorpeliculas").innerHTML = "";
  let dataYear2 = yearMovieDesc(films);
  drawCard(dataYear2);
  console.log(dataYear2);
}); */

/* Orden alfabetico */

/* const ordenAlfabeticoAZ = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (a.title, b.title)
  })
};
let ordenAlfabeticoClickAZ = document.getElementById("sortby_pro");
ordenAlfabeticoClickAZ.addEventListener ("change", function(){
  console.log("Esto si se escucha");
  document.getElementById("contenedorpeliculas").innerHTML = "";
  let dataAZ = ordenAlfabeticoAZ(films);
  drawCard(dataAZ);
  console.log(dataAZ);
}); */

/* Orden alfabetico al reves*/
/* const ordenAlfabeticoZA = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (b.title, a.title)
  })
};
let ordenAlfabeticoZAClick = document.getElementById("sortby_pro");
ordenAlfabeticoZAClick.addEventListener ("change", function(){
  document.getElementById("contenedorpeliculas").innerHTML = "";
  let dataZA = ordenAlfabeticoZA(films);
  drawCard(dataZA);
  });
 */
/* Filtrar por director quiza */

/* const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  }; */
//botones de filtro y ordenados

/* let nombreOrden = document.getElementById("name");
nombreOrden.addEventListener ("click", () => {
  document.getElementsByClassName("contenedorpeliculas") [0].innerHTML = "";   ordenAlfabetico(films);
}) */

/* aqui estuvo yess// */