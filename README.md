# Repositório de Estudos

Bem-vindo ao meu repositório de estudos, um espaço onde exploro e aprofundo meu conhecimento em uma variedade de tecnologias de desenvolvimento web e programação. Este repositório é um compêndio de projetos, experimentos e aprendizados que refletem minha jornada contínua como desenvolvedor.

### Tecnologias Exploradas

Este repositório abrange uma ampla gama de tecnologias, cada uma escolhida para fortalecer minha compreensão e habilidades práticas em diferentes aspectos do desenvolvimento de software. Algumas das tecnologias que você encontrará aqui incluem:

- **JavaScript**: A espinha dorsal do desenvolvimento web moderno, usado para criar interações dinâmicas em aplicações.
- **React**: Uma biblioteca poderosa para construir interfaces de usuário, conhecida por sua eficiência e modularidade.
- **TypeScript**: Um superconjunto de JavaScript que oferece tipagem estática, facilitando a manutenção e escalabilidade de aplicações complexas.
- E muitas outras tecnologias como **HTML**, **CSS**, **Node.js**, entre outros, que são fundamentais para o desenvolvimento web moderno.

## Ignite Timer

[Ignite Timer](https://github.com/lfqcamargo/Estudos/tree/main/React/ignite-timer) é um projeto desenvolvido para explorar as capacidades do React juntamente com TypeScript, criando uma aplicação focada em gerenciamento de tempo. Este projeto serve como um excelente exemplo de como utilizar tecnologias modernas de front-end para criar interfaces de usuário interativas e eficientes.

### Principais Tecnologias Utilizadas

- **React**: Utilizado para construir a interface do usuário com componentes reutilizáveis e gerenciamento de estado eficiente.
- **TypeScript**: Empregado para adicionar tipagem estática ao projeto, o que ajuda na manutenção e escalabilidade da aplicação.
- **Vite**: Escolhido como ferramenta de build que oferece uma configuração simplificada e um desempenho superior durante o desenvolvimento.

### Funcionalidades do Projeto

O projeto incorpora várias funcionalidades chave como:
- Controle de tempo com um cronômetro.
- Capacidade de adicionar, remover e editar tarefas.
- Visualização dinâmica do progresso das tarefas.

### Objetivo do Projeto

O Ignite Timer é mais do que apenas um projeto prático; ele é uma demonstração de como ferramentas modernas podem ser integradas para construir soluções eficazes e elegantes em desenvolvimento web. É ideal para quem quer entender como aplicar conceitos avançados de React e TypeScript em um cenário real.


Explore o projeto [Ignite Timer](https://github.com/lfqcamargo/Estudos/tree/main/React/ignite-timer) para mais detalhes sobre a implementação e contribuições.

---

## API sem Biblioteca

[API sem Biblioteca](https://github.com/lfqcamargo/Estudos/tree/main/Node/api-sem-biblioteca) é um projeto desenvolvido para explorar as funcionalidades básicas do Node.js na criação de uma API HTTP sem usar frameworks ou bibliotecas externas. Este projeto serve como um excelente exemplo de como entender profundamente o tratamento de requisições HTTP, o roteamento interno e o sistema de streaming do JavaScript.

### Principais Tecnologias Utilizadas

- **Node.js**: Utilizado para implementar funcionalidades de servidor sem dependências externas, permitindo um controle detalhado sobre o fluxo de dados e as respostas HTTP.
- **JavaScript**: Empregado para toda a lógica de programação e manipulação de dados, incluindo o gerenciamento de streams e buffers para tratamento eficiente de dados.

### Funcionalidades do Projeto

O projeto incorpora várias funcionalidades chave como:
- Manipulação de requisições HTTP básicas (GET, POST, PUT, DELETE).
- Roteamento simples de requisições para os handlers apropriados.
- Implementações básicas de operações CRUD com um banco de dados em arquivo JSON.
- Gerenciamento de streams de dados, explorando como o Node.js lida com grandes volumes de dados de maneira eficiente e assíncrona.

### Objetivo do Projeto

A "API sem Biblioteca" é mais do que apenas um projeto prático; ela é uma demonstração de como os fundamentos do Node.js podem ser usados para construir uma API eficiente e elegante com o mínimo de abstração. Este projeto também é ideal para quem deseja entender o funcionamento interno de APIs, aprimorar suas habilidades em JavaScript e Node.js em um contexto prático, e explorar o sistema de streaming do JavaScript para o tratamento eficaz de dados assíncronos e em buffer.


Explore o projeto [API sem Biblioteca](https://github.com/lfqcamargo/Estudos/tree/main/Node/api-sem-biblioteca) para mais detalhes sobre a implementação e contribuições.

---

## API Academia

[API Academia](https://github.com/lfqcamargo/Estudos/tree/main/Node/api-academia) é um projeto que simula um aplicativo de estilo GymPass, desenvolvido em Node.js. Este projeto foi criado para demonstrar a implementação de uma API RESTful focada no gerenciamento de academias, permitindo funcionalidades como check-ins, cadastro de academias e gestão de usuários.

### Principais Tecnologias Utilizadas

- **Node.js**: Plataforma principal utilizada para o desenvolvimento da API, proporcionando um ambiente eficiente e escalável para o backend.
- **Prisma**: Utilizado para a comunicação com o banco de dados, facilitando a manipulação e consulta dos dados persistidos.
- **PostgreSQL**: Banco de dados relacional escolhido para armazenar os dados da aplicação, garantindo a persistência e integridade dos dados.
- **TypeScript**: Usado para adicionar tipagem estática ao código JavaScript, melhorando a manutenção e a escalabilidade do projeto.
- **Docker**: Utilizado para containerizar a aplicação, facilitando a configuração e o deploy em diferentes ambientes.

### Funcionalidades do Projeto

A "API Academia" incorpora diversas funcionalidades, tais como:
- **Cadastro de Usuários**: Possibilidade de cadastrar novos usuários na plataforma.
- **Autenticação de Usuários**: Implementação de autenticação via JWT (JSON Web Token), garantindo que apenas usuários autenticados possam acessar certas rotas.
- **Perfil do Usuário**: Recuperação de informações do perfil do usuário logado.
- **Histórico de Check-ins**: Possibilidade de consultar o histórico de check-ins do usuário.
- **Busca de Academias**: Função para buscar academias próximas (até 10km) ou pelo nome.
- **Check-in em Academias**: Permite que o usuário faça check-in em uma academia, com validações específicas.
- **Cadastro de Academias**: Possibilidade de cadastro de novas academias, restrita a administradores.

### Regras de Negócio

O projeto também implementa algumas regras de negócio importantes, como:
- Não permitir o cadastro de e-mails duplicados.
- Restringir múltiplos check-ins no mesmo dia para o mesmo usuário.
- Garantir que o check-in só pode ser feito se o usuário estiver dentro de um raio de 100 metros da academia.
- Validação de check-ins restrita a administradores e dentro de um período de 20 minutos após o check-in ser realizado.

### Requisitos Não-Funcionais

- **Segurança**: As senhas dos usuários são criptografadas antes de serem armazenadas.
- **Persistência de Dados**: Todos os dados da aplicação são armazenados em um banco de dados PostgreSQL.
- **Paginação**: Listagens de dados são paginadas, com um limite de 20 itens por página.
- **Autenticação**: Utilização de JWT para identificação segura dos usuários.

### Objetivo do Projeto

O "API Academia" tem como objetivo oferecer uma base prática para o desenvolvimento de sistemas de gerenciamento de academias. Ele é ideal para desenvolvedores que desejam aprofundar seus conhecimentos em Node.js, TypeScript, e API RESTful, ao mesmo tempo em que criam uma solução prática e escalável. Este projeto demonstra boas práticas de desenvolvimento, incluindo a implementação de regras de negócio, segurança de dados e eficiência na comunicação com o banco de dados.

Explore o projeto [API Academia](https://github.com/lfqcamargo/Estudos/tree/main/Node/api-academia) para mais detalhes sobre a implementação e contribuições.

---

## Forum com DDD

[Forum com DDD](https://github.com/lfqcamargo/Estudos/tree/main/Node/forum-com-DDD) é um projeto desenvolvido com foco no Design Dirigido por Domínio (DDD - Domain-Driven Design). Este projeto tem como objetivo aplicar os conceitos de DDD na construção de um sistema de fórum, onde são utilizadas práticas avançadas de design de software para garantir que a solução seja escalável, modular e de fácil manutenção.

### Principais Tecnologias Utilizadas

- **Node.js**: Utilizado como a plataforma principal para o desenvolvimento do backend, fornecendo um ambiente de execução eficiente e escalável.
- **TypeScript**: Usado para adicionar tipagem estática ao código, melhorando a legibilidade e reduzindo a ocorrência de erros em tempo de compilação.
- **DDD (Domain-Driven Design)**: Metodologia central do projeto, que orienta o design e a implementação com base nas necessidades do domínio do negócio.
- **Arquitetura Hexagonal**: Aplicada para desacoplar as regras de negócio da infraestrutura, facilitando a testabilidade e a evolução do software.

### Funcionalidades do Projeto

O projeto "Forum com DDD" inclui várias funcionalidades, todas estruturadas com base nos princípios de DDD:
- **Modelagem de Domínio**: O domínio do fórum é modelado de forma a refletir as regras e operações específicas do negócio, utilizando entidades, agregados, objetos de valor e eventos de domínio.
- **Casos de Uso**: Implementação de casos de uso que representam as operações permitidas no sistema, como criação de tópicos, respostas e gerenciamento de usuários.
- **Eventos de Domínio**: Uso de eventos de domínio para capturar mudanças significativas no sistema e permitir a extensão do comportamento através de handlers de eventos.
- **Bounded Contexts**: Divisão do domínio em subdomínios bem definidos, cada um com suas próprias regras e lógica de negócio.
- **Linguagem Ubíqua**: Aplicação de uma linguagem comum entre desenvolvedores e especialistas do domínio, garantindo que todos compartilhem o mesmo entendimento sobre o sistema.

### Objetivo do Projeto

O "Forum com DDD" tem como objetivo demonstrar a aplicação prática dos conceitos de Domain-Driven Design em um contexto de desenvolvimento de software real. Este projeto é ideal para desenvolvedores que desejam aprofundar seus conhecimentos em DDD e arquitetura de software, oferecendo uma base sólida para a construção de sistemas complexos e robustos. O uso de DDD, aliado a uma arquitetura bem estruturada, permite criar soluções que são não apenas funcionais, mas também escaláveis e fáceis de manter ao longo do tempo.

Explore o projeto [Forum com DDD](https://github.com/lfqcamargo/Estudos/tree/main/Node/forum-com-DDD) para mais detalhes sobre a implementação e contribuições.

---

## Forum com NestJS

[Forum com NestJS](https://github.com/lfqcamargo/Estudos/tree/main/Node/forum-nestjs) é um projeto desenvolvido utilizando o framework NestJS, que é construído sobre o Node.js e oferece uma arquitetura modular e escalável para o desenvolvimento de aplicações server-side. Este projeto foi criado para demonstrar a construção de um sistema de fórum, aplicando as melhores práticas de desenvolvimento de software com NestJS.

### Principais Tecnologias Utilizadas

- **NestJS**: Framework Node.js progressivo, utilizado como base para a construção da API, oferecendo uma estrutura sólida e modular para o desenvolvimento de aplicativos escaláveis.
- **TypeScript**: Usado para adicionar tipagem estática ao código, aumentando a robustez e facilitando a manutenção do projeto.
- **Prisma**: Utilizado como ORM para interagir com o banco de dados, simplificando a modelagem e consultas de dados.
- **Docker**: Ferramenta utilizada para containerizar a aplicação, facilitando o deploy e a replicação do ambiente de desenvolvimento em diferentes plataformas.

### Funcionalidades do Projeto

O "Forum com NestJS" inclui várias funcionalidades essenciais para um sistema de fórum, tais como:
- **Cadastro de Usuários**: Implementação de rotas para criação e autenticação de usuários, com validação e criptografia de senhas.
- **Criação e Gerenciamento de Tópicos**: Permite que usuários criem, editem e excluam tópicos no fórum.
- **Respostas a Tópicos**: Implementação de funcionalidade para adicionar, editar e excluir respostas em tópicos existentes.
- **Sistema de Autenticação**: Uso de JWT (JSON Web Token) para autenticar e autorizar usuários nas rotas protegidas da aplicação.
- **Integração com Banco de Dados**: Uso de Prisma para interagir com o banco de dados, garantindo operações de CRUD eficientes e seguras.
- **Testes Automatizados**: Configuração de testes automatizados para garantir a estabilidade e a integridade das funcionalidades implementadas.

### Objetivo do Projeto

O "Forum com NestJS" tem como objetivo demonstrar as capacidades e a flexibilidade do NestJS na construção de aplicações server-side modernas e escaláveis. Este projeto é ideal para desenvolvedores que desejam aprender ou aperfeiçoar suas habilidades com NestJS e TypeScript, oferecendo uma base sólida para a criação de sistemas complexos com uma arquitetura bem definida e modular.

Explore o projeto [Forum com NestJS](https://github.com/lfqcamargo/Estudos/tree/main/Node/forum-nestjs) para mais detalhes sobre a implementação e contribuições.

---