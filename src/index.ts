function intro() {
    console.log('Hello World!')
}


// EXEMPLO DE USO PARA INTERFACE 

interface robot {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: "Marcos",
    sayHello: function (): string {
        return ('Os androids ganharam vida.');
    }
}

console.log(bot);

// implements é usado para verificar se a classe satisfaz uma interface.
class Pessoa implements robot {
    id: number | string;
    name: string;

    // Toda vez que essa classe for criada, ela vai passar pelo método "constructor".
    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1, 'Vanessa');
console.log(p.sayHello());

// ----------------------- // ----------------------- // -----------

// ESTRUTURA BÁSICA DE UMA CLASSE:

class Character {
    name?: string; // Opcional por causa da interrogação(?).
    stregth: number;
    protected skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

     attack(): void { // Método opcional que retorna vazio.
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character('Geralt', 10, 98);
console.log(p1)
p1.attack();

// ----------------------- // ----------------------- // -----------

// ESTRUTURA DE SUBCLASS:

// Leitura da linha: A classe "Magician" extende, é uma extensão da classe "Character".
class Magician extends Character {
    // A propriedade da minha subclass deve ser passada também como parâmetro do "constructor" e deve ser chamada após o "super".
    magicPoints: number; // Nova propriedade.

    // Aqui no contrutor eu preciso passar os mesmos parâmetros da minha superclass.
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {

        // Preciso chamar o construtor "super", de "superclass" ou "classe pai" e passar os mesmos parâmetros que eu passei na minha superclass, mas sem a necessidade de declarar seu type novamente.
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p2 = new Magician ('Yennefer', 9, 30, 100);
console.log(p2);

// ----------------------- // ----------------------- // -----------

// GENERICS:

// EXEMPLO DE FUNÇÃO COM ANY:

function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numArr = concatArray([1,5], [3]);
console.log(numArr);
const strArr = concatArray(['Bala', 'Chiclete'], ['Bolo', 'Brigadeiro']);
console.log(strArr);

numArr.push('festa');
console.log(numArr);

// EXEMPLO DE FUNÇÃO GENÉRICA:

function concatArrayGen<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArrGen = concatArrayGen<number[]>([1,5], [3]);
console.log(numArrGen);
const strArrGen = concatArrayGen<string[]>(['Bala', 'Chiclete'], ['Bolo', 'Brigadeiro']);
console.log(strArrGen);
