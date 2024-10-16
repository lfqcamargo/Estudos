# Forum com NestJS

Este projeto "Forum com NestJS" foi desenvolvido como parte do repositório de estudos para explorar a criação de um sistema de fórum utilizando o framework NestJS. O objetivo deste projeto é demonstrar como o NestJS, combinado com TypeScript e outras tecnologias, pode ser utilizado para construir aplicações server-side robustas e escaláveis.

## Tecnologias Utilizadas

- **NestJS**: Framework Node.js progressivo, utilizado como base para a construção da API, oferecendo uma estrutura sólida e modular para o desenvolvimento de aplicativos escaláveis.
- **TypeScript**: Usado para adicionar tipagem estática ao código JavaScript, melhorando a manutenção e a escalabilidade do projeto.
- **Prisma**: Utilizado como ORM para interagir com o banco de dados, facilitando a modelagem e consulta dos dados.
- **Docker**: Utilizado para containerizar a aplicação, facilitando a configuração e o deploy em diferentes ambientes.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:
- **Cadastro de Usuários**: Implementação de rotas para criação e autenticação de usuários, com validação de dados e criptografia de senhas.
- **Criação e Gerenciamento de Tópicos**: Permite que usuários criem, editem e excluam tópicos no fórum.
- **Respostas a Tópicos**: Implementação de funcionalidade para adicionar, editar e excluir respostas em tópicos existentes.
- **Autenticação JWT**: Uso de JSON Web Token (JWT) para autenticar e autorizar usuários nas rotas protegidas da aplicação.
- **Integração com Banco de Dados**: Uso de Prisma para interagir com o banco de dados, garantindo operações de CRUD eficientes e seguras.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Node/forum-nestjs
   cd forum-nestjs
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o servidor:
   ```
   npm run start
   ```

4. Acesse a API em `http://localhost:3000` para começar a utilizar as funcionalidades do fórum.
