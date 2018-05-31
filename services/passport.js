const passport = require('passport');
const User = require('../models/User');
const config = require('../config/config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Passport is used to verify that the user is logged in

//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWT strategy
//      payload => decoded JWT Token
//      done    => callback after successfully authenticating user
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with the other
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err, user){
        //if no user was authenticated
        if (err) { return done(err, false); }

        //If they were authenticated, return error as null and return the user
        if (user) {
            done(null, user);
        //If the authentication was correct, but no user was found...
        } else {
            done(null, false);
        }
    });
});

//Tell passport to use this strategy
passport.use(jwtLogin);