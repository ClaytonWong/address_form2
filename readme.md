# Clayton's Address Form 2

## Introduction
This is a second version of a personal project to create a smart address form.
The version has the following features:
* provides the choice to automatically fill in the following fields using an address-bar
  * street number
  * street name
  * postcode
  * suburb
  * state
  * country
* requires the user to put in the country, street and street number.
* can validate the fields.
* displays error messages if the wrong type of input is given, e.g. a 
  number in country.
* displays an error message if the country, street and street number are not given.

## How to use this code
To get this form to work, you will need the following:
* Google Places API key
* Google Maps JavaScript API key

Both can be obtained from Google Cloud Platform. In addition, you will also need to 
activate or enable both of the above mentioned APIs.
Once you have got the Google Places API key, you will need to put in into the file
address_form2.html, near the bottom, at the line:

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete" async defer></script>

## Background 
The first version does not have an address-bar or autocomplete features but does
have the smarts to validate fields and require the user to enter a country, street, and
street number.
The code and the demonstration of it is at the link below:

https://codepen.io/CW00000000/pen/bzXPLK

My original intention was to have autocomplete for the country, state, suburb, and
street name fields using the Google Places API when the user starts typing into them.
But the API will supply more than one thing when the user starts typing into any of 
those fields, for example, by giving the state followed by the country in the same field.
Hence my decision to create this version with the address-bar.
My JavaScript code for the autocomplete was a modified version of the code used in the 
example below:

https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
