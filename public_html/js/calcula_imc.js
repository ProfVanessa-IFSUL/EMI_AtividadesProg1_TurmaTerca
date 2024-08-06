function verificaGrauObesidade(){
    // entrada
    // leitura dos valores do HTML
    var  nome = document.getElementById("txtNome").value;
    var peso = document.getElementById("numPeso").value;
    var altura = document.getElementById("numAltura").value;

    // conversão de peso e altura - valores reais (valor numérico)
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // processamento
    // calcular IMC
    var imc = peso / (altura*altura);
    //var imc = peso / altura**2;
    
    if (imc < 18.5){
        alert(nome+" você está abaixo do peso");
    } else if (imc < 25){
        alert (nome+" você está no Peso ideal");
    } else if (imc < 30){
        alert (nome+" você está com sobrepeso");
    } else {
        alert (nome+" você está com Obesidade");
    }


    
}