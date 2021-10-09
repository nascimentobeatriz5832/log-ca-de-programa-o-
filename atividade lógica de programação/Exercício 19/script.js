 function trocar(){
     var n1 = parseInt(document.getElementById("A").value);
     var n2 = parseInt(document.getElementById("B").value);
     var troca;
     

        troca = n1;
        n1 = n2;
        n2 = troca;
        var resultado = `O novo valor do primeiro número é ${n1} e o novo valor do segundo número ${n2}`;
        document.getElementById("conteudo").innerHTML = resultado;
}


