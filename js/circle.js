(function() {
    "use strict";

    var names = ["Tim", "Bob", "Jane", "Bertha", "Jim", "Bart", "Sally", "Juan", "Doug", "Patty", "David", "Steven", "Erika", "Gertrude", "Nemo", "Harry", "Larry", "Mo", "Heather", "Brance Jr."];

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
                var area = Math.PI * (Math.pow(this.radius, 2));

            return area; // TODO: return the proper value
        },

        getCircumference: function () {
            var circumference = 2 * Math.PI * this.radius;
            return circumference;
        },

        logInfo: function (doRounding) {
            if (doRounding === true) {
                var area = Math.round(this.getArea());
                var circumference = Math.round(this.getCircumference());
            } else {
                var area = this.getArea();
                var circumference = this.getCircumference()
            }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area + ". The circumference is " + circumference);
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
