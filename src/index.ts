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

    // Toda vez que essa classe for cirada, ela vai passar pelo método "constructor".
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