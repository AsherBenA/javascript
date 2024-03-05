const elementos = [
    {tag:'p', texto:'Frase 1'},
    {tag:'div', texto:'Frase 2'},
    {tag:'footer', texto:'Frase 3'},
    {tag:'section', texto:'Frase 4'},
];

//let container = document.querySelector('.container');
const container = document.querySelector('.container');
let div = document.createElement('div');

for (let i=0; i < elementos.length; i++) {
    //console.log(elementos[i].tag);
    let {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);