const firstClockColumn = document.querySelectorAll('.first');
const secondClockColumn = document.querySelectorAll('.second');
const thirdClockColumn = document.querySelectorAll('.third');
const fourthClockColumn = document.querySelectorAll('.fourth');
const analogClock = document.querySelector('.analog-clock');

const colorActive = '#E4FF50';
const colorInactive = 'lightblue';

function changeBinaryState(timePart, column) {
	switch (timePart) {
		case '0':
			for (let i = 0; i < column.length; i++) {
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '1':
			for (let i = 0; i < column.length; i++) {
				if (i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '2':
			for (let i = 0; i < column.length; i++) {
				if (i === 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '3':
			for (let i = 0; i < column.length; i++) {
				if (i === 3 || i === 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '4':
			for (let i = 0; i < column.length; i++) {
				if (i === 1) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '5':
			for (let i = 0; i < column.length; i++) {
				if (i === 1 || i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '6':
			for (let i = 0; i < column.length; i++) {
				if (i === 1 || i === 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '7':
			for (let i = 0; i < column.length; i++) {
				if (i === 1 || i === 2 || i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '8':
			for (let i = 0; i < column.length; i++) {
				if (i === 0) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case '9':
			for (let i = 0; i < column.length; i++) {
				if (i === 0 || i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
	}
}

function convertHours(hour) {
	if (hour === '24') {
		return '00';
	} else if (hour === '25') {
		return '01';
	} else {
		return hour;
	}
}

function convertMinutes(minutes) {
	if (minutes === '0') {
		return '00';
	} else if (minutes === '1') {
		return '01';
	} else if (minutes === '2') {
		return '02';
	} else if (minutes === '3') {
		return '03';
	} else if (minutes === '4') {
		return '04';
	} else if (minutes === '5') {
		return '05';
	} else if (minutes === '6') {
		return '06';
	} else if (minutes === '7') {
		return '07';
	} else if (minutes === '8') {
		return '08';
	} else if (minutes === '9') {
		return '09';
	} else {
		return minutes;
	}
}


function setBinaryTime() {
	const time = new Date();
	let hour = convertHours((time.getUTCHours() + 2).toString());
	let minutes = convertMinutes(time.getUTCMinutes().toString());

	changeBinaryState(hour[0], firstClockColumn);
	changeBinaryState(hour[1], secondClockColumn);
	changeBinaryState(minutes[0], thirdClockColumn);
	changeBinaryState(minutes[1], fourthClockColumn);
}

function setAnalogTime() {
	const time = new Date();
	const hour = convertHours((time.getUTCHours() + 2).toString());
	const minutes = time.getUTCMinutes().toString();

	analogClock.innerHTML = `${hour} : ${minutes}`;
}

window.setInterval(setBinaryTime, 1000);
window.setInterval(setAnalogTime, 1000);
