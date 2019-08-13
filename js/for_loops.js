var i;

function showMultiplicationTable(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

// showMultiplicationTable(7);

function isRandomNumberOdd(random) {
    for (k = 1; k <= 10; k++) {
        var random = Math.floor(Math.random() * 181) + 20;
        if (random % 2 === 1) {
            console.log(random + " is an odd number!");
        } else {
            console.log(random + " is an even number!");
        }
    }
}

// isRandomNumberOdd();

var num5 = 1;

function concatNumbers(num5) {
    for (num5 = 1; num5 < 10; num5++) {
        console.log(num5.toString().repeat(num5));
    }
}

concatNumbers();

var input;

function numberMinusFive(input) {
    for (input = 100; input >= 5; input -= 5) {
        console.log(input);
    }
}

numberMinusFive();