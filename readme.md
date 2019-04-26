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

## Background 
The first version does not have an address-bar or autocomplete features but does
have the smarts to validate fields and require the user to enter a country, street, and
street number.
The code and the demonstration of it is at the link below:

http://www.codepen.io.

My original intention was to have autocomplete for the country, state, suburb, and
street name fields using the Google Places API when the user starts typing into them.
But the API will supply more than one thing when the user starts typing into any of 
those fields by giving the state followed by the country in the same field for example.
