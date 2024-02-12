const nome = "Luis Carlos"
const sobrenome = "Alves Dantas"
let idade = 25
let anoNascimento = 2024 - idade
let peso = 103
const alturaEmM = 1.80
let imc = peso / (alturaEmM ^2)
const alturaEmCm= alturaEmM * 100

console.log(`Meu nome é ${nome} ${sobrenome} tenho ${idade} anos e nasci no ano de ${anoNascimento}, eu peso ${peso}Kg e tenho uma altura de ${alturaEmM} metros, meu IMC é ${imc} e minha altura em centimetro é ${alturaEmCm} centimetros.`)