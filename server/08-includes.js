const pets = ['cat', 'dog', 'duck'];

// Ciclos FOR
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }   
}

console.log('Ciclo FOR: ', includeInArray);

/* CONSOLE **************
Ciclo FOR:  true
************************/

// metodo INCLUDES
const rpta2 = pets.includes('dog');

console.log('Método INCLUDES: ', rpta2);

/* CONSOLE **************
Método INCLUDES:  true
************************/
