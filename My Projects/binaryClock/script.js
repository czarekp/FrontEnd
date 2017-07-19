var firstClockColumn = document.querySelectorAll(".firstColumn");
var secondClockColumn = document.querySelectorAll(".secondColumn");
var thirdClockColumn = document.querySelectorAll(".thirdColumn");
var fourthClockColumn = document.querySelectorAll(".fourthColumn");

var colorActive = "midnightblue";
var colorInactive = "lightblue";

function changeBinaryState(timePart, column){
	switch (timePart) {
		case "0":
			for(var i = 0; i < column.length; i++) {
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "1":
			for (var i = 0; i < column.length; i++){
				if(i == 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "2":
			for (var i = 0; i < column.length; i++){
				if(i == 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "3":
			for (var i = 0; i < column.length; i++){
				if(i == 3 || i == 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "4":
			for (var i = 0; i < column.length; i++){
				if(i == 1) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "5":
			for (var i = 0; i < column.length; i++){
				if(i == 1 || i  == 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "6":
			for (var i = 0; i < column.length; i++){
				if(i == 1 || i == 2) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "7":
			for (var i = 0; i < column.length; i++){
				if(i == 1 || i == 2 || i == 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "8":
			for (var i = 0; i < column.length; i++){
				if(i == 0) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
		case "9":
			for (var i = 0; i < column.length; i++){
				if(i == 0 || i == 3) {
					column[i].style.backgroundColor = colorActive;
					continue;
				}
				column[i].style.backgroundColor = colorInactive;
			}
			break;
	}
}

function setBinaryTime() {
	var time = new Date();
	var hour = time.getHours().toString();
	var minutes = time.getMinutes().toString();

	changeBinaryState(hour[0], firstClockColumn);
	changeBinaryState(hour[1], secondClockColumn);
	changeBinaryState(minutes[0], thirdClockColumn);
	changeBinaryState(minutes[1], fourthClockColumn);
}

window.setInterval(setBinaryTime, 1000);