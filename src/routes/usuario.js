const Router = require ('./router')

const passport = require('passport');

const Usuario = require('../model/Usuario');


class UsersRouter extends Router {
    constructor() {
        super();
    }
    init() {
        this.router.post('/register', async (req, res) => {
            try{
                const {first_name, last_name, email, age, password} = req.body;
                const newUser = new Usuario({
                    first_name,
                    last_name,
                    email,
                    age, 
                    password
            })
            await newUser.save();
            res.send('usuario registrado com sucesso')
        }catch (error) {
            res.status(500).send('Erro ao registrar usuario')
        }
        })

            this.router.post('/login', passport.authenticate('user', {session: false}), (req, res) => {
                res.send('Login efetuado com sucesso')
            })

            this.router.get('/home', (req, res) => {
                res.send('Home')
            })
        }
}
