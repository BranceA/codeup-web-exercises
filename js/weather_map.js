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
        marker.setLngLat([-98.4936, 29.4241]);
        marker.addTo(map);

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/29.4241,-98.4936").done(function (data) {

            var nameOfIconOne = data.daily.data[0].icon;
            var nameOfIconTwo = data.daily.data[1].icon;
            var nameOfIconThree = data.daily.data[2].icon;

        console.log(data.daily);

        function findTheIcon (input) {
            for (var i = 0; i <= 9; i++) {
                if (weatherIcons[i].weather === input) {
                    return weatherIcons[i].icon;
                } else {
                    console.log("panic");
                }
            }
        };
        // reverseGeocode({lng: 29.4241, lat: -98.4936}, mapboxToken).then(function (value) {
        //
        // })
        //
        // geocode(marker.location, mapboxToken).then(function() {
        //     console.log(marker.location);
        // });

        console.log(reverseGeocode({lng: -157.8060, lat: 21.2620}, mapboxToken));

        $("#day-1").html("<div class='card-header bg-primary'>Day 1</div> <li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconOne) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[0].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[0].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[0].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[0].pressure + "</li>");
        $("#day-2").html("<div class='card-header bg-primary'>Day 2</div> <li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconTwo) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[1].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[1].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[1].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[1].pressure + "</li>");
        $("#day-3").html("<div class='card-header bg-primary'>Day 3</div> <li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconThree) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[2].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[2].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[2].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[2].pressure + "</li>");
    });

    function onDragEnd() {
        var lngLat = marker.getLngLat();

        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/" + lngLat.lat.toFixed(4) + "," + lngLat.lng.toFixed(4)).done(function (data) {
            console.log(data);

            var nameOfIconOne = data.daily.data[0].icon;
            var nameOfIconTwo = data.daily.data[1].icon;
            var nameOfIconThree = data.daily.data[2].icon;

            function findTheIcon (input) {
                for (var i = 0; i <= 9; i++) {
                    if (weatherIcons[i].weather === input) {
                        console.log(weatherIcons[i].icon);
                        return weatherIcons[i].icon;
                    } else {
                        console.log("panic");
                    }
                }
            };

            $("#day-1").html("<div class='card-header bg-primary'>Day 1</div><li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconOne) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[0].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[0].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[0].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[0].pressure + "</li>");
            $("#day-2").html("<div class='card-header bg-primary'>Day 2</div><li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconTwo) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[1].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[1].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[1].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[1].pressure + "</li>");
            $("#day-3").html("<div class='card-header bg-primary'>Day 3</div><li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconThree) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[2].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[2].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[2].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[2].pressure + "</li>");
        })
    };

    $("#submit").click(function () {
        var setLatInput = $("#latInput").val();
        var setLongInput = $("#longInput").val();
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/" + setLatInput + "," + setLongInput).done(function (data) {

            var nameOfIconOne = data.daily.data[0].icon;
            var nameOfIconTwo = data.daily.data[1].icon;
            var nameOfIconThree = data.daily.data[2].icon;

            function findTheIcon (input) {
                for (var i = 0; i <= 9; i++) {
                    if (weatherIcons[i].weather === input) {
                        console.log(weatherIcons[i].icon);
                        return weatherIcons[i].icon;
                    } else {
                        console.log("panic");
                    }
                }
            };

            $("#day-1").html("<div class='card-header bg-primary'>Day 1</div><li class='list-group-item list-group-item-dark'>High/LowHigh: /Low" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconOne) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[0].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[0].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[0].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[0].pressure + "</li>");
            $("#day-2").html("<div class='card-header bg-primary'>Day 2</div><li class='list-group-item list-group-item-dark'>High/LowHigh: /Low: " + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconTwo) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[1].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[1].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[1].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[1].pressure + "</li>");
            $("#day-3").html("<div class='card-header bg-primary'>Day 3</div><li class='list-group-item list-group-item-dark'>High/LowHigh: /Low: " + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconThree) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[2].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[2].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[2].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[2].pressure + "</li>");
        })
    });

    marker.on('dragend', onDragEnd);

    var coordinatesGeocoder = function (query) {
// match anything which looks like a decimal degrees coordinate pair
        var matches = query.match(/^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i);
        if (!matches) {
            return null;
        }

        function coordinateFeature(lng, lat) {
            return {
                center: [lng, lat],
                geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                place_name: 'Lat: ' + lat + ' Lng: ' + lng,
                place_type: ['coordinate'],
                properties: {},
                type: 'Feature'
            };
        }

        var coord1 = Number(matches[1]);
        var coord2 = Number(matches[2]);
        var geocodes = [];

        if (coord1 < -90 || coord1 > 90) {
// must be lng, lat
            geocodes.push(coordinateFeature(coord1, coord2));
        }

        if (coord2 < -90 || coord2 > 90) {
// must be lat, lng
            geocodes.push(coordinateFeature(coord2, coord1));
        }

        if (geocodes.length === 0) {
// else could be either lng, lat or lat, lng
            geocodes.push(coordinateFeature(coord1, coord2));
            geocodes.push(coordinateFeature(coord2, coord1));
        }

        return geocodes;
    };

    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 4,
        placeholder: "Try: -40, 170 or a name",
    }));


    map.addControl(new mapboxgl.NavigationControl());

    map.on("moveend", function() {
        marker.setLngLat(map.getCenter());
        var lngLat = marker.getLngLat();
        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyKey + "/" + lngLat.lat.toFixed(4) + "," + lngLat.lng.toFixed(4)).done(function (data) {
            console.log(data);

            var nameOfIconOne = data.daily.data[0].icon;
            var nameOfIconTwo = data.daily.data[1].icon;
            var nameOfIconThree = data.daily.data[2].icon;

            function findTheIcon (input) {
                for (var i = 0; i <= 9; i++) {
                    if (weatherIcons[i].weather === input) {
                        console.log(weatherIcons[i].icon);
                        return weatherIcons[i].icon;
                    } else {
                        console.log("panic");
                    }
                }
            };

            $("#day-1").html("<div class='card-header bg-primary'>Day 1</div><li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconOne) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[0].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[0].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[0].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[0].pressure + "</li>");
            $("#day-2").html("<div class='card-header bg-primary'>Day 2</div><li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconTwo) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[1].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[1].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[1].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[1].pressure + "</li>");
            $("#day-3").html("<div class='card-header bg-primary'>Day 3</div><li class='list-group-item list-group-item-dark'>High/Low: " + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</li><li class='list-group-item list-group-item-dark'><img src='" + findTheIcon(nameOfIconThree) + "'></li><li class='list-group-item list-group-item-dark'>" + data.daily.data[2].summary + "</li><li class='list-group-item list-group-item-dark'> Humidity: " + data.daily.data[2].humidity + "</li><li class='list-group-item list-group-item-dark'>Wind speed: " + data.daily.data[2].windSpeed + " km/hr</li><li class='list-group-item list-group-item-dark'>Atmospheric pressure: " + data.daily.data[2].pressure + "</li>");
        });
    });


});