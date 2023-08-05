const letters = ['a', 'b', 'c', 'd'];

const newArray = letters.map(item => item + '++')

/* // Sin map 
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
*/

console.log('original', letters);
console.log('new', newArray);