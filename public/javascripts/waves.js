function makeWaves(width) {
	var ocean = document.getElementById("ocean"),
	waveWidth = width,
	waveCount = Math.floor(window.innerWidth/waveWidth),
	docFrag = document.createDocumentFragment();

	for(var i = 0; i < waveCount; i++){
		var wave = document.createElement("div");
		wave.className += " wave";
		docFrag.appendChild(wave);
		wave.style.left = i * waveWidth + "px";
		wave.style.webkitAnimationDelay = (i/100) + "s";
		wave.style.width = waveWidth + "px";
	}

	ocean.appendChild(docFrag);
}

if (windowWidth < 400) {
	makeWaves(5);
} else {
	makeWaves(10);
}

$( window ).resize(function(e) {
	console.log(e)
	if (windowWidth !== $( window ).width()) {
		windowWidth = $( window ).width();
		$(".wave").remove();
		if (windowWidth < 400) {
			makeWaves(5);
		} else {
			makeWaves(10);
		}
		
	}
	
});
