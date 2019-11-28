const express = require("express");
const router = express.Router();
const city = require("./city.js");
const itinerary = require("./itineraries");
const activity = require("./activities.js");
const user = require("./user.js");
const bcrypt = require("bcrypt");
const db = require("./database");

module.exports  =

  router.get("/api/activities", async (req, res) => {
    itinerary
      .find({ activities: /[^b]/ }, { _id: 0, activities: 1 })
      .then(activities => res.json(activities));
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
        profilePicture: req.body.profilePicture
      });
      newUser.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newUser);
      });
    });
  });
postUser(userRegisterUri);
postUser(userLoginUri);

const genericGetAll = (uri, model) => {
  router.get(uri, async (req, res) => {
    var data = await model.find((err, results) => {
      if (err) return console.error(err);
      console.log("Success");
    });
    res.json(data);
  });
};
const citiesRoute = "/api/cities";
const itinerariesRoute = "/api/itineraries";
const routesAndModels = [
  [citiesRoute, city],
  [itinerariesRoute, itinerary],
  [userUri, user]
];

routesAndModels.map(subarray => genericGetAll(subarray[0], subarray[1]));

router.post("/api/itineraries", (req, res) => {
  const newItinerary = new Itinerary(req.body);
  newItinerary.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newItinerary);
  });
});

router.put("/api/users/:id", (req, res) => {
  user.findByIdAndUpdate(req.params.id, { $set: { username: req.body.name } });
  res.send("user updated");
});

router.get("/api/cities/:name", async (req, res) => {
  let ciudadBuscada = req.params.name;
  city
    .findOne({ name: ciudadBuscada })
    .then(ciudad => res.json(ciudad))
    .catch(err => console.log(err));

 
});
router.get("/api/itineraries/:city", async (req, res) => {
  let itinerarioBuscado = req.params.city;
  itinerary
    .find(
      { city: itinerarioBuscado },
      {
        _id: 0,
        title: 1,
        user: 1,
        profilePic: 1,
        city: 1,
        price: 1,
        likes: 1,
        rating: 1,
        hashtags: 1,
        duration: 1
      }
    )
    .then(itinerario => res.json(itinerario));
});

router.get("/api/itineraries/:city/activities", async (req, res) => {
  let itinerarioBuscado = req.params.city;
  itinerary
    .find({ city: itinerarioBuscado }, { activities: 1, _id: 0 })
    .then(itinerario => res.json(itinerario))
    .catch(err => console.log(err));
});

router.get("/api/itineraries/byTitle/:title", async (req, res) => {
  let itinerarioBuscado = req.params.title;
  itinerary
    .find({ title: itinerarioBuscado })
    .then(itinerario => res.json(itinerario))
    .catch(err => console.log(err));
});

router.get("/api/itineraries/byTitle/:title/activities", async (req, res) => {
  let itinerarioBuscado = req.params.title;
  itinerary
    .find({ title: itinerarioBuscado }, { _id: 0, title: 1, activities: 1 })
    .then(itinerario => res.json(itinerario))
    .catch(err => console.log(err));
});

router.get("/api/activities/:city", async (req, res) => {
  let activitiesByCity = [req.params.city, "Any"];
  activity
    .find({ city: activitiesByCity })
    .then(activity => res.json(activity))
    .catch(err => console.log(err));
});

router.get("/api/activities/byName/:name", async (req, res) => {
  let activitiesByName = req.params.name;
  activity
    .find({ name: activitiesByName })
    .then(activity =>
      res.send(activity.map(item => [item.name, item.priceRange, item.hasthag]))
    )
    .catch(err => console.log(err));
});


router.put("api/itineraries", async (req, res, value) => {
  res.send("itinerario actualizado");
});

router.put("/api/itineraries/byTitle/:title", function(req, res) {
  let itineraryByTitle = req.params.title;
  itinerary.updateOne({}, { title: itineraryByTitle }, { $set: { rating: 6 } });
  res.send(`${itineraryByTitle} updated`);
});


