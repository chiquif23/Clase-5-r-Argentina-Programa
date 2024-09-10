//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonTotal = document.querySelector('#boton-calcular');

$botonTotal.onclick = function(){
    const MIN_EN_HORAS = 60
    const SEG_EN_HORAS = 3600
    
    let sumaHoras = 0
    let sumaMinutos = 0
    let sumaSegundos = 0
    let sumaTotal
    
    for (let i = 1; i < 6; i ++) {
        const horas = Number(document.querySelector(`#clase${String(i)}-horas`).value);
        const minutos = Number(document.querySelector(`#clase${String(i)}-minutos`).value);
        const segundos = Number(document.querySelector(`#clase${String(i)}-segundos`).value);
        sumaHoras += horas
        sumaMinutos += minutos
        sumaSegundos += segundos
    }
    //suma total en horas
    sumaTotal = (sumaHoras + (sumaMinutos / MIN_EN_HORAS) + (sumaSegundos / SEG_EN_HORAS))
    document.querySelector('#total').innerText = `${sumaTotal.toFixed(2)}` + ' horas'
    return false;
}