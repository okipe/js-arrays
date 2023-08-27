const months = ['Febrero', 'Julio', "fsdf", 'Diciembre', 'Enero'];
function monthValue(month) {
    switch (month.toUpperCase()) {
        // Asignamos un valor numérico a cada mes
        case 'ENERO':
            return 1;
        case 'FEBRERO':
            return 2;
        case 'MARZO':
            return 3;
        case 'ABRIL':
            return 4;
        case 'MAYO':
            return 5;
        case 'JUNIO':
            return 6;
        case 'JULIO':
            return 7;
        case 'AGOSTO':
            return 8;
        case 'SEPTIEMBRE':
            return 9;
        case 'OCTUBRE':
            return 10;
        case 'NOVIEMBRE':
            return 11;
        case 'DICIEMBRE':
            return 12;
        default:
            //Cualquier valor que no coincida se irá de último
            return 13; 
    }
}

months.sort((a, b) => monthValue(a) - monthValue(b))

console.log(months);