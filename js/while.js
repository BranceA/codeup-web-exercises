var i = 2;

while (i <= 65536) {
    console.log(i);
    i *=2;
}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var conesSold = Math.floor(Math.random() * 5) + 1;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold > allCones) {
        console.log("Sorry. I can't sell you " + conesSold + " I only have " + allCones + " left.");
    } else {
        allCones -= conesSold;
        console.log("Here you are! " + conesSold + " cone(s)! Only " + allCones + " left to sell!")
    }
} while(allCones > 0);