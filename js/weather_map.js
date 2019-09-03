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

        function findTheIcon (input) {
            for (var i = 0; i <= 9; i++) {
                if (weatherIcons[i].weather === input) {
                    return weatherIcons[i].icon;
                } else {
                    console.log("panic");
                }
            }
        };

        $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + '</p><p><img src="' + findTheIcon(nameOfIconOne) + '"></p><p>' + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
        $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconTwo) + "'></p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
        $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconThree) + "'></p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
    });

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
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

            $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconOne) + "'></p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
            $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconTwo) + "'></p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
            $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconThree) + "'></p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
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

            $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconOne) + "'></p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
            $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconTwo) + "'></p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
            $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconThree) + "'></p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
        })
    });

    marker.on('dragend', onDragEnd);

    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
    });

    map.addControl(geocoder);

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
        placeholder: "Try: -40, 170",
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

            $("#day-1").html("<p>" + data.daily.data[0].apparentTemperatureLow + "/" + data.daily.data[0].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconOne) + "'></p><p>" + data.daily.data[0].summary + "</p><p>" + data.daily.data[0].humidity + "</p><p>" + data.daily.data[0].windSpeed + "</p><p>" + data.daily.data[0].pressure + "</p>");
            $("#day-2").html("<p>" + data.daily.data[1].apparentTemperatureLow + "/" + data.daily.data[1].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconTwo) + "'></p><p>" + data.daily.data[1].summary + "</p><p>" + data.daily.data[1].humidity + "</p><p>" + data.daily.data[1].windSpeed + "</p><p>" + data.daily.data[1].pressure + "</p>");
            $("#day-3").html("<p>" + data.daily.data[2].apparentTemperatureLow + "/" + data.daily.data[2].apparentTemperatureHigh + "</p><p><img src='" + findTheIcon(nameOfIconThree) + "'></p><p>" + data.daily.data[2].summary + "</p><p>" + data.daily.data[2].humidity + "</p><p>" + data.daily.data[2].windSpeed + "</p><p>" + data.daily.data[2].pressure + "</p>");
        });
    });


});