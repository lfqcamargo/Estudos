
# Ignite Call Fullstack

O projeto "Ignite Call Fullstack" foi desenvolvido como parte do repositório de estudos para explorar a criação de uma aplicação de agendamento de chamadas, utilizando Next.js, Prisma e TypeScript. O objetivo deste projeto é oferecer uma interface intuitiva e funcional para o agendamento de reuniões e chamadas, com integração à autenticação do Google.

## Tecnologias Utilizadas

- **Next.js**: Framework React com suporte a renderização do lado do servidor (SSR) e geração de sites estáticos.
- **Prisma**: ORM utilizado para interagir com o banco de dados de maneira eficiente e segura.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática, proporcionando maior segurança e manutenção do código.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Google OAuth**: Sistema de autenticação de usuários utilizando OAuth 2.0 via Google.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:
- **Agendamento de Chamadas**: Permite aos usuários agendar reuniões e chamadas, especificando detalhes como data, hora e duração.
- **Autenticação com Google**: Integração com OAuth 2.0 para autenticação de usuários via contas do Google.
- **Gerenciamento de Usuários**: Sistema para autenticar e gerenciar diferentes usuários na plataforma.
- **Notificações Automáticas**: Sistema de notificações que avisa os usuários sobre suas reuniões e chamadas agendadas.
- **Interface Responsiva**: Layout adaptável para diferentes tamanhos de tela, garantindo uma boa experiência de uso em dispositivos móveis e desktops.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Front/ignite-call%20fullstack
   cd ignite-call-fullstack
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure o ambiente (adicione suas credenciais de OAuth no arquivo `.env`):
   ```
   GOOGLE_CLIENT_ID=<sua_google_client_id>
   GOOGLE_CLIENT_SECRET=<seu_google_client_secret>
   ```

4. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```

5. Acesse a aplicação em `http://localhost:3000` para começar a agendar suas reuniões com o Ignite Call Fullstack.
