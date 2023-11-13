function verificarParOuImpar() {
    var numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    var resultadoString = (numero % 2 === 0)
        ? "O número é PAR."
        : "O número é ÍMPAR.";

    document.getElementById("resultado").innerHTML = resultadoString;

    document.body.className = (numero % 2 === 0) ? "par" : "impar";
}