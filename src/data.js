// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

/* Comparar dos strings , ambos en minuscula para igualdad de condiciones*/
function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return (a < b) ? -1 : (a > b) ? 1 : 0; //los signos interrogacion son un if o un else
}

/* Ordenar peliculas por año, desde mas nuevas*/
export const yearMovieAsc = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(b.release_date, a.release_date);
})
};

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
export const rottenTomatoes = (arraytoSort) => {
  return arraytoSort.sort(function(a, b){
    return compareStrings (b.title, a.title)
  })
};

/*filtros*/

export const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  };

