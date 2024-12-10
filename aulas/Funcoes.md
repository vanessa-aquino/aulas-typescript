A declaração de funções é a mesma que em JS, mas aqui, você pode tipar os parâmetros e os retornos das funções.

Ex: function addNumber(x: number, y: number): number {
    return x + y;
}

Para que eu consiga associar essa função a alguma variável, ela precisa ser do tipo number também.

Ex: let soma: number = addNumber(4, 7);


As funções também podem ser multi tipo.

Ex: function callToPhone(phone: number | string) {
    return phone;
}

// ----------------------- // ----------------------- // -----------

ASYNC FUNCTIONS

Assim como no JavaScript, ela vai sempre retornar uma Promise, e você também pode tipar essa promise.

Ex: async function getDatabase(id: number): Promise<number | string> {
    return "Vanessa";
}

