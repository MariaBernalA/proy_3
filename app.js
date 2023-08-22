//Paquete importado
require('colors');

const Math = require('./modules/math.js');
// referencia el modulo math a traves de la constante math
const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    console.log('*************************'.bgMagenta);
    console.log('*  '.bgMagenta + 'Funciones Matematicas'.bgMagenta +  '  *'.bgMagenta);
    console.log('************************\n'.bgMagenta);
    
    console.log('*********************************'.bgBlue);
    console.log(' *'.bgBlue +  'Suma =>' + math.add(5,3) + '*****'.bgBlue);
    console.log(' *'.bgBlue +  'Resta =>' + math.substract(2,8) + '*********'.bgBlue);
    console.log(' *'.bgBlue +  'Multiplicacion =>' + math.multiply(2,8) + '*******'.bgBlue);
    console.log(' *'.bgBlue +  'Dividicion =>' + math.divide(3,2) + '**'.bgBlue);
    console.log('*********************************'.bgBlue);
}

main();