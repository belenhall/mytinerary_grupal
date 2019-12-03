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

router.put("/api/users/:username", async (req, res) => {
    await user.updateOne(
      { username: req.params.username },
      { username: req.body.username }
    );
    res.json("OK");
  });
  
  router.put("/api/users/type/:username", async (req, res) => {
    await user.updateOne(
      { username: req.params.username },
      { googleAccount: false }
    );
    res.json("OK");
  });
  
  
    router.put(`/api/users/type`, async (req, res) => {
      await user.updateMany(
        {},
        { googleAccount: false }
      );
      res.json("OK");
    });
  
  
  
  router.put("/api/users/type/:username", async (req, res) => {
    await user.updateOne(
      { username: req.params.username },
      { googleAccount: false }
    );
    res.json("OK");
  });
  
  const addActivitiesToItinerary = (title, activitiesArray) => {
    router.put("/api/updateitineraries/", async (req, res) => {
      await itinerary.findOneAndUpdate(
        { title: title },
        { activities: activitiesArray }
      );
      res.json("OK");
    });
  };

  router.put("api/itineraries", async (req, res, value) => {
    res.send("itinerario actualizado");
  });
  
  router.put("/api/itineraries/byTitle/:title", function(req, res) {
    let itineraryByTitle = req.params.title;
    itinerary.updateOne({}, { title: itineraryByTitle }, { $set: { rating: 6 } });
    res.send(`${itineraryByTitle} updated`);
  });