
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