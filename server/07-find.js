const numbers = [1, 30, 49, 29, 10, 13];

// ciclos FOR
let rpta1 = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rpta1 = element;
        break;
    }
}

console.log('Respuesta FOR:', rpta1);
/* CONSOLE ***************
Respuesta FOR: 30
***********************/

// ciclos FIND

const rpta2 = numbers.find(item => item === 30)
console.log('Metodo FIND: ', rpta2);

/* CONSOLE ***************
Metodo FIND:  30
***********************/
