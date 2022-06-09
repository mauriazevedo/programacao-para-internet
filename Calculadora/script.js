function somar(n1, n2){
    const soma = n1 + n2;
    return soma;
}

function subtrair(n1, n2){
    const diferenca = n1 - n2;
    return diferenca;
}

function multiplicar(n1, n2){
    const produto = n1 * n2;
    return produto;
}

function dividir(n1, n2){
    const quociente = n1/n2;
    return quociente;
}

function pegarNumeros(){
    const n1 = Number(prompt("Digite o primeiro número: "));
    const n2 = Number(prompt("Digite o segundo número"));

    return {n1, n2};
}

const menu = `
O que você quer fazer?
Somar..........1
Subtrair.......2
Multiplicar....3
Dividir........4`;

let decisao;
let opcaoMenu;

do{
    opcaoMenu = prompt(menu);

    if(opcaoMenu == "1"){
        const numeros = pegarNumeros();
        const soma = somar(numeros.n1, numeros.n2);

        alert(`A soma dos números é ${soma}`);

    }else if(opcaoMenu == "2"){
        const numeros = pegarNumeros();
        const diferenca = subtrair(numeros.n1, numeros.n2);

        alert(`A diferença dos números é ${diferenca}`);
    }else if(opcaoMenu == "3"){
        const numeros = pegarNumeros();
        const produto = multiplicar(numeros.n1, numeros.n2);

        alert(`O produto dos números é ${produto}`);
    }else if(opcaoMenu == "4"){
        const numeros = pegarNumeros();
        const quociente = dividir(numeros.n1, numeros.n2);

        alert(`O quociente da divisão é ${quociente}`);
    }else{
        alert("Opção inválida");
    }

    decisao = prompt("Deseja continuar? S/N");
}while(decisao.toUpperCase() === "S");