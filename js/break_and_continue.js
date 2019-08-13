while (true) {
    var num = parseInt(prompt("Give me an odd number between 0 and 50."));
    if (num % 2 !== 0 && num > 0 && num < 51) {
        break;
    }
}

console.log("User entered: " + num);

for(var i = 1; i < 50; i+=2) {
    if (num === i) {
        console.log("Whoops! Skipping " + num);
        continue;
    }
    console.log(i);
} 