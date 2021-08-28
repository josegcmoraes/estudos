// para executar no terminal digite
// node script.js


const substract = (parameter1, parameter2) => {
    return parameter1 - parameter2;
}

const sum = (parameter1, parameter2) => parameter1 + parameter2;

const divide = (parameter1, parameter2) => parameter1 / parameter2;

const multiply = (parameter1, parameter2) => parameter1 * parameter2;

const operation = (parameter1, parameter2, typeOperation) => {
    return typeOperation(parameter1, parameter2);
}

const message = (text, parameter) => {
    console.log(`${text} ${parameter}`)
}
const result = operation(2, 9.4, substract);
message("substraction:", result);

const somarX = (x) => (y) => x + y;
const somar2 = somarX(2);
message('somar2:', (somar2(5)))


let vetor = []

for (let i = 0; i < 5; i++) {
    vetor.push(i * 4);
}
message("vetor:", vetor)
for (let numero of vetor) {
    message("n:", numero)
}
for (let indice in vetor) {
    message(`index: ${indice} value:`, vetor[indice])
}

let matriz = [
    [1, 3, 5],
    [2, 4, 6],
    [6, 7, 9]
]
let text = ""
for (linha of matriz) {
    text += "\n"
    for (element of linha) {
        text += `${element} `
    }

}
message("matriz", text)


// MAP transformação no vetor
const nomes = ['Jose', 'Maria', 'Ana', 'Ricardo']
const novosNomes = nomes.map((value) => {
    return value.toLowerCase();
}
)
message('nome:', novosNomes)

const vetor1 = ["5", "12", "9", "30"];
message('vetor1:', vetor1)
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor1.map(stringToInt)
message('vetor2:', vetor2)
const vetor3 = vetor2.map(element => element ** 2)
message('vetor3:', vetor3)

// FILTER VETOR DADO UMA CONDIÇÃO - filtrar elementos do vetor
const vetorNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = vetorNumeros.filter(element => element % 2 === 0)
message('pares:', pares)

// REDUCE agregar vetor, reduz a um valor ou objeto.
// somar todos os elementos do vetor
const vetorR = [1, 2, 3, 4, 5, 6];
const somatorio = vetorR.reduce((estado, item) => estado + item)
const produtorio = vetorR.reduce((estado, item) => estado * item, 1)
message('reduce somatório do vetor:', somatorio);
message('reduce produtório do vetor:', produtorio);

const matrizNumeros = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [6, 1, 5, 2, 3, 4]
];
const somaColuna = (estado, item) => {
    return [
        estado[0] + item[0] + item[1],
        estado[1] + item[2] + item[3],
        estado[2] + item[4] + item[5]
    ]
};
const vetorResultadoSomaColuna = matrizNumeros.reduce(somaColuna, [0, 0, 0]);
message("soma de colunas:", vetorResultadoSomaColuna)


// OBJETOS
const pessoa = {
    nome: 'Lucas',
    idade: 26
};
message("pessoa", `nome: ${pessoa.nome} - idade:${pessoa.idade}`)

const retangulo = {
    base: 10,
    altura: 12,
    calculaArea: function () { return this.base * this.altura }
};
message('retangulo area:', retangulo.calculaArea())

const agenda = {
    contatos: [
        { nome: 'contato1', numero: 911118888, email: 'contato1@teste.com' },
        { nome: 'contato2', numero: 922228888, email: 'contato2@teste.com' },
        { nome: 'contato3', numero: 933338888, email: 'contato3@teste.com' },
        { nome: 'contato4', numero: 944448888, email: 'contato4@teste.com' }
    ],
    adicionaContato: function (contato) { return this.contatos.push(contato) }
}

const contato = {
    nome: 'contato5',
    numero: 955558888,
    email: 'contato5@teste.com'
}
console.log(agenda.contatos);
agenda.adicionaContato(contato);
console.log(agenda.contatos);

// Classe - construtora de objetos
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Pedro', 20);
console.log(pessoa1);
pessoa1.idade = 21;
console.log(pessoa1);

const pessoa2 = new Pessoa('Laura', 32);
console.log(pessoa2);
console.log("\nvetor com objeto de pessoas");

let pessoas = [];
pessoas.push(pessoa1);
pessoas.push(pessoa2);
pessoas.push(new Pessoa('Larissa', 18));
console.log(pessoas);

// Atributos
class Triangulo {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) throw 'informação invalida para o triangulo';
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}
const triangulo = new Triangulo(5, 3);
triangulo.cor = 'green';
console.log(triangulo);

// MÉTODOS
class Trapezio {
    constructor(baseMaior, baseMenor, altura) {
        if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) throw 'medidas invalidas';
        this.baseMaior = baseMaior;
        this.baseMenor = baseMenor;
        this.altura = altura;
        this.cor = undefined
    }
    calculaArea() {
        return ((this.baseMaior + this.baseMenor) * this.altura) / 2;
    }
    duplicaBaseMaior() {
        this.baseMaior = this.baseMaior * 2;
    }
    // imprimir() {
    //     return `<div style='width:${this.baseMaior}px; height:${this.altura}px;background-color:${this.cor || 'red'}'><div>`;
    // }
}

const trapezio = new Trapezio(15, 5, 8);
console.log(trapezio);
console.log(trapezio.calculaArea());
trapezio.duplicaBaseMaior();
console.log(trapezio);


// ENCAPSULAMENTO proteger valor de um objeto
function RetanguloEncapsulado(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'green'; // atributo privado
}

const retanguloEncapsulado = new RetanguloEncapsulado(2, 4);
console.log(retanguloEncapsulado);
retanguloEncapsulado.cor = 'red'; // cria um novo atributo cor
console.log(retanguloEncapsulado.cor)

function criaRetangulo(base, altura) {
    let cor = 'blue';
    return {
        base,
        altura,
        getCor: function () { return cor; }
    };
}
const retangulo2 = new criaRetangulo(3, 7);
console.log(retangulo2)
console.log(retangulo2.getCor());

class RetanguloE2 {
    constructor(base, altura) {
        // let cor = 'black';
        this._cor = 'blue';
        this.base = base;
        this.altura = altura;
        // this.getCor = () => cor;
        // this.setCor = (newCor) => cor = newCor;
        // this.getCor = () => { return cor; };
    }
    getCor = () => this._cor;
    setCor = (newCor) => this._cor = newCor;
}
const retanguloE2 = new RetanguloE2(4, 5);
console.log(retanguloE2);
// retanguloE2.setCor('orange');
retanguloE2.cor = 'white'
console.log(retanguloE2.getCor());
console.log(retanguloE2)



// HERANÇA E POLIMORFISMO  herança classe filha e mãe; polimorfismo classe mãe e várias classes filhas

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Citizen extends Person {
    constructor(name, age, cpf, rg) {
        super(name, age);
        this.cpf = cpf;
        this.rg = rg;
    }
}


const citizen = new Citizen('Jon', 23, '11111', '1232');
console.log(citizen);
console.log(citizen instanceof Citizen);
console.log(citizen instanceof Person);





