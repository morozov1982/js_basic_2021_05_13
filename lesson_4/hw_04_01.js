/*
1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, надо получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.

Например,
для числа 245 надо получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.

Если число превышает 999,
необходимо выдать соответствующее сообщение с помощью console.log
и вернуть пустой объект.
*/

const NUM = 951;  // -1, 0, 1, 51, 951, 999, 1000

function numToObject(num) {
	let numObject = {}
	if (num > 999 || num < 0) {
		console.log('\33[91mВнимание:\33[0m число должно быть в диапазоне \33[92mот 0 до 999\33[0m включительно!');
		return numObject;
	}
	else {
		numObject.units = num % 10;
		numObject.tens = (num % 100 - numObject.units) / 10;
		numObject.hundreds = (num - num % 100) / 100;
	}
	return numObject;
}

// Исключительно ради интереса
function numToObjectRus(num) {
	let numObject = {}
	if (num > 999 || num < 0) {
		console.log('Число должно быть в диапазоне от 0 до 999 включительно!');
		return numObject;
	}
	else {
		numObject['единицы'] = num % 10;
		numObject['десятки'] = (num % 100 - numObject['единицы']) / 10;  // просто интересно было, сработает ли
		numObject['сотни'] = (num - num % 100) / 100;
	}
	return numObject;
}

// Проверяем
console.log(numToObject(NUM));
console.log(numToObjectRus(NUM + 1));  // +1, чтобы вывод немного отличался
