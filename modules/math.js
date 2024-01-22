const Math = {};//se declara una variable que se utiliza para agrupar las funciones relacionadas con operaciones matemáticas.

function add(a,b) {//función llamada add que toma dos parámetros para sumar
    return a + b;
}

function substract(a,b) {//función llamada substract que toma dos parámetros para restar
    return a - b;
}

function multiply(a,b) {//función llamada multiply que toma dos parámetros para multiplicar
    return a * b;
}

function divide(a,b) {//función llamada divide que toma dos parámetros para dividir
    if (b == 0) {
        return "Error: no se puede dividir entre cero"// si b es igual a cero, devuelve un mensaje de error indicando que no se puede dividir entre cero
    } else {
        return a / b;
    }

}

Math.add = add;// esta funcion se asigna como propiedad al objeto Math
Math.substract = substract;// esta funcion se asigna como propiedad al objeto Math
Math.multiply = multiply;// esta funcion se asigna como propiedad al objeto Math
Math.divide = divide;// esta funcion se asigna como propiedad al objeto Math

module.exports = Math;//se exporta Math para importarlo en el archivo app.js