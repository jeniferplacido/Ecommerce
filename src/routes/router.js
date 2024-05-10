const express = require('express');

class Router {
    constructor(){
        this.router = express.Router();
        this.init();
    }

    getRouter(){
        return this.router;
    }
    init(){
        this.router.get('/', (req, res) => {
            res.send('Hello World');
        })
    }


}

module.exports = new Router()