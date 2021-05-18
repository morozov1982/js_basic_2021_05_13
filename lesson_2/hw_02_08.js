'use strict';

/*
8. * С помощью рекурсии организовать функцию возведения числа в степень.
Формат:
	function power(val, pow),
	где val — заданное число,
	pow –— степень.
*/

function power(val, pow) {
	if (pow == 0) {
		return 1;
	}
	else if (pow == 1) {
		return val;
	}
	else {
		return (power(val, pow - 1)) * val;
	}
}

// Проверочки
console.log('power(2, 0) = ' + power(2, 0));
console.log('power(2, 1) = ' + power(2, 1));
console.log('power(2, 2) = ' + power(2, 2));
console.log('power(2, 3) = ' + power(2, 3));
console.log('power(2, 4) = ' + power(2, 4));
console.log('power(2, 5) = ' + power(2, 5));
