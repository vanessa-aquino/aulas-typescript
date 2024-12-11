Os decorators fornecem uma maneira de adicionar anotações e uma sintaxe de metaprogramação para declarações de classe e membros. Em outras palavras, os decorators é usado quando você decora uma função para que ela dispare alguma outra ação.

Antes de usar o decorator, você precisa habilitá-lo no tsconfig.

Para usar o decorator, você deve usar o sinal de arroba (@) antes do nome da função.

// ----------------------- // ----------------------- // -----------

CLASS DECORATOR

O Decorator pe chamado em cima da classe que você quer.

Ex: function exibirNome(target: any) {
    console.log(target);
}

@exibirNome
class Funcionario {};

// ----------------------- // ----------------------- // -----------

ATTRIBUTE DECORATOR

É utilizado em cima de uma propriedade para acionar um comportamente para ela.