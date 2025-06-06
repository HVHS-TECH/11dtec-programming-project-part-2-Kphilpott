
/*******************************************
this is the page 
*******************************************/

console.log("lunastarships.custmr login successful");
console.log("Initiating program...");

    //variables






var total = 0;
const DRIVINGAGE = 25;



/*******************************************
 Main Code
 ******************************************/
 






/*    //test to copy-paste when needed
console.log()
*/


/*******************************************
 Functions
 *******************************************/
   // Function to ask the user for their name, check if restricted, and crash the program if restricted
var username;
function askUserName() {
    username = prompt("Welcome to Luna Starships! \nWhat is your name?", "User");
   while (username == null) {
        username = prompt("Please enter a valid name", "User");
    }
    console.log("Hello",username,);
    if (username == "Christopher Luxon") {
    alert("error.2025Lux (error0)");
    console.log("error.2025Lux (error0)");
    console.log("WARNING: Restricted user detected. Access denied.");
    console.log("slf-dstrct directive engaged.");
    process.exit(1);
}
else if (username == "Luxon") {
    alert("error.2025Lux (error0)");
    console.log("error.2025Lux (error0)");
    console.log("WARNING: Restricted user detected. Access denied.");
    console.log("slf-dstrct directive engaged.");
    process.exit(1);
}

 else if (username == "luxon") {
    alert("error.2025Lux (error0)");
    console.log("error.2025Lux (error0)");
    console.log("WARNING: Restricted user detected. Access denied.");
    console.log("slf-dstrct directive engaged.");
    process.exit(1);
}

 else if (username == "christopher luxon") {
    alert("error.2025Lux (error0)");
    console.log("error.2025Lux (error0)");
    console.log("WARNING: Restricted user detected. Access denied.");
    console.log("slf-dstrct directive engaged.");
    process.exit(1);
}
else if (username == null) {
    alert("Please enter a valid name");
    console.log("Please enter a valid name");
    askUserName();}

else if (username == "HVHS") {
    console.log("WARNING")
    selfDestruct();
}
}

   // Function to ask the user for the current year
function askYear() {
    year = prompt("What year is it?", 2079);
    while (year == null || isNaN(year)) {
        year = prompt("Please enter a valid year", 2079);
    }
    while (year < 2079) {
        year = prompt("Please enter a valid year", 2079);
    }
}

   // Function to ask the user for their age

function askUserAge() {
    age = prompt("Please enter your age " + username, 25);
   while (age == null || isNaN(age)) {
        age = prompt("Please enter a valid age", 25);
    }
}

function ageMaths() {
    console.log("You were born in" ,year - age)
}

    // Function to check if the user is old enough to pilot a ship

function drivingAge() {
    if (age < DRIVINGAGE) {
        alert("You are not old enough to fly our ships");
        return;
    }
    else {
        alert("You are old enough to fly our ships, proceeding with rental process.");
        askReq();
    }
}
//start program. what, were you expecting more?
function start() {
   alert("Welcome to the starship rental interface. Minimum rental lengh is one (1) year.\nPlease note that you must be at least 25 years old to rent a ship.\n\nWARNING: Four (4) ship types avaliable");
   askUserName();
   askYear();
   askUserAge();
   ageMaths();
   drivingAge();

if (age < 25) {
    console.log("You are not yet old enough to fly with us, please come back later.");}

   
 
}


 //asks what you need and recommends a ship based on the type
function askReq() {
    Array = ["Cargo", "cargo", "Passenger", "passenger", "Military", "military", "luxury", "Luxury"];
    basePrices = [10000, 10000, 20000, 20000, 30000, 30000, 40000, 40000];
    alert("We have the following ship types available for rental: Cargo. Passenger. Military. Luxury", Array.join(", "));
    shipType = prompt("What type of ship would you like to rent? (Cargo, Passenger, Military, Luxury)", "Cargo");
    while (!Array.includes(shipType)) {
        shipType = prompt("Please enter a valid ship type (Cargo, Passenger, Military, Luxury)", "Cargo");
    }
    console.log("You have selected a", shipType, "ship.");
    askRentalLength();
    if (shipType == "Cargo" || shipType == "cargo") {
        console.log("We recommend the LSC78X Cargo Hauler.");
        alert("We recommend the LSC78X Cargo Hauler.");
    } else if (shipType == "Passenger" || shipType == "passenger") {
        console.log("We recommend the LSPX-VII Transport.");
        alert("We recommend the LSPX-VII Transport.");
    } else if (shipType == "Military" || shipType == "military") {
        console.log("We recommend the LSME-V Starfighter. (Low Supply)");
        alert("We recommend the LSME-V Starfighter. (Low Supply)");
    } else if (shipType == "Luxury" || shipType == "luxury") {
        console.log("We recommend the LSLCG-100 Cruiser");
        alert("We recommend the LSLCG-100 Cruiser");
    }
    output();
}
 //asks how many years you want to rent the ship for
