function overlay(){
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
}

// TOOGLE VIEWS
var divs = ["toggle-reservation-details", "gifting", "card-payment"];
var visibleDivId = null;
function toggleVisibility(divId) {
	if(visibleDivId === divId) {
		} else {
			visibleDivId = divId;
		}
			hideNonVisibleDivs();
}	

function hideNonVisibleDivs() {
	var i, divId, div;
		for(i = 0; i < divs.length; i++) {
			divId = divs[i];
			div = document.getElementById(divId);
		if(visibleDivId === divId) {
			$(document).ready(function(){
				$(visibleDivId).slideUp("slow").hide();
   				$(div).slideDown("fast").show();
			});
			// div.style.display = "block";	
		} else {
			div.style.display = "none";
		}
	}
}

// toggleVisibility('gifting');
// TOGGLE DOT color

var dots = ["first-dot", "sec-dot", "third-dot"];
var visibleDotId = null;
function toggleDotColor(dotId) {
	if(visibleDotId === dotId) {
		} else {
			visibleDotId = dotId;
		}
			hideNonVisibleDots();
}	

function hideNonVisibleDots() {
	var i, dotId, dot;
		for(i = 0; i < dots.length; i++) {
			dotId = dots[i];
			dot = document.getElementById(dotId);
		if(visibleDotId === dotId) {
			dot.style.backgroundColor = "#e68443";
		} else {
			dot.style.backgroundColor = "#b7b7b7";
		}
	}
}

// Change div header
function changeHeader(id, text){
	document.getElementById(id).innerHTML = text;
}

// GIFTS
function selectGift(id){
	el = document.getElementById(id);
	if(el.className !== "toggled") {
		el.className = "toggled"
	} else{
		el.className = '';
	}
}
