const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1 , num2) => num1 + num2;

// arrow fuction com + de uma linha
const somaNumeroPequenos = (num1 , num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9";
    }
    else {
        return num1 + num2;
    }
}
console.log(somaNumeroPequenos(1, 2));