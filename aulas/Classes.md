As classes são como receitas de bolo, você cria um padrão e tudo o que receber aquela classe deve seguir aquele modelo. 

- Posso deixar uma propriedade de uma classe como opcional, ao colocar um sinal de interrogação (?) ao lado do nome da propriedade, ates dos dois pontos.

Ex: class Character {
    name?: string;  
    skill: number;
}

Name se torna uma propriedade opcional, ou seja, não precisarei passar um name obrigatório na hora da criação de uma nova instância para essa classe, nesse exemplo, apenas "skill" é obrigatório passar.

// ----------------------- // ----------------------- // -----------

MODIFICADORES DE ACESSO ou DATA MODIFIERS:

Os Modificadores de Acesso ou Data Modifiers fazem referência a quem pode acessar um determinado dado da sua classe. Há três tripos de Data Modifiers: 

1 - Public -> Indica que a propriedade pode ser acessada de qualquer lugar. É o padrão;

2 - Private -> Indica que a propriedade só pode ser acessada por dentro da classe;

3 - Protected -> Indica que a propriedade só pode ser acessado por dentro da classe ou de subclasses que herdem essa classe.

OBS.: Os Data Modifiers também podem ser usados para métodos, e são colocadaos antes da propriedade ou do método em questão. 
Ex: Ex: class Character {
    protected name?: string;  
    skill: number;
}

// ----------------------- // ----------------------- // -----------

SUBCLASSES ou Subclass:

As Subclass são utilizadas para adicionar mais características a uma classe mas sem modifica-lá.

