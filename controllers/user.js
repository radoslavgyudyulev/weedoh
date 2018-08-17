const User = require('../models/User');
const encryption = require('../utilities/encription');

module.exports.registerPost = (req, res) => {
    let user = req.body.body.registrationData;

    if (user.password && user.password !== user.confirmedPassword) {
        res.send("Password don't match.");
        return;
    }

    let salt = encryption.generateSalt();
    user.salt = salt;

    if (user.password) {
        let hashedPassword = encryption.generateHashedPassword(salt, user.password);
        user.password = hashedPassword;
    }

    User.create(user).then(user => {
        req.logIn(user, (error, user) => {
            if (error) {
                res.send('Authentication not working!');
                return;
            }

            res.send('success');
        });
    }).catch(error => {
        return console.log(error);
    });
};