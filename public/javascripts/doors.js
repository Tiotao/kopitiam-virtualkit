function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeDoors() {
	var door = document.getElementById("door");
	var initialPosition = [getRandomInt(10, 90) ,getRandomInt(10, 90)];
	var behindTheDoor = document.createElement("div");
	var openingDoor = document.createElement("div");
	var doorContainer = document.createElement("div");
	doorContainer.appendChild(behindTheDoor);
	doorContainer.appendChild(openingDoor);
	var docFrag = document.createDocumentFragment();
	doorContainer.className += " doorContainer"
	behindTheDoor.className += " behindTheDoor"
	openingDoor.className += " openingDoor"
	doorContainer.style.left = initialPosition[0] + "%"
	doorContainer.style.bottom = initialPosition[1] + "%"
	docFrag.appendChild(doorContainer);

	door.appendChild(docFrag);
	window.setTimeout(function(){
		doorContainer.remove();
	}, 10000)
}

makeDoors()

window.setInterval(function(){
	makeDoors()
}, 2000)
