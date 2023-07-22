
// parametros de função

function soma(num1, num2){
     return num1 + num2;
}
console.log (soma(2,2))

// parametros x argumentos

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(40, "Juliana"));

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(2, 3), soma(4, 5)));