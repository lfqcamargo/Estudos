# API Flask com MongoDB

Este projeto é uma API simples desenvolvida com **Flask** e **MongoDB**, ideal para estudos e experimentação com bancos de dados NoSQL em aplicações Python.

## Tecnologias Utilizadas

- **Flask**: Framework web minimalista para Python.
- **Flask-PyMongo**: Extensão para integração entre Flask e MongoDB.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Pylint**: Ferramenta de análise estática para manter a qualidade do código.

## Instalação e Configuração

### Pré-requisitos

Antes de iniciar, certifique-se de ter o **Python 3.8+** instalado em seu sistema.

### Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lfqcamargo/Estudos.git
   cd Estudos/Back/flask-mongodb
   ```

2. **Crie e ative um ambiente virtual (opcional, mas recomendado):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

3. **Instale as dependências do projeto:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure as variáveis de ambiente (`.env`):**
   ```env
   MONGO_URI=mongodb://localhost:27017/seu_banco
   FLASK_ENV=development
   ```

5. **Inicie o servidor Flask:**
   ```bash
   python run.py
   ```

6. **Acesse a API em:**
   ```
   http://localhost:5000
   ```

## Endpoints Básicos

- **/api/items**:
  - `GET`: Retorna todos os itens do banco de dados.
  - `POST`: Adiciona um novo item ao banco.

- **/api/items/<id>**:
  - `GET`: Retorna um item específico pelo ID.
  - `PUT`: Atualiza um item existente.
  - `DELETE`: Remove um item do banco.

## Estrutura de Pastas

```
flask-mongodb/
├── .vscode/
├── src/
│   ├── routes.py
│   ├── models.py
│   ├── config.py
│   ├── database.py
├── .gitignore
├── .pylintrc
├── requirements.txt
├── run.py
└── README.md
