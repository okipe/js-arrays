const letters = ['a', 'b', 'c'];

// Lo normal
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

letters.forEach(item => console.log('forEach', item))

/* 
// Sintaxis de función regular
letters.forEach(function(item) {
    console.log('for each', item);
  });
*/ 
  