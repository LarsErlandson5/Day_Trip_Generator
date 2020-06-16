"use strict"
//user needs destinations, restaurants, mode of transportation, entertainment
let destinationLocations = ['Florida','Texas','Wisconsin','New York','Califorina'];
let placesToEat = ['Seafood','Steak House', 'Brewery', 'Italian', 'Food Truck', 'Chinese'];
let modeOfTravel = ['Plane','Train','Automobile']
let random = 6;

//build a function to generate a whole random number.

function randomNumberGenerator(highValue){
    return Math.floor((Math.random() * Math.floor(highValue))+1)
}

for(let i =0; i<100;i++){
console.log(randomNumberGenerator(4));
}