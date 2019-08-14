(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);

    var planetsArray = planetsString.split("|");
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planet;
    //
    // var planetsArrayBreaks = planetsArray.forEach(function(planet) {
    //     planetsArray.splice(planetsArray.indexOf(planet), 1, "\n planet \n");
    //     return planetsArrayBreaks
    // });
    //
    // console.log(planetsArrayBreaks);

    var planetStringWithBreakTags = "Mercury <br> Venus <br> Earth <br> Mars <br> Juperiter <br> Saturn <br> Uranus <br> Neptune <br> Pluto"

    console.log(planetStringWithBreakTags);

})();
