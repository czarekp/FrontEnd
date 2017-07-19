const firstClockColumn = document.querySelectorAll(".first");
const secondClockColumn = document.querySelectorAll(".second");
const thirdClockColumn = document.querySelectorAll(".third");
const fourthClockColumn = document.querySelectorAll(".fourth");
const analogClock = document.querySelector(".analog-clock");

const colorActive = "#E4FF50";
const colorInactive = "lightblue";

function changeBinaryState(timePart, column){
	switch (timePart) {
		case "0":
			for(let i = 0; i < column.length; i++) {
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "1":
			for (let i = 0; i < column.length; i++){
				if(i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "2":
			for (let i = 0; i < column.length; i++){
				if(i === 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "3":
			for (let i = 0; i < column.length; i++){
				if(i === 3 || i === 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "4":
			for (let i = 0; i < column.length; i++){
				if(i === 1) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "5":
			for (let i = 0; i < column.length; i++){
				if(i === 1 || i  === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "6":
			for (let i = 0; i < column.length; i++){
				if(i === 1 || i === 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "7":
			for (let i = 0; i < column.length; i++){
				if(i === 1 || i === 2 || i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "8":
			for (let i = 0; i < column.length; i++){
				if(i === 0) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "9":
			for (let i = 0; i < column.length; i++){
				if(i === 0 || i === 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
	}
}

function setBinaryTime() {
	const time = new Date();
	const hour = time.getHours().toString();
	const minutes = time.getMinutes().toString();

	changeBinaryState(hour[0], firstClockColumn);
	changeBinaryState(hour[1], secondClockColumn);
	changeBinaryState(minutes[0], thirdClockColumn);
	changeBinaryState(minutes[1], fourthClockColumn);
}

function setAnalogTime(){
	const time = new Date();
	const hour = time.getHours().toString();
	const minutes = time.getMinutes().toString();
	
	analogClock.innerHTML = `${hour} : ${minutes}`;
}

window.setInterval(setBinaryTime, 1000);
window.setInterval(setAnalogTime, 1000);