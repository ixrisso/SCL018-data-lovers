// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

//Karina
export const sortData = (data, sortBy, sortOrder) => {
  //aqui? hacer un to lower case o quiza en otra parte
  const compare = data.films;
  const sortedBy = compare.sort(function(a, b){
    if (a[sortBy] > b[sortBy]) { 
      return 1; 
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    } 
      return  0;
  });
  if (sortOrder === "name_za") {
      return sortedBy.reverse();
  }
  return sortedBy;
  }

  export const filterData = (data, condition) => {
    console.log("aqui va el filtro por director");

  }
/* Comparar dos strings , ambos en minuscula para igualdad de condiciones*/
/* function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();+/

/*filtros*/

/* export const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
  }; */