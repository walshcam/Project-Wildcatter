module.exports = function(app) {
    //GET request to main page
    //req - the request data
    //res - the response data
    //next - error handling
    app.get('/', function(req, res, next) {
        res.send(['Hello','World','Today']);
    });
}