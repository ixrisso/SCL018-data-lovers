// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

//ordenar
export const sortData = (data, sortBy, sortOrder,) => {
  //aqui? hacer un to lower case o quiza en otra parte
  const sorted = films.sort(function(a, b){
    if (a[sortBy] > b[sortBy]) { 
      return 1; 
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    } 
      return  0;
  });
/*   if (sortOrder === "mas_nuevas") {
      return sorted.reverse();
  } */
  return sorted;
  }

export const filterData = (films, filterBy) => {
  return films.filter(x => x.director === filterBy);
}

