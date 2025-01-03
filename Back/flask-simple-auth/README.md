# Flask Simple Auth

O projeto **Flask Simple Auth** foi desenvolvido para explorar a implementação de autenticação básica de usuários em uma aplicação Flask. Este repositório oferece um exemplo prático de como construir sistemas seguros de autenticação e gerenciamento de sessões com integração de banco de dados.

## Tecnologias Utilizadas

- **Flask**: Framework web utilizado para desenvolver a aplicação.
- **Flask-Login**: Extensão usada para gerenciar autenticação e sessões de usuários.
- **SQLite**: Banco de dados leve para armazenar informações de usuários.
- **Docker**: Utilizado para containerizar a aplicação, simplificando a configuração do ambiente.
- **Bcrypt**: Biblioteca para criptografia segura de senhas.

## Funcionalidades

- **Cadastro de Usuários**: Permite que novos usuários se registrem no sistema.
- **Login e Logout**: Sistema básico de autenticação utilizando `Flask-Login`.
- **Proteção de Rotas**: Acesso restrito a rotas protegidas apenas para usuários autenticados.
- **Criptografia de Senhas**: Implementação de hash para senhas usando Bcrypt, garantindo segurança.

## Estrutura do Projeto

- **app.py**: Arquivo principal que contém as configurações do Flask e a definição de rotas.
- **models/**: Contém os modelos de dados utilizados no projeto.
- **database.py**: Configuração e inicialização do banco de dados.
- **requirements.txt**: Lista de dependências necessárias para o funcionamento da aplicação.
- **docker-compose.yml**: Configuração para executar o projeto em um ambiente Docker.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Back/flask-simple-auth
   cd flask-simple-auth
   ```

2. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

3. Configure o banco de dados:
   ```
   python database.py
   ```

4. Execute a aplicação:
   ```
   python app.py
   ```

5. (Opcional) Execute com Docker:
   ```
   docker-compose up
   ```

6. Acesse a aplicação em `http://localhost:5000`.

## Objetivo

O projeto **Flask Simple Auth** tem como objetivo fornecer uma introdução prática ao desenvolvimento de sistemas de autenticação em Flask, abordando boas práticas de segurança e gerenciamento de usuários.

---

Explore o repositório para mais detalhes e contribua com melhorias ou sugestões!