const numero = Number(prompt(`Digite um numero:`));

const numeroTitulo = document.getElementById(`numero_titulo`);

const texto = document.getElementById(`texto`); 

numeroTitulo.innerHTML = numero;

texto.innerHTML+=`<p>A raiz quadrada do seu numero é: <strong>${Math.sqrt(numero)}</strong></p>`;// pode ser encontrado esse valor elevando o numero a 0.5 usando o operado **
texto.innerHTML +=`<p>O numero ${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML +=`<p>O numero ${numero} é NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML +=`<p>O numero ${numero} aredondado pra cima é: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML +=`<p>O numero ${numero} aredondado pra baixo é: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML +=`<p>O numero ${numero} com duas casas decimais é: <strong>${numero.toFixed(2)}</strong></p>`;

