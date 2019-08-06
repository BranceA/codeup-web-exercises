"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color: ");

alert("Great, my favorite color is " + favoriteColor + " too!");

alert("If you want to rent movies, it's $3 per day per movie.");

var littleMermaidDaysRented = prompt("How many days would you like to rent The Little Mermaid?");

var brotherBearDaysRented = prompt("How many days would you like to rent Brother Bear?");

var herculesDaysRented = prompt("How many days would you like to rent Hercules?");

alert("It costs $" + ((parseInt(littleMermaidDaysRented) * 3) + (parseInt(brotherBearDaysRented) * 3) + (parseInt(herculesDaysRented) * 3)) + " to rent these movies.");

alert("We need to have a talk about the fact that you're working three jobs.");

var hoursWorkedForGoogle = prompt("How many hours did you work for Google this week?");

var hoursWorkedForAmazon = prompt("How many hours did you work for Amazon this week?");

var hoursWorkedForFacebook = prompt("How many hours did you work for Facebook this week?");

alert("By eliminating your personal life you earned $" + ((parseInt(hoursWorkedForGoogle) * 400) + (parseInt(hoursWorkedForAmazon) * 380) + (parseInt(hoursWorkedForFacebook) * 350)) + " this week.");

alert("Not sure how you have time for class but let's see if you can enroll.");

var isClassFull = prompt("How many people are in the class?");

var isThereScheduleConflict = confirm("Press OK if the class WILL NOT conflict with your current schedule.");

if ((isClassFull < 26) && (isThereScheduleConflict === true)){
    alert("You good.")
} else {
    alert("No dice.")
}

alert("Time to buy a generic product. Can you get the generic offer?");

var numberOfItemsBought = prompt("How many items are you buying?");

var isOfferExpired = confirm("Press OK if the offer is still valid. We work on the honor system here.");

var isPremiumMember = confirm("Press OK if you are a premium member. Still on the honor system.");

if ((numberOfItemsBought > 2) && (isOfferExpired === true) || (isPremiumMember === true)) {
    alert("You can purchase generic product for generic offer")
} else {
    alert("You get to buy this product for 2 easy payments of 50% of the full price!!!")
}


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?