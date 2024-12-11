Os generics são componentes que podem funcionar em uma variedade de tipos em vez de um único. Isso permite que os usuários consumam esses componentes e usem seus próprios tipos.

São muito utilizados em funções que podem retornar qualquer coisa. Mas se vai retornar qualquer coisa, não poderiamos tipar essa função com "any"?

Sim, mas ao fazermos isso, podemem ser gerados erros. Por exemplo, se essa função tiver que retornar dois arrays diferentes, um array de números e um array de strings, ao utilizarmos o "any", poderiamos colocar uma string no array de números que não daria erro.

Para evitar esses erros, utilizamos os generics, que são representados pelo <T>.