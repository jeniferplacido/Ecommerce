const express = require('express');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const passport = require('passport');
const connection = require('./config/database');



const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', './views');
app.set('views', __dirname + '/views');
app.use('public', express.static(__dirname + '/public'));

app.use(passport.initialize());
connection();

app.listen(8080, () => console.log('Servidor Rodando na porta 8080'));
