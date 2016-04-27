
windowWidth = $( window ).width();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// make some waves.


function makeCircle() {
	var circle = document.getElementById("circle");
	var initialPosition = [getRandomInt(10, 90) ,getRandomInt(10, 90)];
	var cir = document.createElement("div");
	var docFrag = document.createDocumentFragment();
	cir.className += " cir"
	cir.style.left = initialPosition[0] + "%"
	cir.style.bottom = initialPosition[1] + "%"
	docFrag.appendChild(cir);
	circle.appendChild(docFrag);
	window.setTimeout(function(){
		cir.remove();
	}, 16000)
}

makeCircle();

window.setInterval(function(){
	makeCircle()

}, 4000);


