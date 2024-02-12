/*const pessoa1 = {
    nome:'Luis',
    sobrenome: 'Carlos',
    idade: 25
};

console.log(pessoa1.nome);
*/

function criaPessoa (nome, sobrenome, idade){
    return  {
        nome:nome,
        sobrenome :sobrenome,
        idade :idade,
    };
}

const pessoa1 = criaPessoa ('Luis', 'Carlos', 25)
const pessoa2 = criaPessoa ('Cindy', 'Penha', 20)
const pessoa3 = criaPessoa ('Eloah', 'Yaffa', 1)

console.log(pessoa1.nome, pessoa2.nome,pessoa3.sobrenome)
