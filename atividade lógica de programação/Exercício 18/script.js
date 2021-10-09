function calcular(){
    var valor = parseInt(document.getElementById("valorProduto").value);
    var lucro = parseInt(document.getElementById("lucro").value);
    var porcentagem = (lucro/100);
    var calcularLucro = valor*porcentagem;
    var resposta = valor + calcularLucro;
    var resultado = `A peça de R$${valor} e com lucro de ${lucro}% você vai obter ${resposta}, R$${calcularLucro} a mais.`
    document.getElementById("resultado").innerHTML = resultado;
}