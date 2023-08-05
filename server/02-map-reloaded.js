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
];

// Extraer datos de un objeto
console.log('original', orders);
const rpta = orders.map(item => item.total);
console.log('rpta', rpta);
// rpta [ 60, 120, 180, 240 ]

// Agregar un nuevo elemento a un objeto
const rpta3 = orders.map (item => {
    return {
        ...item, // es de ES6, clona el objeto pero sin referencia en memoria
        tax: .19
    };
});

console.log("rpta3", rpta3);
console.log("original", orders);



/* PROBLEMA: 
Esto repercute en el dato referenciado, por ello no se usa

// Agregar un nuevo elemento a un objeto
const rpta2 = orders.map (item => {
    item.tax = .19;
    return item;
});

console.log("rta2", rta2);
console.log("original", orders);
****************/