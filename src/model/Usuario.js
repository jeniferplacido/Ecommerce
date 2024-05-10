const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;


const usuarioSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number},
    password: { type: String, required: true },
    cart:{type: Schema.Types.ObjectId, ref: 'Cart'},
    role:{type: String, default: 'user'}

})

usuarioSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
    return next();
}
const hashedPassword = await bcrypt.hash(this.password, 10);
this.password = hashedPassword;
next();
})

usuarioSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

usuarioSchema.plugin(mongoosePaginate);

const Usuario = mongoose.model('User', usuarioSchema);

module.exports = Usuario;

