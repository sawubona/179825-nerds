var open = document.querySelector(".write-btn");
var popup = document.querySelector(".writeus");
var close = popup.querySelector(".writeus-closed-btn");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("writeus-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("writeus-show");
});

form.addEventListener("submit", function (event) {
    localStorage.setItem("login", login.value);
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("writeus-show")) {
            popup.classList.remove("writeus-show");
        }
    }
});

function initialize() {
    var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(59.939116, 30.320012)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var image = "img/map-point.png"; 
    var myLatLng = new google.maps.LatLng(59.938568, 30.323671);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);