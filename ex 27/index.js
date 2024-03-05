function divisao(n){
    if (n%3 === 0 && n%5  === 0){
        return 'FizzBuzz';
    } else if (n%3===0) {
        return 'Fizz';
    } else if (n%5===0) {
        return 'Buzz';
    } else {
        return n
    }
}

//function checagem(check){

//}
for( let i = 0 ; i <= 100; i++){
    console.log(i, divisao(i))
}
