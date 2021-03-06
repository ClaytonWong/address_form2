var autocomplete;

var addressComponents = {
  street_number: 'long_name',
  route: 'long_name', // Street name
  postal_code: 'long_name',
  locality: 'long_name', // Suburb
  administrative_area_level_1: 'long_name', // State
  country: 'long_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('address_bar'), {types: ['geocode']});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(['address_component']);

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
    
  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (addressComponents[addressType]) {
      var val = place.address_components[i][addressComponents[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}