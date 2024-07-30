function calculaOperacoes(){
  var n1 = prompt("Informe o primeiro valor");
  var n2 = prompt("Informe o segundo valor");

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  var soma = n1 + n2;
  var subtracao = n1 - n2;
  var mult = n1*n2;

  alert(n1+" + "+n2+" = "+soma);
  alert(n1+" - "+n2+" = "+subtracao);
  alert(n1+" x "+n2+" = "+mult);

}

function calculaOperacoes2(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
  
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
  
    var soma = n1 + n2;
    var subtracao = n1 - n2;
    var mult = n1*n2;
  
    alert(n1+" + "+n2+" = "+soma);
    alert(n1+" - "+n2+" = "+subtracao);
    alert(n1+" x "+n2+" = "+mult);
  
  }