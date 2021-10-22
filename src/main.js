/* TODOS LOS NOMBRES DE COSAS VAN EN INGLES ojo ojo
Se importan las funciones desde data.js y la informacion desde ghibli.js */
import data from './data/ghibli/ghibli.js';
import { yearMovieAsc, yearMovieDesc, ordenAlfabeticoAZ, ordenAlfabeticoZA } from './data.js'; 


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

const sortByBy = (myArray) => myArray.sort();

//intento isa
const sortBy = document.getElementById("sortby_pro");
let tempArray = [];
sortBy.addEventListener("change", (event) => {
  if (event.target.value === "fecha_de_publicaciondesc") {
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].release_date);
      container.innerHTML += drawCard(films[i])
    }
  } 
  if (event.target.value ==="fecha_de_publicacionasc") { //agregar value de html
    tempArray.(films[i].release_date);//agregar reverse
    }
    console.log(tempArray);
  }
/*   if (event.target.value ==="nombre_de_peliculas_a_z") {
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].title);
    }
  }
  if (event.target.value ==="nombre_de_peliculas_z_a") { 
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].title);//agregar reverse
    }
  }
  if (event.target.value ==="nota_de_rt") {
    for (let i=0; i < films.length; i++) {
      tempArray.push(films[i].rt_score);//agregar reverse
    }
  } */

/*  
  container.innerHTML = " ";
    //const nombreProvisorio = films.filter(x => (x.title.toLowerCase()));
    for (let i=0; i < nombreProvisorio.length; i++) {
      return yearMovieDesc(nombreProvisorio);
      };
      container.innerHTML += drawCard(nombreProvisorio[i]);
      console.log(nombreProvisorio[i].title); */

/* 
let yearMovieClickDesc = document.getElementById("sortby_pro");
yearMovieClickDesc.addEventListener ("change", function(){
  console.log("Esto si se escucha");
  document.getElementById("contenedorpeliculas").innerHTML = "";
  let dataYear2 = yearMovieDesc(films);
  for (let i=0; i < films.length; i++) {
    container.innerHTML += drawCard(films[i]);
  } 
  drawCard(dataYear2);
  console.log(dataYear2);
}); */

container.innerHTML += drawCard(sortByBy(tempArray))
});




/* Filtrar por director quiza */

const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  }; */
//botones de filtro y ordenados

/* let nombreOrden = document.getElementById("name");
nombreOrden.addEventListener ("click", () => {
  document.getElementsByClassName("contenedorpeliculas") [0].innerHTML = "";   ordenAlfabetico(films);
}) */

/* aqui estuvo yess ijijijiji // */