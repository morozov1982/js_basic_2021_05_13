/*
5. * Нарисовать пирамиду с 20 рядами с помощью console.log,
как показано на рисунке:
	x
	xx
	xxx
	xxxx
	xxxxx
*/

const START = 1;
const END = 20;
const SYMBOL = 'x';

for (let i = START; i <= END; i++) {
	let row = [];
	for (let j = START; j <= i; j++) {
		row.push(SYMBOL);
	}
	console.log(...row);
}
