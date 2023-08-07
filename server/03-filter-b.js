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

// Búsqueda de una sola variable
const rpta3 = orders.filter(item => item.delivered);
console.log('rpta3', rpta3);

// Büsqueda de dos variables
const rpta4 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rpta4', rpta4);

// Función búsqueda
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));
console.log(search('asdf'));