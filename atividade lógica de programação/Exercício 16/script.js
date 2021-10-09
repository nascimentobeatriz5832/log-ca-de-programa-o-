function calcular(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var soma = n1+ n2;
    var media = soma/2;

    if(media >= 7){
        document.getElementById("media").innerHTML = `Aprovado, sua média é ${media}`;
    }
    else{
        document.getElementById("media").innerHTML = `Reprovado, sua média é ${media}`;
    }
}


