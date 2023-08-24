const title = 'Curso de manipulación de Arrays';

console.log(title.split(' '));

/* CONSOLE *************
[ 'Curso', 'de', 'manipulación', 'de', 'Arrays' ]
***********************/

const titleURL = title.split(' ').join('-').toLowerCase();
console.log(titleURL);

/* CONSOLE *************
curso-de-manipulación-de-arrays
***********************/