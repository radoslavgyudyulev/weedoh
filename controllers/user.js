const User = require('../models/User');
const encryption = require('../utilities/encryption');

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

module.exports.loginPost = (req, res) => {
    let userToLogin = req.body.body.body;

    User.findOne({ email: userToLogin.email }).then(user => {
        if (!user || !user.authenticate(userToLogin.password)) {
            res.send('Invalid Credentials!');
        } else {
            req.logIn(user, (error) => {
                if (error) {
                    return res.render('Authentication not working!');
                }

                res.send('success', user);
            });
        }
    }).catch(err => {
        return console.log(err);
    });
};