const inputWindow = document.getElementById('inputWindow')
const addTaskButton = document.getElementById('addTask');
const textField = document.getElementById('taskInput');
const dateField = document.getElementById('dateInput');
const timeField = document.getElementById('timeInput');
const taskList = document.getElementById('tasks');

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

const addTask = () => {
	if (!textField.value) {
		alert('Please enter your task');
	} else if (!dateField.value) {
		alert('Please set date');
	} else if (!timeField.value) {
		alert('Please set time');
	} else {
		let newDiv = document.createElement('div');
		newDiv.className = 'newTask';

		let taskName = document.createElement('h3');
		taskName.className = 'taskName';
		taskName.innerHTML = textField.value;

		let taskDate = document.createElement('div');
		taskDate.className = 'taskDate';

		let newDate = new Date(dateField.value);

		let month = newDate.getUTCMonth() + 1;
		let day = newDate.getUTCDate();

		if (month === 1) {
			month = months[0];
		} else if (month === 2) {
			month = months[1];
		} else if (month === 3) {
			month = months[2];
		} else if (month === 4) {
			month = months[3];
		} else if (month === 5) {
			month = months[4];
		} else if (month === 6) {
			month = months[5];
		} else if (month === 7) {
			month = months[6];
		} else if (month === 8) {
			month = months[7];
		} else if (month === 9) {
			month = months[8];
		} else if (month === 10) {
			month = months[9];
		} else if (month === 11) {
			month = months[10];
		} else if (month === 12) {
			month = months[11];
		}

		let taskDay = document.createElement('h2');
		let taskMonth = document.createElement('h5');

		taskDay.innerHTML = day;
		taskMonth.innerHTML = month;

		taskDate.appendChild(taskDay);
		taskDate.appendChild(taskMonth);

		let taskTime = document.createElement('h3');
		taskTime.className = 'taskTime';
		taskTime.innerHTML = timeField.value;

		let deadline = document.createElement('div');
		deadline.className = 'deadline';

		let checkButton = document.createElement('button');
		checkButton.className = 'checkButton';

		let checkSign = document.createElement('img');
		checkSign.setAttribute('src', 'check-white.png');

		checkButton.appendChild(checkSign);

		deadline.appendChild(taskDate);
		deadline.appendChild(taskTime);

		newDiv.appendChild(deadline);
		newDiv.appendChild(taskName);
		newDiv.appendChild(checkButton);

		taskList.appendChild(newDiv);

		textField.value = '';
		dateField.value = '';
		timeField.value = '';
	}
}

window.onclick = function () {
	let checkButton = document.getElementsByClassName('checkButton');

	for (var i = 0; i < checkButton.length; i++) {
		checkButton[i].onclick = function () {
			this.parentNode.remove();
		}
	}
}

addTaskButton.onclick = addTask;
