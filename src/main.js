//* TODOS LOS NOMBRES DE COSAS VAN EN INGLES ojo ojo
//Se importan las funciones desde data.js y la informacion desde ghibli.js */
import data from './data/ghibli/ghibli.js';
import {sortData,filterData} from './data.js';
//console.log (sortData,data);
/* Se crea variable para llamar a la data, y variable para el contenedor */
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
/* Se recorre toda la data de los films */
const printCard = (new01) => {
  container.innerHTML = "";
  new01.forEach((film01) => {
    container.innerHTML += drawCard(film01);
  })
}
printCard(films);


/* for (let i = 0; i < films.length; i++) {
container.innerHTML += drawCard(films[i]);} */
// const sortByBy = (myArray) => myArray.sort();

const optionToSort = document.getElementById("sortby_");
// optionToSort.addEventListener("change", (event) => {
//   //if (bla.value ==="nombre de value elegido")
//   //sort data (data, films.release_date, event.target.value)
//   //print...
//   //if bla.value==="nombre de value "//reverse de este costado
//   const sortOption = sortData (data, sortBy, event.target.value);
//   film01 = sortOption;
//   printCard(film01);
//   console.log(printCard(film01));
// });


const optionToFilter = document.querySelector("#filterby_director");
optionToFilter.addEventListener("change", (event) => {
  
  const filterOption = filterData(films, event.target.value);
  film01 = filterOption;
  printCard(filterOption);
});

/* 
resultado = names.filter (function(asdfklj) {
return words.includes (asfjkas)
});

data.films.forEach (function(e){
movietitle.push.(data.title);
})

document.getElementById(cajita).innerhtml = resultado;
 */
/*  }else if (event.target.value === "fecha_de_publicacionasc") {
    for (let i = 0; i < films.length; i++) {
      document.getElementById("contenedorpeliculas").innerHTML = "";
      tempArray.push(films[i].release_date);
      //container.innerHTML += drawCard(films[i]); //agregar reverse
    }
    tempArray.reverse();
    console.log(tempArray);
    tempArray =  [];
  } */
  //container.innerHTML += drawCard(sortByBy(tempArray));
/* }) */;

//va dentro de nuestro if
/* else if (event.target.value ==="nombre_de_peliculas_a_z") {
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].title);
    }
  }
  else if (event.target.value ==="nombre_de_peliculas_z_a") { 
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].title);//agregar reverse
    }
  }
  else (event.target.value ==="nota_de_rt") {
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].rt_score);//agregar reverse
    }
  } */

/* Filtrar por director quiza */

/* const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  };  */

/* aqui estuvo yess ijijijiji // */
