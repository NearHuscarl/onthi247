import random from 'lodash/random';

function randomBetween(min, max) {
	return random(min, max, true);
}

function randomBetweenInt(min, max) {
	return random(min, max, false);
}

function randomDate({
	yearStart = 0,
	yearEnd = 5000,
	monthStart = 0,
	monthEnd = 11,
	dayStart = 1,
	dayEnd = 31,
	hourStart = 0,
	hourEnd = 23,
	minuteStart = 0,
	minuteEnd = 59,
	secondStart = 0,
	secondEnd = 59,
}) {
	const year = random(yearStart, yearEnd);
	const month = random(monthStart, monthEnd);
	const day = random(dayStart, dayEnd);
	const hour = random(hourStart, hourEnd);
	const minute = random(minuteStart, minuteEnd);
	const second = random(secondStart, secondEnd);
	const date = new Date();

	date.setFullYear(year, month, day);
	date.setHours(hour);
	date.setMinutes(minute);
	date.setSeconds(second);

	return date;
}

const dateNow = new Date();

function randomDateFromNow({
	yearStart = 0,
	yearEnd = 0,
	monthStart = 0,
	monthEnd = 0,
	dayStart = 0,
	dayEnd = 0,
	hourStart = 0,
	hourEnd = 0,
	minuteStart = 0,
	minuteEnd = 0,
	secondStart = 0,
	secondEnd = 0,
}) {
	return randomDate({
		yearStart: dateNow.getFullYear() + yearStart,
		yearEnd: dateNow.getFullYear() + yearEnd,
		monthStart: dateNow.getMonth() + monthStart,
		monthEnd: dateNow.getMonth() + monthEnd,
		dayStart: dateNow.getDate() + dayStart,
		dayEnd: dateNow.getDate() + dayEnd,
		hourStart: dateNow.getHours() + hourStart,
		hourEnd: dateNow.getHours() + hourEnd,
		minuteStart: dateNow.getMinutes() + minuteStart,
		minuteEnd: dateNow.getMinutes() + minuteEnd,
		secondStart: dateNow.getSeconds() + secondStart,
		secondEnd: dateNow.getSeconds() + secondEnd,
	});
}

export { randomBetween, randomBetweenInt, randomDate, randomDateFromNow };
