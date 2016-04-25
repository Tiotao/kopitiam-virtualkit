function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date('May 25 2016 20:00:00 GMT+08:00');
initializeClock('countdown', deadline);

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
