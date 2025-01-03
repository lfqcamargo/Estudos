# Flask Pagamentos com Socket

Este projeto "Flask Pagamentos com Socket" foi desenvolvido como parte do repositório de estudos para explorar a criação de um sistema de pagamentos utilizando o framework Flask com comunicação em tempo real via WebSockets. O objetivo deste projeto é demonstrar como o Flask, combinado com Flask-SocketIO e outras tecnologias, pode ser utilizado para construir aplicações interativas e dinâmicas.

## Tecnologias Utilizadas

- **Flask**: Framework web utilizado como base para a construção da aplicação, oferecendo ferramentas simples e poderosas.
- **Flask-SocketIO**: Extensão para habilitar comunicação em tempo real com WebSockets.
- **SQLite**: Banco de dados utilizado para armazenar informações de usuários e transações.
- **HTML, CSS e JavaScript**: Tecnologias front-end utilizadas para a criação da interface do usuário.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:
- **Gerenciamento de Pagamentos**: Permite a criação, edição e exclusão de pagamentos, com simulação de transações.
- **Notificações em Tempo Real**: Atualização automática do status das transações usando WebSockets.
- **Autenticação Simples**: Autenticação básica de usuários para acessar o sistema.
- **Integração com Banco de Dados**: Armazenamento de informações de pagamentos e usuários de forma segura.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Back/flask-pagamentos-socket
   cd flask-pagamentos-socket
   ```

2. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

3. Execute a aplicação:
   ```
   python app.py
   ```

4. Acesse a aplicação em `http://localhost:5000` e explore as funcionalidades.

---