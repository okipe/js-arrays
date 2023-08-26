const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Método FOR para 2 niveles
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

console.log('Método for:', newArray);
/* CONSOLE ***********
Método for: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
**********************/
// Hacer esto sin flat se suele preguntar en entrevistas técnicas.

// Método FOR para varios niveles

const matriz2 = [
    0,
    [1,2,3],
    [4,5,[6,7,8,[9,10]]],
    [[11,12,[13,14],15],16]
];

function aplanarMatrizMultiple(matriz2){
    let array = [];
    for (element of matriz2) {
        if(Array.isArray(element)){
            array = array.concat(aplanarMatrizMultiple(element));
        } else {
            array.push(element);
        }
    }
    return array;
}

console.log(aplanarMatrizMultiple(matriz2));
/* CONSOLE *******************
[
   0,  1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12, 13,
  14, 15, 16
]
*****************************/

const rpta1 = matriz2.flat(3);
console.log('Método Flat: ', rpta1);

/* CONSOLE ****************
Método Flat:  [
   0,  1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12, 13,
  14, 15, 16
]
**************************/