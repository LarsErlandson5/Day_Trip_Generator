"use strict"
//user needs destinations, restaurants, mode of transportation, entertainment
let destinationLocations = ['Florida', 'Texas', 'Wisconsin', 'New York', 'Califorina'];
let placesToEat = ['Seafood', 'Steak House', 'Brewery', 'Italian', 'Food Truck', 'Chinese'];
let modeOfTravel = ['Plane', 'Train', 'Automobile', 'Boat'];
let formOfEnterTainment = ['Concert', 'Pool', 'Beach', 'Monument', 'Football Game'];

function randomNumberGenerator(highValue) {
    let randomNumber = Math.floor((Math.random() * highValue) + 1) - 1;
    console.log(randomNumber);
    return randomNumber;
}

function getValueFromArray(array, randomNumber) {
    let result = array[randomNumber];
    return result;
}

let destination = getValueFromArray(destinationLocations, randomNumberGenerator(destinationLocations.length));
let eatAt = getValueFromArray(placesToEat, randomNumberGenerator(placesToEat.length));
let travel = getValueFromArray(modeOfTravel, randomNumberGenerator(modeOfTravel.length));
let entertainment = getValueFromArray(formOfEnterTainment, randomNumberGenerator(formOfEnterTainment.length));
console.log(destination, eatAt, travel, entertainment);

if (prompt("Type yes to confim trip") == "yes") {
    console.log("complete");
    console.log("You are going to",destination,"and eating at",eatAt,". You're taking a",travel,"and will be going to",entertainment,"for fun!")

}
else { 
    destination = getValueFromArray(destinationLocations, randomNumberGenerator(destinationLocations.length));
    eatAt = getValueFromArray(placesToEat, randomNumberGenerator(placesToEat.length));
    travel = getValueFromArray(modeOfTravel, randomNumberGenerator(modeOfTravel.length));
    entertainment = getValueFromArray(formOfEnterTainment, randomNumberGenerator(formOfEnterTainment.length));
    console.log("Instead!!! You're going to",destination,"and eating",eatAt,". You're taking a",travel,"and will be going to",entertainment,"for fun!")

}




// finalDestination = destinationLocations[answer]
// randomNumberGenerator(placesToEat.length);
// finalPlaceToEat = placesToEat[answer];
// randomNumberGenerator(modeOfTravel.length);
// finalModeOfTravel = modeOfTravel[answer];
// randomNumberGenerator(formOfEnterTainment.length);
// finalFormOfEntertainment = formOfEnterTainment[answer];

// console.log("Here is a randomly generated trip to",finalDestination, "eating", finalPlaceToEat, "food. You'll take a", finalModeOfTravel,"to get there and head to a", finalFormOfEntertainment),"for entertainment!";

// for(let i=0; i<10; i++){
// let decision = prompt("Enter Yes to confirm trip,");
//     if(decision == "Yes" ){
//         console.log("Yes was typed")
//         break; 
//     }
//     else{
//         console.log("something else was typed...")
//         break;
//     }
// }
