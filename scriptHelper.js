// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
     let missionTarget = document.getElementById("missionTarget");

        missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}<li>
                     <li>Number of Moons: ${moons}</li>
                <ol>
                <img src="${imageUrl}">
                     `;

}

function validateInput(testInput) {
    let testNum = Number(testInput)

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testNum) === false) {
        return "Is a Number";
    } else if (isNaN(testNum)) {
        return "Not a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let liftoff = true
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoMass = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")

    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value)=== "Empty") {
        window.alert("All Fields are Required!")
    } else if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number" || validateInput(fuelLevel.value) !=="Is a Number" || validateInput(cargoLevel.value) !== "Is a Number") {
        window.alert("Please Enter the Correct type of information into each Field")
        console.log(`${validateInput(cargoLevel.value)}, ${validateInput(pilot.value)}, ${validateInput(copilot.value)}, ${validateInput(fuelLevel.value)}`)
    } else {
        console.log(list.style.visiblity)
        list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    }

    if (fuelLevel.value <10000) {
        fuelStatus.innerHTML = "Fuel Level is too low for launch"
        liftoff = false;
    } else {
        fuelStatus.innerHTML = "Fuel Level is acceptable for launch"
    }

    if (cargoLevel.value > 10000) {
        cargoStatus.innerHTML = "Cargo mass Exceeds weight compacity";
        liftoff = false;
    } else {
        cargoStatus.innerHTML = "Cargo Mass is acceptable for launch";
    }
    
    if (liftoff ) {
        launchStatus.style.color = "green"
        launchStatus.innerHTML = "Shuttle is Ready for Liftoff!"
    } else {
        launchStatus.style.color ="red"
        launchStatus.innerHTML = "Shuttle is Not Ready for Liftoff!"
    }
   
    
        
    
    

    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    
        return planetsReturned;   
};

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()* planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
