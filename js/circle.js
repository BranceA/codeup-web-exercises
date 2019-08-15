(function() {
    "use strict";

    var names = ["Tim", "Bob", "Sarah", "Bertha", "Jim", "Bart", "Sally", "Juan", "Doug", "Patty", "David", "Steven", "Erika", "Gertrude", "Nemo", "Harry", "Larry", "Mo", "Heather", "Brance Jr."];

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
                var area = Math.PI * (Math.pow(this.radius, 2));

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            if (doRounding === true) {
                var area = Math.round(circle.getArea());
            } else {
                var area = circle.getArea();
            }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("This is a circle. It's name is " + names[Math.floor(Math.random() * 20)] + ". It has a radius of " + circle.radius + ".");
    circle.logInfo(false);
    console.log("Circle area rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("This is a circle. It's name is " + names[Math.floor(Math.random() * 20)] + ". It has a radius of " + circle.radius + ".");
    circle.logInfo(false);
    console.log("Circle area rounded to the nearest whole number");
    circle.logInfo(true);
})();
