# API Academia

Este projeto "API Academia" foi desenvolvido como parte do repositório de estudos para explorar a construção de uma API RESTful voltada para a gestão de academias, utilizando Node.js. O objetivo deste projeto é oferecer uma base sólida para o desenvolvimento de sistemas que incluem funcionalidades como cadastro de usuários, check-ins em academias e gerenciamento de planos e treinos.

## Tecnologias Utilizadas

- **Node.js**: Plataforma principal para o desenvolvimento do backend, proporcionando um ambiente de execução eficiente e escalável.
- **TypeScript**: Usado para adicionar tipagem estática ao código JavaScript, melhorando a manutenção e a escalabilidade do projeto.
- **Prisma**: Utilizado como ORM para interagir com o banco de dados, facilitando a modelagem e consulta dos dados.
- **PostgreSQL**: Banco de dados relacional escolhido para armazenar os dados da aplicação, garantindo a persistência e integridade dos dados.
- **Docker**: Utilizado para containerizar a aplicação, facilitando a configuração e o deploy em diferentes ambientes.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:
- **Cadastro de Usuários**: Permite o registro de novos usuários na plataforma, com validação de e-mail e criptografia de senhas.
- **Autenticação de Usuários**: Implementação de autenticação via JWT (JSON Web Token), garantindo segurança no acesso às funcionalidades protegidas.
- **Check-in em Academias**: Usuários podem realizar check-ins em academias, com validação de proximidade e tempo.
- **Gerenciamento de Academias**: Cadastro e gestão de academias, restrito a administradores.
- **Histórico de Check-ins**: Registro e consulta do histórico de check-ins realizados pelo usuário.
- **Busca de Academias**: Pesquisa de academias próximas ou pelo nome, facilitando o acesso do usuário às informações relevantes.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Node/api-academia
   cd api-academia
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o servidor:
   ```
   npm run start
   ```

4. Acesse a API em `http://localhost:3000` para começar a utilizar as funcionalidades.
