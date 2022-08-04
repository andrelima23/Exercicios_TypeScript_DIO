
//#################### Desafios ####################//


//#################### Desafio 1 ####################//
const exer1 = document.getElementById('exer1')

// utilizando interface para criar objeto:
interface Employee {
    code: number,
    name: string
}

const functJoao : Employee = {
    code: 1,
    name: 'João'
}

//#################### Desafio 2 ####################//

// utilizando enum e type:
enum Work {
    actor,
    actress,
    baker,
    retired
}

type Human = {
    name: string,
    age: number,
    profession: Work
}

const person1 : Human = {
    name: 'João',
    age: 98,
    profession: Work.retired
}

const person2 : Human = {
    name: 'Maria',
    age: 25,
    profession: Work.actress
}

const person3 : Human = {
    name: 'Érick Jacquin',
    age: 57,
    profession: Work.baker
}

//#################### Desafio 3 ####################//

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0;

function limparCampoSoma() {
    soma.value = "";
}

function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        saldo += soma
        campoSaldo.innerHTML = saldo.toString();
        limparCampoSoma();
    }
}

function limparSaldo() {
    if(campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});