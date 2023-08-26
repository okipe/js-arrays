const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", 'Cool'] },
]

// MAP sin flat
const rpta1 = users.map(user => user.attributes);
console.log('map sin flat: ', rpta1);
/* CONSOLE ******
map sin flat: [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]
****************/

// MAP con flat
const rpta2 = users.map(user => user.attributes).flat();
console.log('map con flat: ', rpta2);
/* CONSOLE ****
map con flat: [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
***************/

// FLATMAP

const rpta3 = users.flatMap(user => user.attributes);
console.log('FLATMAP: ', rpta3);
/* CONSOLE ************
FLATMAP:  [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
**********************/