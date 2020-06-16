"use strict"
//user needs destinations, restaurants, mode of transportation, entertainment
let destinationLocations = ['Florida', 'Texas', 'Wisconsin', 'New York', 'Califorina'];
let finalDestination = ''
let placesToEat = ['Seafood', 'Steak House', 'Brewery', 'Italian', 'Food Truck', 'Chinese'];
let finalPlaceToEat = "";
let modeOfTravel = ['Plane', 'Train', 'Automobile', 'Boat'];
let finalModeOfTravel = "";
let result = 0;

//build a function to generate a whole random number.

function randomNumberGenerator(highValue) {
    result = Math.floor((Math.random() * highValue)+1)-1
    console.log(result);
}

randomNumberGenerator(destinationLocations.length);
finalDestination = destinationLocations[result]
randomNumberGenerator(placesToEat.length);
finalPlaceToEat = placesToEat[result];
randomNumberGenerator(modeOfTravel.length);
finalModeOfTravel = modeOfTravel[result];


console.log(finalDestination, finalPlaceToEat, finalModeOfTravel);
