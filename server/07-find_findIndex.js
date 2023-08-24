const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕',
    },
    {
        name: "Burger",
        price: 20,
        id: '🍔',
    },
    {
        name: "Spaggethi",
        price: 25,
        id: '🍝',
    },
    {
        name: "Ramen",
        price: 35,
        id: '🥘',
    }
];

// FIND
const rpta1 =  products.find(item => item.id === '🥘');
console.log('FIND: ', rpta1);
/* CONSOLE **********
FIND:  { name: 'Ramen', price: 35, id: '🥘' }
********************/

// FIND INDEX
const rpta2 = products.findIndex(item => item.id ==='🥘');
console.log('FIND INDEX', rpta2);

/* CONSOLE **********
FIND INDEX 3
*******************/