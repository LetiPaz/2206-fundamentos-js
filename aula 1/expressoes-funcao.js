// expressão de função (outra forma de escrever funcao):

const soma = function(num1 , num2){return num1 + num2}

// diferença principal !!!!!! a forma expressao se comporta como uma variavel, então só posso chamar ela depois de ela ser executada

console.log(apresentar());
function apresentar(){
    return "ola";
}

const somar = function(num1 , num2){return num1 + num2}
console.log(somar(1,1));