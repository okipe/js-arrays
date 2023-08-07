const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);

const rpta = words.filter(item =>item.length >= 6);

console.log('rpta', rpta);
console.log('original', words);