"use strict"
//user needs destinations, restaurants, mode of transportation, entertainment
let destinationLocations = ['Florida', 'Texas', 'Wisconsin', 'New York', 'Califorina'];
let finalDestination = ''
let placesToEat = ['Seafood', 'Steak House', 'Brewery', 'Italian', 'Food Truck', 'Chinese'];
let finalPlaceToEat = '';
let modeOfTravel = ['Plane', 'Train', 'Automobile', 'Boat'];
let finalModeOfTravel = [''];
let formOfEnterTainment = ['Concert', 'Pool', 'Beach','site seeing'];
let finalFormOfEntertainment = ''
let answer = 0;

//build a function to generate a whole random number.

function randomNumberGenerator(highValue) {
    answer = Math.floor((Math.random() * highValue)+1)-1; 
    console.log(answer);
}
// call out array positions to determine trip
randomNumberGenerator(destinationLocations.length);
finalDestination = destinationLocations[answer]
randomNumberGenerator(placesToEat.length);
finalPlaceToEat = placesToEat[answer];
randomNumberGenerator(modeOfTravel.length);
finalModeOfTravel = modeOfTravel[answer];
randomNumberGenerator(formOfEnterTainment.length);
finalFormOfEntertainment = formOfEnterTainment[answer];

console.log(finalDestination, finalPlaceToEat, finalModeOfTravel, finalFormOfEntertainment);

