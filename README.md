# Criando um projeto pelo create react app

yarn create react app <nome do projeto> --template typescript

• Limpando os arquivos desnecessários para o início do projeto.

- Public: deletando todos os arquivos do public menos o index
- src: deixando apenas App.tsx, indes.tsx e react-app-env.d.ts

dica: Preferir não usar o export default pois teremos uma maior segurança ao renomear ou reaproveitar futuramente. A importação fica mais inteligente pois temos um nome para tudo que é importado e exportado.

• Iniciando o projeto

- yarn start

# CSS in JS

yarn add styled-components
yarn add @types/styled-components -D

Styled-Components: Estiliza dentro do arquivo .tsx (componente) evitando sobreposições de classes de outros componentes. Tornando o arquivo "scoped" tudo daquele componente apenas em um arquivo.

# Mirage Js

• Biblioteca de JavaScript para a integração com banco de dados e API fictícia para o projeto

- https://miragejs.com/

yarn add miragejs

# Axios

• Biblioteca que facilita e intercepta as requisições de forma mais prática. É criado uma espécie de script para substituir o fecth

yarn add axios

# React Modal

• Biblioteca que ja vem com configurações pré-prontas para criação de modals.

- https://github.com/reactjs/react-modal
- http://reactcommunity.org/react-modal/

yarn add react-modal
yarn add @types/react-modal -D

# Polished

• Consegue usar funções JavaScript para manipulação de cores.

yarn add polished

# Chalk

• Foi necessário instalar o Chalk para o código rodar perfeitamente

yarn add chalk
