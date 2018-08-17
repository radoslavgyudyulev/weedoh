const controllers = require('../controllers');
const auth = require('./auth');

module.exports = (app) => {
    app.post('/api/register', controllers.user.registerPost);
};