# Flask MVC - Estruturando Aplicações

Este projeto **Flask MVC** foi desenvolvido como parte do repositório de estudos para explorar a organização de aplicações utilizando o framework Flask com o padrão arquitetural **Model-View-Controller (MVC)**. O objetivo deste projeto é demonstrar como estruturar um sistema Flask de forma modular, garantindo separação de responsabilidades e boas práticas de desenvolvimento.

## Tecnologias Utilizadas

- **Flask**: Framework web utilizado como base para a construção da aplicação, oferecendo ferramentas simples e poderosas.
- **SQLite**: Banco de dados utilizado para armazenar informações da aplicação.
- **Arquitetura MVC**: Organização do código em **Model, View e Controller** para facilitar a manutenção e escalabilidade.
- **PyLint**: Ferramenta utilizada para análise de qualidade do código.

## Funcionalidades

Este projeto inclui as seguintes funcionalidades principais:

- **Gerenciamento de Pessoas**: Controlador `person_finder_controller.py` responsável por gerenciar buscas de usuários.
- **Testes Automatizados**: Arquivo `person_finder_controller_test.py` contendo testes unitários para validar a aplicação.
- **Análise de Código com PyLint**: Arquivo `ex_pylint.py` configurado para validar a qualidade do código.
- **Banco de Dados SQLite**: Armazenamento de informações de usuários de forma segura.

## Como Usar

Para começar a usar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/lfqcamargo/Estudos/tree/main/Back/flask-mvc
   cd flask-mvc
   ```

2. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

3. Execute a aplicação:
   ```
   python run.py
   ```

4. Acesse a aplicação em `http://localhost:5000` e explore as funcionalidades.

---
