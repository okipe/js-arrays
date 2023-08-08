const totals = [1,2,3,4];

// Con ciclos for
let sum = 0;
for (let i = 0; i < totals.length; i++) {
    const element = totals[i];
    sum = sum + element;
}

console.log('for:', sum);
// 10

// REDUCE

const rpta = totals.reduce((sum, element) => sum + element, 0)
console.log('reduce:', rpta);
// reduce 10
