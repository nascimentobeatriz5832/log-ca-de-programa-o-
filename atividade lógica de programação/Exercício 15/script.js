function calcular(){
    const valor = 8190
    var parcelas = parseInt(document.getElementById("parcelas").value);
    var div = valor/parcelas;
    
    var resultado = `Dividir em ${parcelas} vezes o valor vai ficar ${div} reais`;
    document.getElementById("resultado").innerHTML = resultado;
}