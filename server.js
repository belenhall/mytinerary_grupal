const express = require("express");
const bodyParser = require("body-parser");
const city = require("./city.js");
const itinerary = require("./itineraries.js");
const activity = require("./activities.js");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes");
const database = require('./database');

app.listen(port, () => console.log(`server running on port ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);