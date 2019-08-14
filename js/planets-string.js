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

    var planetStringWithBreakTags = planetsArray.join("<br>");

    console.log(planetStringWithBreakTags);

    var planetList = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li><li>Pluto</li></ul>";

    console.log(planetList);

    // planetsArray.push("</ul>");
    // planetsArray.unshift("<ul>");
    // var planetList = planetsArray.join("</li><li>");
    // var betterPlanetList = <ul>
    // console.log(planetList);

    // var addOpeningTag = planetsArray.unshift("<ul>");
        // var addClosingTag = addOpeningTag
        // var addListItemTags = addClosingTag.join("<li>");

    // var planetsInList = planetsArray.unshift("<ul>").push("</ul>").join("<li>");

    // console.log(planetsInList);
    //
    // console.log(addListItemTags);

})();
