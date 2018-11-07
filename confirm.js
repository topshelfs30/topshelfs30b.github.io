"use strict";
// global variables
var waitForUser;

//navigator data
document.getElementsByTagName("p")[0].innerHTML = "Web browser name: " + navigator.appCodeName;
document.getElementsByTagName("p")[1].innerHTML = "Web browser version: " + navigator.appVersion;
document.getElementsByTagName("p")[2].innerHTML = "Operating platform: " + navigator.platform;
document.getElementsByTagName("p")[3].innerHTML = "User agent: " + navigator.userAgent;
document.getElementsByTagName("p")[4].innerHTML = "Are you connected?: " + navigator.onLine;
document.getElementsByTagName("p")[5].innerHTML = "Width: " + screen.width;
document.getElementsByTagName("p")[6].innerHTML = "Height: " + screen.height;



//tests if able to grab geo data
function locationTest() {
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(pullLocation, fail, {timeout: 10000});
	} else {
		fail();
	}
}

//get location data
function pullLocation(position) {
	clearTimeout(waitForUser);
	console.log("Longitude: " + position.coords.longitude);
	console.log("Latitude: " + position.coords.latitude);
	document.getElementById("lon").innerHTML = "Longitude: " + position.coords.longitude;
	document.getElementById("lat").innerHTML = "Latitude: " + position.coords.latitude;
}

//location timeout error
function fail() {
	console.log("Geolocation information not available or not authorized.");
	document.getElementById("lon").innerHTML = "Longitude calculation timed out.";
	document.getElementById("lat").innerHTML = "Latitude calculation timed out.";
}

if (window.addEventListener) {
	window.addEventListener("load", locationTest, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", locationTest);
}