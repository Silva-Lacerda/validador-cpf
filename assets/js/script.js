document.getElementById('validate').addEventListener('click', function(){
    let cpfHtml = document.getElementById('value').value;
    let cpfJs = cpfHtml;
    let arrayCpfString = cpfJs.split('');
    let arrayCpfNumber = arrayCpfString.map(function(numberString){
        return Number(numberString);
    })

    //cpf.push(Number(cpfHtml));


    function calcprimeiroDigito() {
        let i = 0;
        let somaUm = 0;
        while(i <= 8){ 
            let cont = arrayCpfNumber[i] * (10 - i);
            somaUm += cont; 
            i++;
        }
        return somaUm;
        
    }
    calcprimeiroDigito();



    function calcsegundoDigito() {
        let i = 0;
        let somaDois = 0;
        while(i <= 9){
            let contDois = arrayCpfNumber[i] * (11 - i);
            somaDois += contDois;
            //console.log(contDois);
            i++
        }
        return somaDois;
        
    }
    calcsegundoDigito();

    function restoPrimeiroDigito(){
        let restoDigitoUm = calcprimeiroDigito();

        if(restoDigitoUm % 11 < 2){
            restoDigitoUm = 0;
        } else {
            restoDigitoUm = 11 - (restoDigitoUm % 11);
        }
        return restoDigitoUm;
    }

    function restoSegundoDigito() {
        let restoDigitoDois = calcsegundoDigito();

        
        if(restoDigitoDois % 11 < 2){
            restoDigitoDois = 0;
        } else {
            restoDigitoDois = 11 - (restoDigitoDois % 11);
        }
        return restoDigitoDois;
    }


    function verificadorDigitos() {
        let digitoUm = restoPrimeiroDigito();
        let digitoDois = restoSegundoDigito();
        if(digitoUm == arrayCpfNumber[9] && digitoDois == arrayCpfNumber[10]) {
            return('CPF Válido');
        } else {
            return('CPF Inválido');
        }
        
    }
    verificadorDigitos();

    document.getElementById('result').innerHTML = (verificadorDigitos());
})