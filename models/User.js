const mongoose = require('mongoose');
const encription = require('../utilities/encription');

const UserSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.String, required: true, unique: true },
    firstName: { type: mongoose.SchemaTypes.String, required: true },
    lastName: { type: mongoose.SchemaTypes.String, required: true },
    age: { type: mongoose.SchemaTypes.Number, required: true, min: 18, max: 70 },
    phoneNumber: { type: mongoose.SchemaTypes.Number, min: 10, max: 10 },
    about: { type: mongoose.SchemaTypes.String},
    image: { type: mongoose.SchemaTypes.String, default: '' },
    password: { type: mongoose.SchemaTypes.String, required: true },
    salt: {type: mongoose.SchemaTypes.String, required: true },
    createdProducts: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }],
    date: { type: mongoose.SchemaTypes.Date, default: Date.now },
    town: { type: mongoose.SchemaTypes.String }
});

UserSchema.method = ({
    authenticate: function (password) {
        let hashedPassword = encription.generateHashedPassword(this.salt, password);

        if (hashedPassword === this.password) {
            return true;
        }

        return false;
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.AdminUser = () => {
    User.find({ email: 'noEmail'}).then(users => {
        if (users.length === 0) {
            let salt = encription.generateSalt();
            let hashedPass = encription.generateHashedPassword(salt, 'Admin2394');
    
            User.create({
                email: 'noEmail',
                firstName: 'RD',
                lastName: 'GG',
                age: 30,
                phoneNumber: '08888923213',
                about: 'Admin',
                image: '',
                password: hashedPass,
                salt: salt,
                town: 'New York'
            });
        }
    });
};