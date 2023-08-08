/* RETO 
Contar por intervalos las veces que aparecen en una serie
1-5=5
6-8=3
9-10=5
*/

const list = [];

for(let i = 0; i < 30; i++) {5
    list.push(Math.floor(Math.random() * 11));
}

const series = list.reduce((obj, value) => {
    if (value < 5) obj["1-4"] += 1;
    else if (value < 9) obj["5-8"] +=1;
    else obj["9-10"] += 1;

    return obj
}, {
    "1-4": 0,
    "5-8": 0,
    "9-10": 0,
});

console.log(series);

