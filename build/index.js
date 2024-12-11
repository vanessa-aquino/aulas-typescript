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
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character('Geralt', 10, 98);
console.log(p1);
p1.attack();
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician('Yennefer', 9, 30, 100);
console.log(p2);
