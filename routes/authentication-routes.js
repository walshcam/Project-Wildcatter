const Authentication = require("./../controllers/authentication");

//Post route for sending and receiving authentication
module.exports = function(app) {
    //Sign up new users
    app.post('/signup', Authentication.signup);
}