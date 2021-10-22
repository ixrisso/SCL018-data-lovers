// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

//para filtrar por director
/* export const filterData = (data, selectedDirector)  => {
const movies = data.films;  
const resultfilter = movies.filter(movie => movie.director === selectedDirector);
return resultfilter
} */

//ordenar de la A a la Z
export  const sortData  = (data, sortBy, sortOrder) =>  {
  const dataGhibli  = data.films;
  const resultSort  = dataGhibli.sort(function  (a, b)  {
    if  (a[sortBy] > b[sortBy]) {
      return  1;
    }
    if  (a[sortBy] < b[sortBy])  {
      return  -1;
    }
    return  0;
  })
  return   resultSort;
}


/* Comparar dos strings , ambos en minuscula para igualdad de condiciones*/
/* function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return (a < b) ? -1 : (a > b) ? 1 : 0; */ //los signos interrogacion son un if o un else
/* } */

/* Ordenar peliculas por año, desde mas nuevas*/
export const filmsSort = () => {
  const yearMovieAsc = films.sort (function(a, b){
    return compareStrings(a.release_date, b.release_date);
  }
    
)}
;

/* Esta es la version al reves, desde mas viejas */
export const yearMovieDesc = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(a.release_date, b.release_date);
})
};

/* Orden alfabetico */
export const ordenAlfabeticoAZ = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (a.title, b.title)
  })
  
};

/* Orden alfabetico al reves */
export const ordenAlfabeticoZA = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (b.title, a.title)
  })
};

/* Puntuación rotten tomatoes */
/* export const rottenTomatoes = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (b.title, a.title)
  })
}; */

/*filtros*/

/* export const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  }; */

