const numbers = [1,30,49,29,10,13];

// CICLOS FOR
let rpta1 = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40) {
        rpta1= false;
    }
}

console.log('Respuesta FOR: ', rpta1);
/* CONSOLE ***************
Respuesta FOR:  false
***********************/

// CON EVERY
const rpta2 = numbers.every(item => item <= 40);
console.log('Respuesta EVERY: ', rpta2);

/* CONSOLE ***************
Respuesta EVERY:  false
***********************/