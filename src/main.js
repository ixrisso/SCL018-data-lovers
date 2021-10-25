//Se importan las funciones desde data.js y la informacion desde ghibli.js */
import data from './data/ghibli/ghibli.js';
import {sortData,filterData} from './data.js';

// Se crea variable para llamar a la data, y variable para el contenedor */
let films = data.films;
let film01 = films;
const container = document.getElementById("contenedorpeliculas");

let sortBy = "release_date";
// //let result = [];

/* Se establece la estructura(tarjeta) correspondiente a cada pelicula con la data */
const drawCard = (films) => {
  return `
      <div class="card">
      <img class="poster" alt="poster ${films.title}" src=${films.poster}>
      <h5>${films.title}</h5>
      <h6> ${films.release_date}</h6>
      </div>`;
};
//Se vacia el contenedor, se recorre y luego se imprime con estructura anterior
const printCard = (filmsdata) => {
  container.innerHTML = "";
  filmsdata.forEach((film01) => {
    container.innerHTML += drawCard(film01);
  })
};
printCard(films);

//para ordenar, primero se llama al html, se escucha algun cambio y se trabaja
const optionToSort = document.querySelector("#sortby_");
optionToSort.addEventListener("change", (event) => {
  //buscar en oh agregar IF si se puede para que haga distinto segun event target value and reverse
  const sortOption = sortData (data, sortBy, event.target.value);
  film01 = sortOption;
  printCard(film01);
});

//para filtrar, primero se llama al html, se escucha algun cambio y se trabaja
const optionToFilter = document.querySelector("#filterby_director");
optionToFilter.addEventListener("change", (event) => {
  const filterOption = filterData(films, event.target.value);
  film01 = filterOption;
  printCard(filterOption);
});

/* else (event.target.value ==="nota_de_rt") {
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].rt_score);//agregar reverse
    }
  } */
