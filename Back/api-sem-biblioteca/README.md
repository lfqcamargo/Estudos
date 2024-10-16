
# API sem Biblioteca

Este projeto "API sem Biblioteca" foi desenvolvido como parte do repositório de estudos para explorar a criação de uma API HTTP utilizando apenas as funcionalidades básicas do Node.js, sem depender de frameworks ou bibliotecas externas. É uma excelente maneira de entender como o Node.js gerencia requisições HTTP, realiza roteamento interno e lida com streams de dados.

## Tecnologias Utilizadas

- **Node.js**: Empregado para todas as funcionalidades do servidor, permitindo controle detalhado sobre o fluxo de dados e respostas HTTP.
- **JavaScript**: Utilizado para implementar a lógica de programação e manipulação de dados, incluindo gerenciamento avançado de streams e buffers.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:
- **Manipulação de Requisições HTTP**: Implementação básica das operações GET, POST, PUT, DELETE.
- **Roteamento de Requisições**: Direcionamento eficaz de requisições para os respectivos handlers.
- **Operações CRUD**: Gerenciamento de dados com operações CRUD realizadas diretamente em objetos em memória.
- **Gerenciamento de Streams**: Demonstração de como manipular grandes volumes de dados de maneira assíncrona usando streams.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Node/api-sem-biblioteca
   cd api-sem-biblioteca
   ```

2. Execute o servidor:
   ```
   node src/server.js
   ```