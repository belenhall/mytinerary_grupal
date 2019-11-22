const express = require('express')
const bodyParser = require('body-parser');
const city = require('./city.js');
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
const uriRo = `mongodb+srv://rodrigobarglia:93dw5ig21hBhJQPs@cluster0-ycigw.mongodb.net/myTineraryApp?retryWrites=true&w=majority`;
const uriJuan = 'mongodb+srv://juanignacioechaide:1000@cluster0-jvvdt.mongodb.net/MYtinerary?retryWrites=true&w=majority';
app.listen(port, () => console.log(`server running on port ${port}`))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API CALLS

app.get('/', (req, res) => { res.send({ express: 'Vamo espres' }) });

app.get('/test', (req, res) => { res.send({ express: 'Vamo test' }) });

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(`Hola soy express${req.body.post}`)
});



router.use(function (req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});


router.get('/', function (req, res) {
    res.send('Im the home page');

});

router.get('/about', function (req, res) {
    res.send('im the about page!');


});


//MONGOOSE
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(uriRo, { useNewUrlParser: true });
app.use('/', router);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

    console.log("mongoose connected");

    router.get('/api/cities', async (req, res) => {
        var ciudades = await city.find(function (err, results) {
            if (err) return console.error(err);
            console.log("joya", results)
        })
        res.json(ciudades)
    })

})

app.get('/api/cities', async (req, res) => {
    var ciudades = await city.find(function (err, results) {
        if (err) return console.error(err);
        console.log("joya", results)
    })
    res.json(ciudades)
})







