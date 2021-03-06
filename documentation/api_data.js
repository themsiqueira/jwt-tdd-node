define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"email\": \"joao@gmail.com\",\n  \"password\": \"senhaProvisoria\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n            \"id\": 1,\n            \"name\": \"Joao\",\n            \"email\": \"Joao@gmail.com\",\n          },\n  \"token\": \"awdiojawdoiisjvelisecaldwjljiafkamiolclc\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes.js",
    "groupTitle": "User",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/newUser",
    "title": "Novo usuário",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n   \"name\": \"Joao\",\n   \"email\": \"Joao@gmail.com\",\n   \"password\": \"senhaProvisoria\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": \"Joao\",\n  \"email\": \"Joao@gmail.com\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes.js",
    "groupTitle": "User",
    "name": "PostNewuser"
  },
  {
    "type": "put",
    "url": "/updateUser",
    "title": "Atualização de usuário",
    "group": "User",
    "permission": [
      {
        "name": "authenticated user and must send \"Bearer token\""
      }
    ],
    "description": "<p>Os Parametros de password são opcionais, envie somente caso queira alterar a senha</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"name\": \"Joao Souza\",\n  \"email\": \"JoaoSouza@gmail.com\",\n  \"oldPassword\": \"senhaProvisoria\",\n  \"password\": \"novaSenhaProvisoria\",\n  \"confirmPassword\": \"novaSenhaProvisoria\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": \"Joao\",\n  \"email\": \"JoaoNovoEmail@gmail.com\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes.js",
    "groupTitle": "User",
    "name": "PutUpdateuser"
  }
] });
