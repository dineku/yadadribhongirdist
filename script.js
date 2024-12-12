var map = L.map('map').setView([17.5159, 78.8900], 12); // Centered on Yadadri Bhuvanagiri

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([17.5159, 78.8900]).addTo(map)
    .bindPopup("Yadadri Bhuvanagiri")
    .openPopup();

document.getElementById('geolocation-btn').addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLon = position.coords.longitude;

            var userMarker = L.marker([userLat, userLon]).addTo(map)
                .bindPopup("Your Location")
                .openPopup();

            map.setView([userLat, userLon], 14);
            document.getElementById('location-info').innerHTML = `
                Latitude: ${userLat}, Longitude: ${userLon}
            `;
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

