<h3 align="center">
  Express API para o teste da SoftDesign
</h3>

<p align="center">
  

  <a href="https://www.linkedin.com/in/thyus/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-matheus%20cardoso-%237D40E7">
  </a>
</p>

## 🚀 Tecnologias

Tecnologias e ferramentas utilizadas

- [Node.js](https://nodejs.org/en/)
- [Insomnia](https://insomnia.rest/)
- [Postbird](https://www.electronjs.org/apps/postbird)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [JWT-token](https://jwt.io/)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Começando

Importe o arquivo <a download="Insomnia" href=".github/Insomnia.json">Insomnia.json</a> para seu Insomnia. Este arquivo contém as rotas da aplicação

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop)

**Clone o projeto e accesse a pasta **

```bash
$ git clone https://github.com/thyusofficial/softdesign-backend.git && cd softdesign-backend
```

**Siga os passos a seguir**

```bash
# Instalar dependências
$ yarn

# Criar o banco de dados Postgres no docker
$ docker run --name database -e POSTGRESS_PASSWORD=docker -p 5432:5432 -d postgres

# Iniciar o banco de dados
$ docker start database 

# Através do Postbird, crie uma base de dados com nome "softdesign". Este é o nome que a aplicação utiliza para se conectar

# Realizar a migragion 
$ yarn sequelize db:migrate

# Realizar as seeds
$ yarn sequelize db:seed:all

# Muito bem, projeto está rodando!
```

---

Made by Matheus Cardoso 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/thyus/)
