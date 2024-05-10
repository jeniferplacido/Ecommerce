const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://jeni:ecom@ecom.rfyehda.mongodb.net/', {
        });
        console.log(`MongoDb conectado com sucesso: ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Deu Ruim na conexão com o mongo: ${error.message}`);
    process.exit(1);
    }
}

module.exports = connection;