var country = document.getElementById('country'); // Works
var autocomplete = new google.maps.places.Autocomplete(country); // Sort of works

 
console.log(autocomplete.getPlace());

// Sort of works
/*
var optionsRegion = { types: ['(regions)'] };
var autocompleteCountry = new google.maps.places.Autocomplete(country, optionsRegion);

var state = document.getElementById('state');
var autocompleteState = new google.maps.places.Autocomplete(state, optionsRegion);

var city = document.getElementById('city');
var optionsCity = { types: ['(cities)'] }; 
var autocompleteCity = new google.maps.places.Autocomplete(city, optionsCity);
*/
