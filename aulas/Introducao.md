- Todo TypeScript tem que ser convertido para JavaScript, para isso, existe um comando que precisa ser rodado sempre antes de começar a codar em TS, que é o "npx tsc pasta/nomedoarquivo.ts" Com esse comando, será criado automaticamente um arquivo JS com o mesmo nome do seu arquivo TS.

- Para não precisar ficar convertendo todos os arquivos manualmente, temos o comando "npx tsc --init" Quando se executa este comando, é criado automaticamente na raíz, um arquivo Json chamado "tsconfig.json". Esse é um arquivo de configuração de como o TypeScript deve se comportar. Esse arquivo é um Json com várias propriedades, onde podemos habilitar ou desabitar algumas configurações.

- Ao habilitar o "rootDir" e passar um caminho para ele, ao chamar o comando "npx tsc", ele só converterá para JS os arquivos que estiverem dentro do caminho que eu passar; e
- Ao habilitar o "outDir" e também passar um caminho para ele, será definido que todos os arquivos JS que forem criados automaticamentes com o comando "npx tsc" irá para o caminho definido aqui.

- Ao declarar um comando no arquivo "package.json" com a seguinte sintaxe: "scripts": {
    "start": "npx tsc && node build/index.js"
}

Você consegue executar os dois passos acima através de um comando só, que nesse caso seria: "npm run start"

// TS NODE DEV

Para não precisar fazer os passos acima na hora de ler o seu código em TS. Basta instalar o TS Node Dev que é um servidor que lê TypeScript. Após isso, basta acessar o arquivo "package.json" e configurá-lo da seguinte mandeira:

  "scripts": {
    "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  }

Após configurado, basta chamá-lo normalmente com o "npm run start:dev"