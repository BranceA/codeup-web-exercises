// if (weather === "Water is coming from the sky.") {
//     alert("Attention proletariat! This is the state informing you that this is the biyearly sky leak test. All is well.");
// }
//
// if (userLife === 0) {
//     startVideoGame(autoChess());
// }

    // delete stuff

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     alert("We are deleting all the things. God help us.")
// } else {
//     alert("Operation Canceled!");
// }
//
// var test = prompt("What is the meaning of life, the universe and everything?");
//
// if (test == 42) {
//     alert("Correct. Now we have to figure out the right question.")
// } else {
//     alert("The important thing is you tried.")
// }


    // pizza prompt

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }



//     traffic light
// function doIGo() {
//     if (lightColor.toLowerCase() === "green") {
//     alert("THE LIGHT IS GREEN!!! GO! GO! GO!")
// } else if (lightColor.toLowerCase() === "yellow") {
//     alert("YOU HAVE TIME!!! PEDAL TO THE METAL!!!")
// } else if (lightColor.toLowerCase() === "red") {
//     alert("The light is red. Do not go.")
//     }
//   else if (lightColor.toLowerCase() === "puce") {
//       alert("Can you take this seriously? Nobody actually knows what that color looks like.")
//     }
//   else {
//       alert("I don't think you're looking at a traffic light.")
//     }
// }
//
// var lightColor = prompt("What color is the traffic light?");
//
// doIGo();
function doIGo() {

    var lightColor = prompt("What color is the traffic light?");

    switch (lightColor.toLowerCase()) {
        case "green":
            alert("THE LIGHT IS GREEN!!! GO! GO! GO!");
            break;

        case "yellow":
            alert("YOU HAVE TIME!!! PEDAL TO THE METAL!!!");
            break;

        case "red":
            alert("The light is red. Do not go.");
            break;

        case "puce":
            alert("Can you take this seriously? Nobody actually knows what that color looks like.");
            break;

        default:
            alert("I don't think you're looking at a traffic light.");
            break;
    }
}

doIGo();

    // success message
// 'use strict';
//
// var message = "success";
//
// if (success === true) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }

// the above if/else can be re-written as:
// var message = ("success") ? "Operation was successful." : "Oops, something went wrong.";

function childLabor() {
    if (isShoppingDone === true) {
        message.replace("$5", "$10");
        disableCheckBox();
    }
}

function whetherToShowWeatherMessage() {
    if (weather === "--Make a Choice--") {
        weatherMessage();
    }
    else if (weather === "Sunny") {
        weatherMessage(sunnyMessage);
    }
    else if (weather === "Rainy") {
        weatherMessage(rainyMessage);
    }
    else if (weather === "Snowing") {
        weatherMessage(snowingMessage);
    }
    else if (weather === "Overcast") {
        weatherMessage(overcastMessage);
    }
    else {
        weatherMessage(panic);
    }
}


function selectTheme () {
    if (theme === "White") {
        backgroundColor(white);
        textColor(black);
    }
    else if (theme === "Black") {
        backgroundColor(black);
        textColor(white);
    }
    
}