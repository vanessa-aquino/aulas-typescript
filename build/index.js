"use strict";
function intro() {
    console.log('Hello World!');
}
const bot = {
    id: 1,
    name: "Marcos",
    sayHello: function () {
        return ('Os androids ganharam vida.');
    }
};
console.log(bot);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, 'Vanessa');
console.log(p.sayHello());
