javascript:(function(){var elemDiv = document.createElement('div'); 
var textNode = document.createTextNode("Random text"); 
var firstElem = document.querySelector("body");
elemDiv.appendChild(textNode);
firstElem.parentNode.insertBefore(elemDiv,firstElem);}());