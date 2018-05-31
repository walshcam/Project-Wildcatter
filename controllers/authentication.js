const db = require('../models')

exports.signup = function(req, res, err) {
    //********** INITIAL INPUT **********
    //Obtain email and password from post request
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    //********** INPUT VALIDATION **********
    //Must provide an email and password
    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide an email and password'});
    }

    // See if a user with a given email exists
    db.User.findOne({ email: email }, function(err, existingUser) {
        //If a user with an email does exist, return an error
        if(err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' })
        }

        //If a user with email does NOT exist, create and save user record
        db.User.create({
            email: email,
            password: password
        })
        .then(function(){
            //If there is a new user, this returns a token
            res.json({ success: true });
        })
        .catch(function(err){
            res.json(err);
        });
    });
}