const pessoa = {
    nome: 'Cindy',
    sobrenome: 'Penha',
    idade: 21,
    endereco: {
        rua: 'Rua Barão de Canindé',
        //numeros: 1630,
    }
}
//const rua = pessoa.endereco.rua
//const nome= pessoa.nome
//console.log(nome)
//console.log(rua)

const {nome, sobrenome, idade: i, endereco: {rua, numero: n = 1630} } = pessoa;

console.log(nome, sobrenome, i, rua, n)
