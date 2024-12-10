A Interface é muito parecedida com o Type, exceto pelo fato dela não possuir o sinal de igualdade (=) na sua estrutura. 

Ex com Type:

type robot = {
    id: number | string;
    name: string;
} 

Ex com Interface:

interface robot2 {
    id: number | string;
    name: string;
} 

O type, geralmente é mais utilizado para você de fato tipar um conjunto, um objeto. Já o interface é mais utilizado quando vamos trabalhar com classes. Então, se você quer tipar uma variável específica para que as propriedades que ela receba sejam sempre as mesmas, geralmente você pode trabalhar com o Type, mas se o seu intuíto é trabalhar com classes, você pode utilizar o interface.

O interface nada mais é do que um contrato, e aquele que o recebe deve seguir esse contrato.


CARACTERÍSTICAS EM COMUM:

* Ambos são multi tipos;
* Podem obter uma propriedade chamada "readonly" que é um modificador de acesso, é usada para permitir somente leitura.

Ex: readonly id: number | string;

