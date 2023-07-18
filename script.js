//var
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

let forma1 = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;
//let basicamente serve para o bloco poder acessar a variavel que está fora e atribuir um novo valor

if (forma1 === 'triangulo') {
    area = altura * comprimento;
}
else {
    area = (altura * comprimento)/2;
}


console.log(area);

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;
//uma variavel const precisa ser atribuido um valor, e ele não pode ser alterado

if (forma === 'quadrado') {
    area = altura * comprimento;
}
else{
    area = (altura * comprimento)/2;
}
console.log(area);
