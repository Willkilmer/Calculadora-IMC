var calcular = document.getElementById("calcular");
calcular.addEventListener("click", () => {
    //obter altura
    var altura = +document.getElementById("altura").value;
    //obter peso
    var peso = +document.getElementById("peso").value;
    //calcular o Imc, utilizando a altura e o peso informados
    var imc = peso / (altura * altura);
    //com o IMC calculado< encontrar a situação na tebela. Se o resultado for:
    var situacao = "";
    //abaixo de 17 então a situação é Muito abaixo do peso
    if (imc < 17)
        situacao = "Muito abaixo do peso";
    //entre 17 e 18,49 então a situação é Abaixo do peso
    else if (imc >= 17 && imc <= 18.49)
        situacao = "Abaixo do peso";
    //entre 18.50 e 24,99 então a situação é Peso normal
    else if(imc >= 18.5 && imc <= 24.99)
        situacao = "Peso normal";
    //entre 25 e 29.99 então a situação é Acima do peso
    else if(imc >= 25 && imc <= 29.99)
        situacao = "Acima do peso";
    //entre 30 e 34,99 então a situação é Obesidade
    else if(imc >= 30 && imc <=34.99)
        situacao = "Obesidade I";
    //entre 35 e 39,99 então a situação é Obesidade II (severa)
    else if(imc >= 35 && imc <= 39.99)
        situacao = "Obesidade II (severa)";
    //acima de 40 então a situação é Obesidade III (mórbida)
    else if(imc >= 40)
        situacao = "Obesidade III (mórbida)";
    //exibir situação
    alert(situacao);
});