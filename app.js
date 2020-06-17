"use strict"
//user needs destinations, restaurants, mode of transportation, entertainment
let destinationLocations = ['Florida', 'Texas', 'Wisconsin', 'New York', 'Califorina'];
let placesToEat = ['Seafood', 'Steak House', 'Brewery', 'Italian', 'Food Truck', 'Chinese','BBQ'];
let modeOfTravel = ['Plane', 'Train', 'Automobile', 'Boat'];
let formOfEnterTainment = ['Concert', 'Pool', 'Beach', 'Monument', 'Football Game'];
let bigArray = [destinationLocations[1],placesToEat[6],modeOfTravel[0],formOfEnterTainment[4]];

//console.log(bigArray);

function randomNumberGenerator(highValue) {
    let randomNumber = Math.floor((Math.random() * highValue) + 1) - 1;
    console.log(randomNumber);
    return randomNumber;
}

function getValueFromArray(array, randomNumber) {
    let result = array[randomNumber];
    return result;
}
function getValueFromLargerArray(array, randomNumber){
    let result = array[randomNumber];
}



let totalStuff = getValueFromArray(bigArray,randomNumberGenerator(bigArray.length));
console.log(totalStuff);

let destination = getValueFromArray(destinationLocations, randomNumberGenerator(destinationLocations.length));
let eatAt = getValueFromArray(placesToEat, randomNumberGenerator(placesToEat.length));
let travel = getValueFromArray(modeOfTravel, randomNumberGenerator(modeOfTravel.length));
let entertainment = getValueFromArray(formOfEnterTainment, randomNumberGenerator(formOfEnterTainment.length));
console.log(destination, eatAt, travel, entertainment);

if (prompt("Type yes to confim trip") == "yes") {
    console.log("complete");
    console.log("You are going to",destination,"and eating at",eatAt,". You're taking a",travel,"and will be going to",entertainment,"for fun!")

}
else { prompt("Type the part of your trip would you like to edit"./n "destination;eat;travel,entertainment")
    
}


