module.exports = function(app) {
    //GET request to main page
    //req - the request data
    //res - the response data
    //err - error handling
    app.get('/', function(req, res, err) {
        res.send(['Hello','World','Today']);
    });
}