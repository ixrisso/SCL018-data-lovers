//* TODOS LOS NOMBRES DE COSAS VAN EN INGLES ojo ojo
//Se importan las funciones desde data.js y la informacion desde ghibli.js */
import data from './data/ghibli/ghibli.js';
import {
  sortData,
  filterData,
} from './data.js';
//console.log (sortData,data);
/* Se crea variable para llamar a la data, y variable para el contenedor */
const films = data.films;
const container = document.getElementById("contenedorpeliculas");
const sortBy = "title";
/* Se establece la estructura(tarjeta) correspondiente a cada pelicula con la data */
const drawCard = (film) => {
  return `<div class="card">
    <ul>
      <img class="poster" alt="poster ${film.title}" src=${film.poster}>
      <h5>${film.title}</h5>
      <h6> ${film.release_date}</h6>
    </ul>
  </div>`;
};

/* Se dibuja cada tarjeta/estructura recorriendo toda la data de los films */
for (let i = 0; i < films.length; i++) {
  container.innerHTML += drawCard(films[i]);
}
// const sortByBy = (myArray) => myArray.sort();

const optionToSort = document.getElementById("sortby_pro");
optionToSort.addEventListener("change", (event) => {
  const provisional = sortData (data, sortBy, event.target.value);
  const print= () => {
    container.innerHTML = "";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += drawCard(films[i])
    }
  }
print(provisional);
});

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
//botones de filtro y ordenados

/* let nombreOrden = document.getElementById("name");
nombreOrden.addEventListener ("click", () => {
  document.getElementsByClassName("contenedorpeliculas") [0].innerHTML = "";   ordenAlfabetico(films);
}) */

/* aqui estuvo yess ijijijiji // */

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