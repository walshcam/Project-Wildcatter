const Authentication = require("./controllers/authentication");

//Post route for sending and receiving authentication
module.exports = function(app) {
    app.post('/signup', Authentication.signup);
}