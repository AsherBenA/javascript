const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*for (let i of numeros){
    if(i === 2){
       console.log('Pulei o 2');
       continue 
    }
    console.log(i)
    if( i === 7){
        console.log('7 encontrado');
        break
    }
}*/

let i = 0
while(i < numeros.length){
    let numero = numeros[i];

    if(i === 2){
        console.log('Pulei o 2');
        i++
        continue 
     }
     console.log(i)
     if( i === 7){
         console.log('7 encontrado');
         i++
         break
     }

     i++
}