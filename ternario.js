const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima){
    console.log("cerveja")
}
else {
    console.log("suco")
}

// para comparacoes simples e mais cultas usa o ternario
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
