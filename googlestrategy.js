const passport = require('passport')
const mongoose = require("mongoose");
const config = require('./config');
const  GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./user')

passport.use(new GoogleStrategy({
    clientID: config.googleid,
    clientSecret: config.googlesecret,
    callbackURL: "http://localhost:5000/redirect"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));