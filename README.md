# Jwt-tdd-node

Api utilizando jwt com node e tdd, realizando os testes com Jest e supertest.

# Como configurar o projeto:

### 1. Instale o NodeJS

- _NodeJS:_ https://nodejs.org/en/

### 2. Instale o yarn ou npm

- _yarn:_ https://yarnpkg.com/lang/en/

- _npm:_ https://www.npmjs.com/get-npm

### 3. Instale docker CE ou toolbox  para rodar o banco de dados:

  - _Docker CE:_ https://hub.docker.com/editions/community/docker-ce-desktop-windows

  - _Docker Toolbox:_ https://docs.docker.com/toolbox/toolbox_install_windows/

  > Obs: Os links acima são para instalação no Windows, mas no plataforma você encontrará a documentação para outros SO's.

# Rodando o projeto:

 >Recomendação: Para debugar utilizar visual studio code.

Inicialize o server e o banco de dados:

  `docker-compose up -d`

  Obs: Este comando inicializa o container do database em backgroud,
  caso queira parar o container utilize o comando abaixo.

  `docker-compose stop`

Instale as dependências do projeto:

  `yarn install`

  ou

  `npm install`

Antes de iniciar o projeto rode as migrations para modelar o banco:

  > Obs: Ip padrão do docker configurado no .env, caso em sua maquina seja outro será necessário alterar no .env.

  `yarn migrate`

  Obs: Caso queira desfazer a modelagem utilize o comando abaixo.

  `yarn undo-migrate`

## Comandos disponíveis

Abaixo temos alguns comandos úteis para debug, execução e executar testes.

- Executar o projeto localmente:

  `yarn dev` ou `npm run dev`

- Executar o projeto no vscode em modo debug:

  `yarn debug` ou `npm run debug`

- Executar os testes com o jest:

  `yarn test` ou `npm run test`

  >Obs: Para rodar os testes vocês deve alterar o arquivo .env apontando o banco para test, caso nao encontre o banco, será necessário criar no postgres

# Rotas

- Url base:

  `http://localhost:3333/api`

> Obs: a porta pode ser configurada no arquivo server.js, ao mudar a porta também é necessário mudar o script de debug

#### Criação de usuário:

Tipo: POST

Endpoint:
`/newUser`

Body:

```
  {
    "name": "Joao",
    "email": "Joao@gmail.com",
    "password": "senhaProvisoria"
  }
```

Retorno:

```
  {
    "id": "1",
    "name": "Joao"
    "email": "Joao@gmail.com"
  }
```

#### Login de usuário (Auth):

Tipo: POST
Endpoint:
`/login`

Body:

```
  {
    "email": "Joao@gmail.com",
    "password": "senhaProvisoria"
  }
```

Retorno:

```
  {
   "user": {
     "id": "1",
     "name": "Joao"
     "email": "Joao@gmail.com"
   },
   "token": "token jwt gerado"
  }

```

#### Atualização de usuário:

Tipo: PUT
Segurança: Token Jwt que é retornado na autenticação
Endpoint:
`/updateUser`

  >Obs: os parametros name e email são obrigatorios

Body:

```
  {
    "name": "Joao Souza",
    "email": "JoaoSouza@gmail.com",
    "oldPassword": "senhaProvisoria",
    "password": "novaSenhaProvisoria",
    "confirmPassword": "novaSenhaProvisoria"
  }
```

Retorno:

```
{
  "id": "1",
  "name": "Joao Souza"
  "email": "JoaoSouza@gmail.com"
}

```