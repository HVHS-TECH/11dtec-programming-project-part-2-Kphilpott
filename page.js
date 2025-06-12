
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
        askEXP();
    }
}
//start program. what, were you expecting more?
function start() {
   alert("Welcome to the starship rental interface. Minimum rental lengh is one (1) year.\nPlease note that you must be at least 25 years old to rent a ship.\n\nFour (4) ship types avaliable in normal section.\nFour (4) ships types avaliable in expensive catalog.");
   askUserName();
   askYear();
   askUserAge();
   ageMaths();
   drivingAge();

if (age < 25) {
    console.log("You are not yet old enough to fly with us, please come back later.");}

   
 
}


function askEXP() {
    askEXPchoice = prompt("Would you like to reroute to the expensive ships? (yes/no)", "no");
    if (askEXPchoice.toLowerCase() === "yes") {
        expensiveShips();
    } else if (askEXPchoice.toLowerCase() === "no") {
        console.log("Opening normal ships rental section.");
        alert("Opening normal ships rental section.");
        askReq();
    } else {
        alert("Please enter a valid choice (yes/no)");
        askEXP();
    }
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
    askRentalLength();
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
                 
//figures out the price of the ship based on the type and rental length, detects high-value buy/rent attempts and redirects to expensive ships section if needed
function calculatePrice() {
    let shipIndex = Array.indexOf(shipType);
    if (shipIndex === -1) {
        alert("Invalid ship type selected.");
        return;
    }
    total = basePrices[shipIndex] * rentalLength;
    console.log("The total cost for renting a", shipType, "ship for", rentalLength, "years is $", total);
    alert("The total cost for renting a " + shipType + " ship for " + rentalLength + " years is $" + total);
    output();
}

//output function to display the final message
function output() {
    console.log("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + total + ".");
    alert("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + total + ".");
    console.log("We hope to see you again soon!");
    alert("We hope to see you again soon!");
}


//Starts expensive ships section
//This section is for ships that cost more than 10 million credits/dollars(NZD) to rent
//please note this section was pain to create and had numerous bugs
function expensiveShips() {
    Array = ["CargoL", "cargol", "PassengerL", "passengerl", "MilitaryL", "militaryl", "luxuryL", "Luxuryl"];
    expPrices = [1000000, 1000000, 2000000, 2000000, 3000000, 3000000, 4000000, 4000000];
    alert("We have the following ship types available for rental: Cargo. Passenger. Military. Luxury", Array.join(", "));
    shipTypeexp = prompt("What type of ship would you like to rent? (CargoL, PassengerL, MilitaryL, LuxuryL)\nPlease check for Capitals Lock", "CargoL");
    while (!Array.includes(shipTypeexp)) {
        shipTypeexp = prompt("Please enter a valid ship type (CargoL, PassengerL, MilitaryL, LuxuryL)\nPlease check for Capitals Lock", "CargoL");
    }
    console.log("You have selected a", shipTypeexp, "ship.");
    askRentalLengthEXP();
    if (shipTypeexp == "CargoL" || shipTypeexp == "cargol") {
        console.log("We recommend the LSCXL998 Maximus Cargo Hauler.");
        alert("We recommend the LSCXL998 Maximus Cargo Hauler.");
    } else if (shipTypeexp == "PassengerL" || shipTypeexp == "passengerl") {
        console.log("We recommend the NZICC Type 50 Intersystem Transport.");
        alert("We recommend the NZICC Type 50 Intersystem Transport.");
    } else if (shipTypeexp == "MilitaryL" || shipTypeexp == "militaryl") {
        console.log("We recommend the NZHS Type-V 'Imperium' Battlecruiser. (One Available)");
        console.log("Suspicious purchase detected. Logging Space-Time coordinates, biodata and funds available.");
        alert("We recommend the NZHS Type-V 'Imperium' Battlecruiser. (One Available)");
    } else if (shipTypeexp == "LuxuryL" || shipTypeexp == "luxuryl") {
        console.log("We recommend the LSNZLSE-1000 'Elysium' Luxury Galaxy Cruiser");
        alert("We recommend the LSNZLSE-1000 'Elysium' Luxury Galaxy Cruiser");
    }
    outputEXP();
}

//asks how many years you want to rent the ship for in the expensive ships section
function askRentalLengthEXP() {
    rentalLengthexp = prompt("How long do you want to rent the ship for? (in years)", 25);
    while (rentalLengthexp == null || isNaN(rentalLengthexp)  || rentalLengthexp < 25) {
        rentalLengthexp = prompt("Please enter a valid rental length", 25);
    }
    console.log("You have requested to rent the ship for", rentalLengthexp, "years.");
    calculatePriceEXP();
}

//figures out the price of the ship based on the type and rental length in the expensive ships section
function calculatePriceEXP() {
    let shipIndexexp = Array.indexOf(shipTypeexp);
    if (shipIndexexp === -1) {
        alert("Invalid ship type selected.");
        return;
    }
    totalexp = expPrices[shipIndexexp] * rentalLengthexp;
    console.log("The total cost for renting a", shipTypeexp, "ship for", rentalLengthexp, "years is $", totalexp);
    alert("The total cost for renting a " + shipTypeexp + " ship for " + rentalLengthexp + " years is $" + totalexp);
}

//output function to display the final message in the expensive ships section
function outputEXP() {
    if (totalexp > 1000000000 && shipTypeexp == "MilitaryL" || shipTypeexp == "militaryl") {
        console.log("Suspiciously high-value ship rental detected. Logging Space-Time coordinates, biodata and funds available.");
        alert("Cannot process rental. Please contact Luna Starships support for assistance.\n\nError Code: ᕊ|:ᒍᔮ·ǀ·ᒷ↸.ϟ⚍ϟ.ᔮϟᒣᒍᒲ∷ᑕ|:⚍リϟᒣ∷ϟ⍑i!ᔮᒍ∷ᒷᑐ");
    }
    else {
      console.log("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + totalexp + ".");
    alert("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + totalexp + ".");
    console.log("We hope to see you again soon!");
    alert("We hope to see you again soon!");
    }
}




































//What it says on the tin
function selfDestruct() {
    console.log("Self-Destruct sequence initiated.");
    process.exit(0);
}
