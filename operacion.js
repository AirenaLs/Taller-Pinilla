function calcularResultado() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacion = document.getElementById("operation").value;
    var resultado;

    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "No se puede dividir por cero";
        }
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}