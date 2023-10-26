function calcularDiferenca() {
    var pesoAtual = parseFloat(document.getElementById('pesoAtual').value);
    var metaPeso = parseFloat(document.getElementById('metaPeso').value);
    var resultadoDiv = document.getElementById('resultado');

    if (isNaN(pesoAtual) || isNaN(metaPeso)) {
        resultadoDiv.innerText = "Por favor, insira valores válidos.";
        resultadoDiv.style.color = 'red';
    } else {
        var diferenca = pesoAtual - metaPeso;
        var mensagem = "";

        if (diferenca > 0) {
            mensagem = "Você precisa perder " + diferenca.toFixed(2) + " kg para chegar a sua meta.";
            resultadoDiv.style.color = 'red';
        } else if (diferenca < 0) {
            mensagem = "Você precisa ganhar " + Math.abs(diferenca).toFixed(2) + " kg para atingir a sua meta.";
            resultadoDiv.style.color = 'green';
        } else {
            mensagem = "Parabéns! Você atingiu sua meta de peso.";
            resultadoDiv.style.color = 'blue';
        }

        resultadoDiv.innerText = mensagem;
    }
}