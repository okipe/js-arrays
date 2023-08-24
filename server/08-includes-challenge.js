let array = ["ana", "santi", "nico", "anastasia"];
let term = "ana";

function filterByTerm(array, term) {
    return array.filter(name =>
        name.includes(term))
  }
  
  /********************
Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]
   *******************/