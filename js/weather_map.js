$(document).ready(function () {

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/29.4241,-98.4936").done(function (data) {
        console.log(data);
        $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p>" + data.daily.data[0].icon + "</p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
        $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p>" + data.daily.data[1].icon + "</p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
        $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p>" + data.daily.data[2].icon + "</p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
    })


});