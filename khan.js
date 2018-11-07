/*    Chapter 3 Assignment
 *    Author: Michael Luzader
 *    Date:   
 *    Filename: khan.js
 */
 
//global variables
var ageDifPlus = 0;
var ageDif = 0;
var nintendoyear = 1985;

// calculates input age plus 1985
function calcAge() {
   var num = document.getElementById("age");
   ageDifPlus -= ageDif;
   ageDif = 1 * num.value + 1 * nintendoyear;
   ageDifPlus += ageDif;
}

// calculates if age plus 1985 is greater than or less than 2018 and displays a message
function tellAge() {
	var ageTotal = ageDifPlus;
	var result;
	if (ageTotal === 2018) {
		result = "You are the same age as the Nintendo Entertainment System"
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2009){
		result = "You are the same age as the original Playstation console."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2008){
		result = "You are the same age as the Sega Saturn."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2003){
		result = "You are the same age as the Playstation 2."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2002){
		result = "You are the same age as the Xbox."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 1997){
		result = "You are the same age as the Playstation 3."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2013){
		result = "You are the same age as the Super Nintendo."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2007){
		result = "You are the same age as the Nintendo 64."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (ageTotal === 2085){
		result = "You might be Kevin Hanley."
		document.getElementById("ageReveal").innerHTML = result;
	}
	else if (1985 <= ageTotal && ageTotal <= 2000){
		result = "You are too young to drive, but old enough to game!"
		document.getElementById("ageReveal").innerHTML = result;
	}
	else {
	ageTotal > 2018 ? result = "You are older than the Nintendo Entertainment System!" : result = "You are younger than the Nintendo Entertainment System!";
	document.getElementById("ageReveal").innerHTML = result;
	}
}
// sets all form field values to defaults
function resetForm() {
   document.getElementById("age").value = 0;
   createEventListeners();
}

// creates event listeners
function createEventListeners() {
   document.getElementById("age").addEventListener("change", calcAge, false);
   document.getElementById("age").addEventListener("change", tellAge, false);
}
   
// resets form when page is reloaded
if (window.addEventListener) {
	window.addEventListener("load", resetForm, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", resetForm);
}