function askRentalLength() {
    rentalLength = prompt("How long do you want to rent the ship for? (in years)", 1);
    while (rentalLength == null || isNaN(rentalLength)) {
        rentalLength = prompt("Please enter a valid rental length", 1);
    }
    console.log("You have requested to rent the ship for", rentalLength, "years.");
    calculatePrice();
}

//figures out the price of the ship based on the type and rental length
function calculatePrice() {
    let shipIndex = Array.indexOf(shipType);
    if (shipIndex === -1) {
        alert("Invalid ship type selected.");
        return;
    }
    total = basePrices[shipIndex] * rentalLength;
    console.log("The total cost for renting a", shipType, "ship for", rentalLength, "years is $", total);
    alert("The total cost for renting a " + shipType + " ship for " + rentalLength + " years is $" + total);

    if (total > 10000000) {
    console.log("Detected high-value ship rental. Redirecting to expensive ships section.");
    alert("Detected high-value ship rental. Redirecting to expensive ships section.");
        expensiveShips();
    }

}
//output function to display the final message
function output() {
    console.log("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + total + ".");
    alert("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + total + ".");
    console.log("We hope to see you again soon!");
    alert("We hope to see you again soon!");
}




function selfDestruct() {
    console.log("Self-Destruct sequence initiated.");
    process.exit(0);
}

function expensiveShips() {
    Array = ["Cargo", "cargo", "Passenger", "passenger", "Military", "military", "luxury", "Luxury"];
    expPrices = [1000000, 1000000, 2000000, 2000000, 3000000, 3000000, 4000000, 4000000];
    alert("We have the following ship types available for rental: Cargo. Passenger. Military. Luxury", Array.join(", "));
    shipTypeexp = prompt("What type of ship would you like to rent? (Cargo, Passenger, Military, Luxury)", "Cargo");
    while (!Array.includes(shipTypeexp)) {
        shipTypeexp = prompt("Please enter a valid ship type (Cargo, Passenger, Military, Luxury)", "Cargo");
    }
    console.log("You have selected a", shipTypeexp, "ship.");
    askRentalLengthEXP();
    if (shipType == "Cargo" || shipType == "cargo") {
        console.log("We recommend the LSCXL998 Maximus Cargo Hauler.");
        alert("We recommend the LSCXL998 Maximus Cargo Hauler.");
    } else if (shipType == "Passenger" || shipType == "passenger") {
        console.log("We recommend the NZICC Type 50 Intersystem Transport.");
        alert("We recommend the NZICC Type 50 Intersystem Transport.");
    } else if (shipType == "Military" || shipType == "military") {
        console.log("We recommend the NZHS Type-V 'Imperium' Battlecruiser. (One Available)");
        console.log("Suspicious purchase detected. Logging Space-Time coordinates, biodata and funds available.");
        alert("We recommend the NZHS Type-V 'Imperium' Battlecruiser. (One Available)");
    } else if (shipType == "Luxury" || shipType == "luxury") {
        console.log("We recommend the LSNZLSE-1000 'Elysium' Luxury Galaxy Cruiser");
        alert("We recommend the LSNZLSE-1000 'Elysium' Luxury Galaxy Cruiser");
    }
}

function askRentalLengthEXP() {
    rentalLengthexp = prompt("How long do you want to rent the ship for? (in years)", 25);
    while (rentalLengthexp == null || isNaN(rentalLengthexp)  || rentalLengthexp < 25) {
        rentalLengthexp = prompt("Please enter a valid rental length", 25);
    }
    console.log("You have requested to rent the ship for", rentalLengthexp, "years.");
    calculatePriceEXP();
}

function calculatePriceEXP() {
    let shipIndexexp = Array.indexOf(shipTypeexp);
    if (shipIndexexp === -1) {
        alert("Invalid ship type selected.");
        return;
    }
    totalexp = expPrices[shipIndexexp] * rentalLengthexp;
    console.log("The total cost for renting a", shipTypeexp, "ship for", rentalLengthexp, "years is $", totalexp);
    alert("The total cost for renting a " + shipTypeexp + " ship for " + rentalLengthexp + " years is $" + totalexp);
    outputEXP();
}

function outputEXP() {
    console.log("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + totalexp + ".");
    alert("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + totalexp + ".");
    console.log("We hope to see you again soon!");
    alert("We hope to see you again soon!");
}