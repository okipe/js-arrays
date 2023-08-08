const items = [1, 3, 2, 3, 3, 1, 10];

const rpta1 = items.reduce((obj, item) => {
    // Si no lo encuentro, le asigno 1
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rpta1);
// { 1: 1, 2: 1, 3: 2 }

const data = [
    {
        customerName: "Nicolas",
        level: "low",
    },
    {
        customerName: "Zulema",
        level: "medium",
    },
    {
        customerName: "Santiago",
        level: "high",
    },
    {
        customerName: "Valentina",
        level: "low"
    },
    {
        customerName: "Nicolasa",
        level: "medium",
    },
    {
        customerName: "Diana",
        level: "high",
    },
];

const rpta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
} else {
    obj[item] = obj[item] + 1;
}
return obj;
},{});

console.log(rpta2);