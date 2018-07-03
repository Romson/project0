//Google Maps
function myMap() {
    var mapCanvas = document.getElementById("GoogleMaps");
    var mapOptions = {
        center: new google.maps.LatLng(42.3770029, -71.1166601,15),
        zoom: 13
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}