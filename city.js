var mongoose = require('mongoose');
var citySchema = new mongoose.Schema({
    name:String,
    country:String
})

var city = mongoose.model('city',citySchema);

module.exports = city;


 /* var London = new city({ name: 'London', country: 'UK' });
 London.save()
 var Berlin = new city({ name: 'Berlin', country: 'Germany' });
 Berlin.save()
 var Madrid = new city({ name: 'Madrid', country: 'Spain' });
 Madrid.save()
 var Rome = new city({ name: 'Rome', country: 'Italy' });
 Rome.save()
 var Paris = new city({ name: 'Paris', country: 'France' });
 Paris.save()
 var Bucharest = new city({ name: 'Bucharest', country: 'Romania' });
 Bucharest.save()
 var Budapest = new city({ name: 'Budapest', country: 'Hungary' });
 Budapest.save()
 var Hamburg = new city({ name: 'Hamburg', country: 'Germany' });
 Hamburg.save()
 var Warsaw = new city({ name: 'Warsaw', country: 'Poland' }); 
 Warsaw.save()
 var Hamburg = new city({ name: 'Hamburg', country: 'Germany' });
 Hamburg.save()
 var Belgrade = new city({ name: 'Belgrade', country: 'Serbia' });
 Belgrade.save()
 var Vienna = new city({ name: 'Vienna', country: 'Austria' });
 Vienna.save()
 var Milan = new city({ name: 'Milan', country: 'Italy' });
 Milan.save()
 var Munich = new city({ name: 'Munich', country: 'Germany' });
 Munich.save()
 var Prague = new city({ name: 'Prague', country: 'Czech Republic' });
 Prague.save()
 var Sofia = new city({ name: 'Sofia', country: 'Bulgaria' });
 Sofia.save()
 var Napoli = new city({ name: 'Napoli (Naples)', country: 'Italy' });
 Napoli.save()
 var Stockholm = new city({ name: 'Stockholm', country: 'Sweden' });
 Stockholm.save()
 var Copenhagen = new city({ name: 'Copenhagen', country: 'Denmark' });
 Copenhagen.save()
 var Oslo = new city({ name: 'Oslo', country: 'Norway' });
 Oslo.save()
 */


/*  newCity.save(function (err, newCity) {
  if (err) return console.error(err);
   console.log("Guarde una ciudad en la DB!", newCity.name, newCity.country);
 });
  console.log(newCity.name, newCity.country); */