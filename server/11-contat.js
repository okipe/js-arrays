const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// Con ciclos FOR
const newArray = [...elements]; // Esto evita la referencia a la memoria del array, si no, se duplica
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);    
}

console.log('for', newArray);

// Con método CONCAT
const rpta1 = elements.concat(othersElements); // Como Concat es inmutable, no nos preocupamos por la referencia de memoria
console.log('Método CONCAT: ', rpta1);
/* CONSOLE ******
Método CONCAT:  [
  1, 1, 2, 2,
  3, 3, 4, 4
]
****************/

// Con SPREAD operations
const rpta2 = [...elements, ...othersElements]; // Solo lo hace si es un array.
console.log('...', rpta2);
/* CONSOLE ******
... [
  1, 1, 2, 2,
  3, 3, 4, 4
]
****************/

const rpta3 = [...elements, ...'random']; // Separa random en varios caracteres
console.log('Respuesta 3: ', rpta3);
/* CONSOLE ******
Respuesta 3:  [
    1,   1,   2,   2,   'r',
    'a', 'n', 'd', 'o', 'm'
  ]
****************/

elements.push(...othersElements);
console.log('elements: ', elements);
/* CONSOLE ********
elements:  [
  1, 1, 2, 2,
  3, 3, 4, 4
]
******************/
