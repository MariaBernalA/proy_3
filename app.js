//Paquete importado
require('colors');//se importa el modulo colors para agregar color al texto

const Math = require('./modules/math.js');//Se importa el módulo math.js utilizando la función require y se asigna a las constante Math
// referencia el modulo math a traves de la constante math
const math = require('./modules/math.js')//Se importa el módulo math.js utilizando la función require y se asigna a las constante math

console.clear();//se utiliza para limpiar la consola antes de imprimir cualquier salida.
console.log(math);

const main = async() => {
    console.log('*************************'.bgMagenta);
    console.log('*  '.bgMagenta + 'Funciones Matematicas'.bgMagenta +  '  *'.bgMagenta);//encabezado que se mostrara con dacoracion y colores en la consola
    console.log('************************\n'.bgMagenta);
    
    console.log('*********************************'.bgBlue);
    console.log(' *'.bgBlue +  'Suma =>' + math.add(5,3) + '*****'.bgBlue);//Se realizan operaciones matemáticas utilizando las funciones importadas de math
    console.log(' *'.bgBlue +  'Resta =>' + math.substract(2,8) + '*********'.bgBlue);
    console.log(' *'.bgBlue +  'Multiplicacion =>' + math.multiply(2,8) + '*******'.bgBlue);
    console.log(' *'.bgBlue +  'Dividicion =>' + math.divide(3,2) + '**'.bgBlue);
    console.log('*********************************'.bgBlue);
}

main();//se cierra la funcion math para ejecutar el codigo en ella