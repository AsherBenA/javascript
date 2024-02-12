// IEEE 754-2008  (Padrão de precisão de numeros)

let num1 = 10 ; //number
let num2 = 3.5648; //number

//console.log(num1.toString() + num2); //transformar um "number" em uma string nessa linha
//num1 = num1.toString(); //transforma um number em uma strring definitivamente mudando o valor da variavel
//console.log(num2.toString(2)); //retorna o valor em código binário.
//console.log(num2.toFixed(2)); // fixa casas decimais depois do ponto flutuante
//console.log(Number.isInteger(num2));// retorna um valor true se o numero for inteiro e falso se não
/*let temp = num1 * "Olá";
console.log(temp);
console.log(Number.isNaN(temp));//retonar um valor true se o valor inserio for um NaN ou falso se a conta der certo*/



/*num1 = 0.7;
num2 = 0.1;

num1 += num2 // 0.8
num1 += num2 // 0.9 
num1 += num2 // 1.0

console.log(num1) // retorna impreciso 0.99999999
num1 = parseFloat(num1.toFixed(2));
console.log(num1)
console.log(Number.isInteger(num1))

num1 = Number(num1.toFixed(2)); //ou usando em vez de number, parsefloat
*/



num1 = 0.7;
num2 = 0.1;

num1 =((num1 * 10)+(num2 * 10))/10 // 0.8

console.log(num1);




