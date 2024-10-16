# Forum com DDD

Este projeto "Forum com DDD" foi desenvolvido como parte do repositório de estudos para explorar a aplicação dos conceitos de Domain-Driven Design (DDD) na construção de um sistema de fórum. O objetivo deste projeto é demonstrar como o DDD pode ser utilizado para criar uma arquitetura de software robusta, modular e alinhada às necessidades do domínio do negócio.

## Tecnologias Utilizadas

- **Node.js**: Utilizado como a plataforma principal para o desenvolvimento do backend, fornecendo um ambiente de execução eficiente e escalável.
- **TypeScript**: Usado para adicionar tipagem estática ao código JavaScript, melhorando a manutenção e a escalabilidade do projeto.
- **DDD (Domain-Driven Design)**: Metodologia central do projeto, orientando o design e a implementação com base nas necessidades específicas do domínio.
- **Arquitetura Hexagonal**: Aplicada para desacoplar as regras de negócio da infraestrutura, facilitando a testabilidade e a evolução do software.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:
- **Modelagem de Domínio**: Implementação de entidades, agregados, objetos de valor e eventos de domínio de acordo com os princípios de DDD.
- **Casos de Uso**: Definição e implementação de casos de uso que representam operações permitidas no sistema, como criação de tópicos, respostas e gerenciamento de usuários.
- **Eventos de Domínio**: Captura de eventos significativos dentro do sistema para acionar comportamentos adicionais ou integrações.
- **Subdomínios e Contextos Delimitados**: Separação do domínio em subdomínios bem definidos, cada um com suas próprias regras e lógica de negócio.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Node/forum-com-DDD
   cd forum-com-DDD
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o servidor:
   ```
   npm run start
   ```

4. Acesse a aplicação em `http://localhost:3000` para começar a explorar as funcionalidades do fórum.
