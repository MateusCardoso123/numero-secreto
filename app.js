 alert('Boas vindas ao jogo do número secreto');
 let numeroMaximo = 5000; 
 let numeroSecreto = par*-+--seInt(Math.random() * numeroMaximo + 1);
 console.log(numeroSecreto);
 let chute;  
 let tentativas = 1;

// se o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('escolha um numero de 1 a 5000');
    // se chute for igual ao numero secreto
 if(chute == numeroSecreto){
    break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`); 
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}else {
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
