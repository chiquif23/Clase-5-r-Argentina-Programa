//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numeros = document.querySelectorAll('li');
let arrayNumeros = [];

for(let i = 0; i<numeros.length; i++) {
    //agrego a arrayNumeros
    arrayNumeros.push(Number(numeros[i].innerText));
}

//cálculos
//promedio
let suma = 0
for(let j = 0; j<arrayNumeros.length; j++) {
    suma += arrayNumeros[j]
}
let promedio = (suma / arrayNumeros.length).toFixed(2);
document.querySelector('#promedio').innerText = promedio
    
//menor
let min = Math.min(...arrayNumeros);
document.querySelector('#menor').innerText = min

//mayor
let max = Math.max(...arrayNumeros);
document.querySelector('#mayor').innerText = max

//más frecuente
let contador = {};
let numMaxMomentaneo = arrayNumeros[0];
let maxRepeticiones = 0;

for (let k = 0; k < arrayNumeros.length; k++) {
    let num = arrayNumeros[k];
    contador[num] = (contador[num] || 0) + 1;
    
    if (contador[num] > maxRepeticiones) {
        maxRepeticiones = contador[num];
        numMaxMomentaneo = num;
    }
}

document.querySelector('#frecuente').innerText = numMaxMomentaneo