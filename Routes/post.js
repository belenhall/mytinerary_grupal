const express = require("express");
const router = express.Router();
const city = require("../city");
const itinerary = require("../itineraries");
const activity = require("../activities.js");
const user = require("../user.js");
const bcrypt = require("bcrypt");
const db = require("../database");
const jwt = require("jsonwebtoken");
const config = require("../config");
const secretOrKey = config.secretOrKey;
const passport = require("passport");

module.exports = 
router.post("/api/itineraries", (req, res) => {
    const newItinerary = new Itinerary(req.body);
    newItinerary.save(err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(newItinerary);
    });
  });

const userRegisterUri = "/api/users/register";
const userLoginUri = "/api/users/login";
const userUri = "/api/users";

const postUser = uri =>
  router.post(uri, (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hash,
        googleAccount: false,
        profilePicture: req.body.profilePicture
      });
      newUser.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newUser);
      });
    });
  });
postUser(userRegisterUri);



  const createJWTToken = (user, secret, duration) => {
    var token = jwt.sign(user.toJSON(), secret, {
      expiresIn: duration // 1 week
    });
    return token;
  };
  
  const LogUser = uri =>
    router.post(uri, (req, res) => {
      user.findOne(
        { $or: [{ username: req.body.username }, { email: req.body.username }] },
        (err, user) => {
          if (err) throw err;
  
          if (!user) {
            res.send({
              success: false,
              msg: "Authentication failed. User not found."
            });
          } else {
            bcrypt.compare(req.body.password, user.password, function(
              err,
              match
            ) {
              if (match) {
                res.json({
                  success: true,
                  token: "JWT " + createJWTToken(user, secretOrKey, 604800)
                });
              } else {
                res.json({
                  success: false,
                  msg: "Authentication failed. Wrong password."
                });
              }
            });
          }
        }
      );
    });
  LogUser(userLoginUri);

  router.post("/logged", (req, res) => {
    user.findOne({ email: req.body.email }, (err, user) => {
      if (err) throw err;
  
      if (!user) {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          googleAccount: true
        });
        newUser.save();
        res
          .send({
            msg: "New user saved",
            data: newUser,
            token: "JWT " + createJWTToken(newUser, secretOrKey, 604800)
          })
          .end();
      } else {
        res.send({
          success: true,
          msg: "Authentication succesful. User found.",
          token: "JWT " + createJWTToken(user, secretOrKey, 604800)
        });
      }
    });
  });
  