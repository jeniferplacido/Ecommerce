const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const produtoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
})

produtoSchema.plugin(mongoosePaginate);

const Produto = mongoose.model('Product', produtosSchema);

module.exports = Produto;