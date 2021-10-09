var idadeHumana = 7;
var idadeGato;
var resultado;

if(idadeHumana == 1){
    idadeGato = 15;
    resultado = `A idade seu gato em relação a um humano é ${idadeGato}`;
    document.getElementById("texto").innerHTML = resultado;
}
else if(idadeHumana == 2){
    idadeGato = 15 + 10;
    resultado = `A idade seu gato em relação a um humano é ${idadeGato}`;
    document.getElementById("texto").innerHTML = resultado;
}
else if(idadeHumana >= 3){
    idadeHumana = 4;
    idadeGato = 15 + 10 + (idadeHumana-2);
    resultado = `A idade seu gato em relação a um humano é ${idadeGato}`;
    document.getElementById("texto").innerHTML = resultado;

}