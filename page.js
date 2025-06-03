
/*******************************************
this is the page 
*******************************************/

console.log("luxon is a egg");


    //variables






var total = 0
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

function askUserName() {
    username = prompt("Welcome to Luna Starships! \nWhat is your name?", "User");
   while (username == null) {
        username = prompt("Please enter a valid name", "User");
    }
    console.log("Hello",username,);
}

function askYear() {
    year = prompt("What year is it?", 2079);
    while (year == null) {
        year = prompt("Please enter a valid year", 2079);
    }
    while (year < 2079) {
        year = prompt("Please enter a valid year", 2079);
    }
}

function askUserAge() {
    age = prompt("Please enter your age " + username, 25);
   while (age == null) {
        age = prompt("Please enter a valid age", 25);
    }
}

function askUserMoney() {
    usermoney = prompt("How much money are you willing to spend here?", 0);
    while (usermoney === null ||
        usermoney === "" ||
        isNaN(usermoney)) {
        usermoney = prompt("Please enter a valid amount of money", 0);
    }
    console.log("You have",usermoney ,"dollars avalible");
}

function ageMaths() {
    console.log("You were born in" ,year - age)
}

function drivingAge() {
    if (age < DRIVINGAGE) {
        alert("You are not old enough to fly our ships");
    }
    else {
        alert("You are old enough to fly our ships");
    }
}

function MoneyMaths() {
    if (usermoney < 1000000) {
      cheapShips();
    }
    else if (usermoney > 345000, usermoney < 5000000) {
        mediumShips();
        }
    else if (usermoney > 5000000) {
        largeShips();
    }
    else {
        alert("You do not have enough money to rent any ships. \nPlease come back later.");
    }
}
    
    
function cheapShips() {
    let cheapShipsRentPrices = [50000, 75000, 150000, 345000]
    let cheapShips = ["Small Shuttle", "Small Transport", "Small Cargo", "Small Science Vessel"];
    let message = "The following ships are available for purchase:\n";
    for (let i = 0; i < cheapShips.length; i++) {
        message += (i + 1) + ". " + cheapShips[i] + "\n";
    }
    alert(message);
    let choice = prompt("Please enter the number of the ship you would like to rent \nNumber one is a Small Shuttle ($50k) \nNumber two is a Small Transport ($75k) \nNumber three is a Small Cargo ship ($150k) \n Number four is a Small Science Vessel ($345k).", 1);
    while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > cheapShips.length) {
        choice = prompt("Please enter a valid number between 1 and " + cheapShips.length ,  1);
    }
    while (usermoney < cheapShipsRentPrices[choice - 1]) {
        alert("You do not have enough money to rent any ships. \nPlease come back later.");
        }
        while (usermoney < cheapShipsRentPrices[choice - 2]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > cheapShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + cheapShips.length ,  1);
        }
        }
        while (usermoney < cheapShipsRentPrices[choice - 3]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > cheapShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + cheapShips.length ,  1);
        }
        }
        while (usermoney < cheapShipsRentPrices[choice - 4]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > cheapShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + cheapShips.length ,  1);
        }
        }
    
}

function mediumShips() {
    let mediumShipsRentPrices = [500000, 750000, 1500000, 3450000]
    let mediumShips = ["Standard Shuttle", "Standard Transport", "Standard Cargo", "Standard Science Vessel"];
    let message = "The following ships are available for purchase:\n";
    for (let i = 0; i < mediumShips.length; i++) {
        message += (i + 1) + ". " + mediumShips[i] + "\n";
    }
    alert(message);
    let choice = prompt("Please enter the number of the ship you would like to rent \nNumber one is a Standard Shuttle ($500k) \nNumber two is a Standard Transport ($750k) \nNumber three is a Standard Cargo ship ($1.5m) \n Number four is a Standard Science Vessel ($3.45m).", 1);
    while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > mediumShips.length) {
        choice = prompt("Please enter a valid number between 1 and " + mediumShips.length ,  1);
    }
    while (usermoney < mediumShipsRentPrices[choice - 1]) {
        alert("You do not have enough money to rent these ships. Please come back later.");
        }
        while (usermoney < cmediumShipsRentPrices[choice - 2]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > mediumShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + mediumShips.length ,  1);
        }
        }
        while (usermoney < mediumShipsRentPrices[choice - 3]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > mediumShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + mediumShips.length ,  1);
        }
        }
        while (usermoney < mediumShipsRentPrices[choice - 4]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > mediumShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + mediumShips.length ,  1);
        }
        }
    
}

function largeShips() {
    let largeShipsRentPrices = [5000000, 7500000, 15000000, 34500000, 750000000]
    let largeShips = ["Large Shuttle", "Large Transport", "Large Cargo", "Large Science Vessel", "Military Standard Cruiser"];
    let message = "The following ships are available for purchase:\n";
    for (let i = 0; i < largeShips.length; i++) {
        message += (i + 1) + ". " + largeShips[i] + "\n";
    }
    alert(message);
    let choice = prompt("Please enter the number of the ship you would like to rent \nNumber one is a Standard Shuttle ($5m) \nNumber two is a Standard Transport ($7.5m) \nNumber three is a Standard Cargo ship ($15m) \n Number four is a Standard Science Vessel ($34.5m) \nNumber five is a military Standard Cruiser ($750m)", 1);
    while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > largeShips.length) {
        choice = prompt("Please enter a valid number between 1 and " + largeShips.length ,  1);
    }
    while (usermoney < largeShipsRentPrices[choice - 1]) {
        alert("You do not have enough money to rent these ships. Please come back later.");
        }
        while (usermoney < largeShipsRentPrices[choice - 2]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > largeShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + largeShips.length ,  1);
        }
        }
        while (usermoney < largeShipsRentPrices[choice - 3]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > largeShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + largeShips.length ,  1);
        }
        }
        while (usermoney < largeShipsRentPrices[choice - 4]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > largeShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + largeShips.length ,  1);
        }
        }
        while (usermoney < largeShipsRentPrices[choice - 5]) {
        choice = prompt("You do not have enough money to rent this ship, please choose another ship.", 1);
        while (choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > largeShips.length) {
            choice = prompt("Please enter a valid number between 1 and " + largeShips.length ,  1);
        }
        }
    
}

function start() {
   askUserName();
   askYear();
   askUserAge();
   ageMaths();
   drivingAge();
   askUserMoney();
   MoneyMaths();
  
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