function calcularSalarioMensual(salarioAnual){
    const MESES_EN_UN_ANIO = 12;
    return (salarioAnual / MESES_EN_UN_ANIO).toFixed(2);
}

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(){
    const salarioAnualUsuario = Number(document.querySelector("#salario-anual").value);
    const salarioMensual = calcularSalarioMensual(salarioAnualUsuario);
    document.querySelector("#salario-mensual").value = salarioMensual;
    return false;
}
