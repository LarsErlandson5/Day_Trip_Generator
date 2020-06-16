"use strict"
//user needs destinations, restaurants, mode of transportation, entertainment
let destinationLocations = ['Florida', 'Texas', 'Wisconsin', 'New York', 'Califorina'];
let finalDestination = ''
let placesToEat = ['Seafood', 'Steak House', 'Brewery', 'Italian', 'Food Truck', 'Chinese'];
let finalPlaceToEat = '';
let modeOfTravel = ['Plane', 'Train', 'Automobile', 'Boat'];
let finalModeOfTravel = [''];
let formOfEnterTainment = ['Concert', 'Pool', 'Beach','Monument'];
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

console.log("Here is a randomly generated trip to",finalDestination, "eating", finalPlaceToEat, "food. You'll take a", finalModeOfTravel,"to get there and head to a", finalFormOfEntertainment),"for entertainment!";
let selected =prompt("type yes to confirm or No to see a new trip,")
if(selected == ( "Yes")||("yes")){
    console.log("you hit yess didnt you")

}
else{
    console.log("this will run it again.")
}