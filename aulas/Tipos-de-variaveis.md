TIPOS PRIMITIVOS:

1 - Boolean;  Ex: let ligado: boolean = false;
2 - Number;   Ex: let nome: string = "Vanessa";
3 - String;   Ex: altura: number = 1.7;
// ----------------------- // ----------------------- // -----------

TIPOS ESPECIAIS:

1 - Null;       Ex: let nulo: null = null;
2 - Undefined;  Ex: let indefinifo: undefined = undefined;

// ----------------------- // ----------------------- // -----------


TIPOS ABRANGENTES:

1 - Any;   Ex: let retornoView:any = Pode retornar qualuqer coisa;
2 - Void;  Ex: let retorno:void = void // Ex: function executaQuery(): void{};

Exemplo de uso de Void: Pode ser usado quando se tem uma função que não vai retornar nada.

// ----------------------- // ----------------------- // -----------

TIPO OBJETO:

Esse tipo requer que seja um objeto, não importando o seu conteúdo. Mas, eu posso passar um "Type" para ele, e com isso defino que todos os meus objetos devem seguir aquele modelo.

Ex: type ProdutoLoja = {
    nome: string;
    preco: number;
    unidade: numer;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

Se eu tirar qualquer propriedade do objeto acima, ele irá dar erro, pois ele precisa ter todas as características da tipagem acima.

// ----------------------- // ----------------------- // -----------

ARRAYS:

Para declarar arrays em TS, é necessário passar o seu tipo antes do colchete [].

Ex: let dados: string[] = ["Vanessa", "Bruna", "Carla"]; 

Outra forma de declarar:
let dados: Array<string> = ["Vanessa", "Bruna", "Carla"];


ARRAYS DE MULTI TIPOS:

É possível definir um array que aceite mais de um tipo.

Ex: let infos: (string | number)[] = ["Vanessa", 24];

// ----------------------- // ----------------------- // -----------

TUPLAS:

A Tupla é um vetor de multi tipos, ou seja, conseguimos colocar mais de um tipo, mas ela te um lugar certo para cada coisa.

Ex: let boleto:[string, number, number] = ["agua conta", 199,90, 32342342];

Se eu inverter essa ordem, e colocar, por exemplo, o número como o primeiro dado, dará erro.


// ----------------------- // ----------------------- // -----------

MÉTODOS:

O TypeScript possui os mesmos métodos do JavaScript, podendo ser usado em seus arrays.


// ----------------------- // ----------------------- // -----------

DATAS:

Esse tipo de variável me permite definir data e hora (no padrão americano).

Ex: let aniversario:Date = new Date("2022-12-01 05:00")

