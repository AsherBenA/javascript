//atribuição via desestruturação em arrays

/*let a = 'A'// B
let b = 'B'// C
let c = 'C'// A

const alfabeto = ['B', 'C', 'A'];

[a,b,c] = alfabeto;

console.log(a, b, c)*/

//const numeros = [1, 2, 3, 4, 5, 6, 7];
//const [ primeiro, , terceiro, , quinto, ...resto]= numeros;
//console.log(primeiro, terceiro, quinto);
//console.log(resto);



const numeros = [ [1 ,2 ,3],[4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3]= numeros;
console.log(lista2[2])
