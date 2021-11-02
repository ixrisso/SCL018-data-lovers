// estas funciones son de ejemplo

//ordenar
export const sortData = (data, sortBy ) => {
 
  //recibe datos de peliculas y "value" de html del click
  
   //objeto "variable" que consolida los value con una data especifica
  const chosenData = {
    name_az: "title",
    name_za: "title",
    date_asc: "release_date",
    date_desc: "release_date",
    ranking: "rt_score",
  };

  //estamos ordenando según el value elegido
  const toSort = chosenData[sortBy];
 
  //se ordena la data
  const sorted = data.sort(function(a, b){
    if (a[toSort] > b[toSort]) { 
      return 1; 
    }
    if (a[toSort] < b[toSort]) {
      return -1;
    } 
      return  0;
  });
  
  //si coincide con el nombre, entonces nuestro orden es alrevés
  if (sortBy === "name_za" || sortBy === "date_asc") {
      return sorted.reverse();
  }
  return sorted;
  }

export const filterData = (data, filterBy) => {
  return data.filter(x => x.director === filterBy);
}

