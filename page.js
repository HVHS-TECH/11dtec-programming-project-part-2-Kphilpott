
/*******************************************
this is the page 
*******************************************/

console.log("lunastarships.custmr login successful");


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
   // Function to ask the user for their name
var username;
function askUserName() {
    username = prompt("Welcome to Luna Starships! \nWhat is your name?", "User");
   while (username == null) {
        username = prompt("Please enter a valid name", "User");
    }
    console.log("Hello",username,);
}
   // Function to ask the user for the current year
function askYear() {
    year = prompt("What year is it?", 2079);
    while (year == null) {
        year = prompt("Please enter a valid year", 2079);
    }
    while (year < 2079) {
        year = prompt("Please enter a valid year", 2079);
    }
}

   // Function to ask the user for their age

function askUserAge() {
    age = prompt("Please enter your age " + username, 25);
   while (age == null) {
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
   alert("Welcome to the starship rental interface. Minimum rental lengh is one (1) year.")
   askUserName();
   askYear();
   askUserAge();
   ageMaths();
   drivingAge();

if (age < 25) {
    console.log("You are not yet old enough to fly with us, please come back later.");}


 if (username == "Christopher Luxon") {
    console.log("You are a Idiot");}
else if (username == "Luxon") {
    console.log("You are a Idiot");}

 else if (username == "luxon") {
    console.log("You are a Idiot");}

 else if (username == "christopher uxon") {
    console.log("You are a Idiot");}

}

 //asks what you need
function askReq() {
    Array = ["Cargo", "Passenger", "Military", "Luxury"];
    basePrices = [10000, 20000, 30000, 40000];
    alert("We have the following ship types available for rental: Cargo. Passenger. Military. Luxury", Array.join(", "));
    shipType = prompt("What type of ship would you like to rent? (Cargo, Passenger, Military, Luxury)", "Cargo");
    while (!Array.includes(shipType)) {
        shipType = prompt("Please enter a valid ship type (Cargo, Passenger, Military, Luxury)", "Cargo");
    }
    console.log("You have selected a", shipType, "ship.");
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
}

function output() {
    console.log("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + total + ".");
    alert("Thank you for using Luna Starships, " + username + ". Your total rental cost is $" + total + ".");
    
}