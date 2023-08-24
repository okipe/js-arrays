const numbers = [1, 2, 3, 5];

// Usando FOR
let rpta1 = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rpta1 = true;
        break;
    }
}

console.log('con For: ', rpta1);

/* CONSOLE ***************
con For:  true
***********************/

// Usando SOME
const rpta2 = numbers.some(item => item % 2 === 0);
console.log('con Some: ', rpta2);

/* CONSOLE ***************
con Some:  true
***********************/

// OTRO EJEMPLO

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolasa",
        total: 2322,
        delivered: false,
    },
];

const rpta3 = orders.some(item => item.delivered);
console.log('Respuesta 3: ', rpta3);

/* CONSOLE ***************
Respuesta 3:  true
***********************/