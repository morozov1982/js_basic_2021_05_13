/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

const START = 2;  // Простые числа начинаются с 2
const END = 100;

let arr = [];
let n = START;

while (END >= n) {
	let isSimple = true;

	if (n > START) {
		for (let num of arr) {
			if (n % num === 0) {
				isSimple = false;
			}
		}
	}

	if (isSimple) {
		arr.push(n);
		console.log(n);  // выводит каждое последующее простое число
	}
	
	n++;
}

// console.log(...arr);  // можно просто в одну линию вывести
