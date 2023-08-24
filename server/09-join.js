const elements = ["Fire", "Air", "Water"];

let rptaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rptaFinal = rptaFinal + element + separator;
}

console.log('ciclo FOR: ', rptaFinal);
/* CONSOLE *************
ciclo FOR:  Fire--Air--Water--
************************/

const rpta2 = elements.join('--');
console.log('Con JOIN:', rpta2);

/* CONSOLE *************
Con JOIN: Fire--Air--Water
************************/