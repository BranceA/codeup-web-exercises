"use strict";

$(document).ready(function () {

    mapboxgl.accessToken = mapboxToken;

    var coordinates = document.getElementById('coordinates');

    var weatherIcons = [
        {
            weather: "clear-day",
            icon: "climacons-master/SVG/Sun.svg"
        }, {
            weather: "clear-night",
            icon: "climacons-master/SVG/Moon.svg"
        }, {
            weather: "rain",
            icon: "climacons-master/SVG/Cloud-Rain.svg"
        }, {
            weather: "snow",
            icon: "climacons-master/SVG/Cloud-Snow.svg"
        }, {
            weather: "sleet",
            icon: "climacons-master/SVG/Cloud-Hail.svg"
        }, {
            weather: "wind",
            icon: "climacons-master/SVG/Wind.svg"
        }, {
            weather: "fog",
            icon: "climacons-master/SVG/Cloud-Fog.svg"
        }, {
            weather: "cloudy",
            icon: "climacons-master/SVG/Cloud.svg"
        }, {
            weather: "partly-cloudy-day",
            icon: "climacons-master/SVG/Cloud-Sun.svg"
        }, {
            weather: "partly-cloudy-night",
            icon: "climacons-master/SVG/Cloud-Moon.svg"
        }
    ];

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 3,
        center: [-98.5795, 39.8283]
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/29.4241,-98.4936").done(function (data) {
        console.log(data);
        $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p><img src='" + weatherIcons[2].icon + "'></p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
        $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p>" + data.daily.data[1].icon + "</p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
        $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p>" + data.daily.data[2].icon + "</p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
    });

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        console.log(lngLat.lng);
        console.log(lngLat.lat);
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/" + lngLat.lat.toFixed(4) + "," + lngLat.lng.toFixed(4)).done(function (data) {
            console.log(data);
            $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p>" + data.daily.data[0].icon + "</p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
            $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p>" + data.daily.data[1].icon + "</p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
            $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p>" + data.daily.data[2].icon + "</p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
        })
    };

    $("#submit").click(function () {
        var setLatInput = $("#latInput").val();
        var setLongInput = $("#longInput").val();
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/" + setLatInput + "," + setLongInput).done(function (data) {
            console.log(data);
            $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p>" + data.daily.data[0].icon + "</p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
            $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p>" + data.daily.data[1].icon + "</p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
            $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p>" + data.daily.data[2].icon + "</p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
        })
    });

    marker.on('dragend', onDragEnd);

    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }));


    map.addControl(new mapboxgl.NavigationControl());

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/" + lngLat.lat.toFixed(4) + "," + lngLat.lng.toFixed(4)).done(function (data) {
        console.log(data);
        $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p>" + data.daily.data[0].icon + "</p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
        $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p>" + data.daily.data[1].icon + "</p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
        $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p>" + data.daily.data[2].icon + "</p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
    });

    console.log(weatherIcons[0].icon);

    console.log(weatherIcons);


});