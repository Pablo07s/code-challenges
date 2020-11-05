const arrayA = ['1', '2', '3'];
const arrayB = ['4', '5', '6'];

// if (arrayA[0] > arrayB[0]) {
//     console.log('Alice recibe un punto');
// } else {
//     console.log('Bob recibe un punto');
// } if (arrayA[0] = arrayB[0]) {
//     console.log('Nadie recibe puntos');
// }

switch (true) {
    case 1:
        arrayA[0] > arrayB[0]
        console.log('Alice recibe un punto');
        break;
    case 2:
        arrayA[0] < arrayB[0]
        console.log('Bob recibe un punto');
        break;
    case 3:
        arrayA[0] === arrayB[0]
        console.log('Nadie recibe puntos');
        break;
}