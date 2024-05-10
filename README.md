# Aplicação de E-Commerce

Este é um projeto de aplicação de e-commerce desenvolvido com Node.js, Express.js, Handlebars, Passport.js e integração com banco de dados através do Mongoose.

## Estrutura de Pastas

```
src/
├── config/
├── middlewares/
├── model/
├── public/
├── routes/
└── views/
app.js
```

- **config/**: Contém arquivos de configuração, como configurações de banco de dados e autenticação.
- **middlewares/**: Aqui você encontra middlewares customizados para sua aplicação, como autenticação de usuários.
- **model/**: Define os modelos de dados da sua aplicação, utilizando o Mongoose para interagir com o banco de dados.
- **public/**: Diretório para arquivos estáticos, como CSS, JavaScript e imagens.
- **routes/**: Contém as rotas da sua aplicação, separadas por funcionalidades.
- **views/**: Armazena os arquivos de visualização da aplicação, utilizando o Handlebars para renderização dinâmica.

## Configuração e Execução

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o MongoDB instalados em seu ambiente de desenvolvimento.
3. Instale as dependências do projeto utilizando o comando `npm install`.
4. Configure as variáveis de ambiente necessárias para sua aplicação (por exemplo, credenciais do banco de dados).
5. Inicie o servidor executando o comando `npm start` ou `node app.js`.
6. Acesse a aplicação em seu navegador através do endereço `http://localhost:8080`.

## Recursos e Funcionalidades

- **Autenticação de Usuários:** Utiliza o Passport.js para autenticação de usuários.
- **Interação com Banco de Dados:** Utiliza o Mongoose para operações de CRUD no banco de dados.
- **Interface de Usuário Dinâmica:** Utiliza o Handlebars para renderização dinâmica das páginas.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Crie uma issue para discutir suas ideias ou envie um pull request diretamente.