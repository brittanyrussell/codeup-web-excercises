"use strict";
var welcome = "Welcome to my Website!";
alert(welcome);

var favcolor = prompt("What is your favorite color?");


function favorite(color) {
   var message = "Great, " + favcolor + " is my favorite color too!";
    alert(message);
}

favorite(favcolor);

var moviePrice = 3

var theLittleMermaidDays = prompt ("How many days did you rent The Little Mermaid?");
var brotherBearDays = prompt ("How many days did you rent Brother Bear?");
var herculesDays = prompt ("How many days did you rent hercules?");
var pricePerDay = 3
var total = theLittleMermaidDays * pricePerDay + brotherBearDays * pricePerDay + herculesDays * pricePerDay;
alert(theLittleMermaidDays * pricePerDay);
alert(brotherBearDays * pricePerDay);
alert(herculesDays * pricePerDay);
alert("Your total is $" + (total));
 var totalDays = brotherBearDays + theLittleMermaidDays + herculesDays;
 var totalCost = totalDays + moviePrice;

 alert("You owe us " + totalCost + " for your movie rentals.");

 console.log("brotherBearDays = " + brotherBearDays);
 console.log("theLittleMermaidDays = " + theLittleMermaidDays);
console.log("herculesDays = " + herculesDays);
console.log("totalDays = " + totalDays);
console.log(typeof totalDays);
console.log("totalCost = " + totalCost);
console.log(totalCost);

// SECOND EXCERCISE PROMPT

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
var totalHours = googleHours + amazonHours + facebookHours;
var total = amazonHours*amazonRate + googleHours*googleRate + facebookHours*facebookRate;
console.log("After working " + totalHours + " at google, facebook, and amazon, we made: $" + total.toFixed(2) + "!");

// THIRD EXCERCISE PROMPT
var classHasSpace = true;
var scheduleWorksForStudent = false;
var canBeEnrolledInClass = classHasSpace && scheduleWorksForStudent;
console.log(canBeEnrolledInClass);
FOURTH EXCERCISE PROMPT

var moreThanTwoItems = true;
var offerIsValid = true;
var isPremiumMember = false;
var offerCanBeApplied = offerIsValid && (moreThanTwoItems || isPremiumMember);
console.log(offerCanBeApplied);

// FIFTH EXCERCISE PROMPT

var isLoggedIn = false;
var isAdmin = true;
var isAuthor = false;
var canEditArticle = isLoggedIn && (isAdmin || isAuthor);
console.log(canEditArticle);


// Login Excercise

// var username = 'codeup';
// var password = 'notastrongpassword';
var username = prompt("Please enter your desired username")
var password = prompt("Please enter your desired password")

var passwordIsLongEnough = password.length >= 5;
var passwordContainsUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
var userNameHasWhiteSpace = username.trim() != username;
var passwordHasWhiteSpace = password.trim() != password;

var credentialsAreGood = passwordIsLongEnough && !passwordContainsUsername && usernameIsShortEnough && !userNameHasWhiteSpace && !passwordHasWhiteSpace;

if(credentialsAreGood) {
    alert("Your account has been created. Check your email for the confirmation link");
    console.log("Your account has been created. Check your email for the confirmation link");


} else {
    alert("your username or password must conform to the posted rules...");
    console.log("your username or password must conform to the posted rules...");

}