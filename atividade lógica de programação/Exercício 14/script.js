function calcular(){
    var prova1 = parseFloat(document.getElementById("num1").value);
    var prova2 = parseFloat(document.getElementById("num2").value);
    var prova3 = parseFloat(document.getElementById("num3").value);
    var prova4 = parseFloat(document.getElementById("num4").value);
    var soma = prova1 + prova2 + prova3 + prova4;
    var media = soma/4;

    var resultado = `Sua média é ${media}`;
    document.getElementById("media").innerHTML = resultado;
}