
//create new window
function processInput() {
	var propertyWidth = 400;
	var propertyHeight = 400;
	var winLeft = ((screen.width - propertyWidth) / 2);
	var winTop = ((screen.height - propertyHeight) / 2);
	var winOptions = "width=400,height=400";
	winOptions += ",left=" + winLeft;
	winOptions += ",top=" + winTop;
	window.open("confirm.htm", "confirm", winOptions);
}

//event listeners
function createEventListener() {
	var submitButton = document.getElementById("submit");
	if (submitButton.addEventListener) {
		submitButton.addEventListener("click", processInput, false);
	} else if (submitButton.attachEvent) {
		submitButton.attachEvent("onclick", processInput);
	}
}


		
//event listener for page load
var submitButton = document.getElementById("submit");
if (window.addEventListener) {
	window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListener);
}