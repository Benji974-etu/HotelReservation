
var Amadeus = require("amadeus");
var amadeus = new Amadeus({
    clientId: 'eomG3xykrf0UoAHmUi3LfkDBKtkJqKCJ',
    clientSecret: 'QxCWG9qVq1Z4lZAE'
});

// Get list of available offers in specific hotels by hotel ids
amadeus.shopping.hotelOffersSearch.get({
    hotelIds: 'RTPAR001',
    adults: '2'
}).then(function (response) {
  console.log(response);
}).catch(function (response) {
  console.error(response);
});