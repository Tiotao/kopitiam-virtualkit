
windowWidth = $( window ).width();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// make some waves.


function makeFlowCharacters(size) {
	var flow = document.getElementById("flow");
	var initialPosition = [getRandomInt(10, 90) ,0];
	var backgroundRow = getRandomInt(0, 3);
	var backgroundCol = getRandomInt(0, 3);
	var backgroundPos = backgroundRow * size + "px " + backgroundCol * size + "px"
	var character = document.createElement("div");
	var docFrag = document.createDocumentFragment();
	character.className += " char-" + size;
	console.log(initialPosition)
	character.style.left = initialPosition[0] + "%"
	character.style.bottom = initialPosition[1] + "px"
	character.style.backgroundPosition = backgroundPos;
	docFrag.appendChild(character);
	flow.appendChild(docFrag);
	window.setTimeout(function(){
		character.remove();
	}, 40000)
}

makeFlowCharacters(40)
makeFlowCharacters(80)

window.setInterval(function(){
	makeFlowCharacters(40)

}, 1500);

window.setInterval(function(){
	makeFlowCharacters(80)
}, 3000)

