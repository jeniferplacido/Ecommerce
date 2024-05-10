const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

adminSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
    return next();
}
const hashedPassword = await bcrypt.hash(this.password, 10);
this.password = hashedPassword;
next();

})

adminSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;