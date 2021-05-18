'use strict';

/*
6. Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов,
operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5)
и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation) {
	let result;
	switch (operation) {
		case "sum":
			result = arg1 + arg2;
			break;
		case "minus":
			result = arg1 - arg2;
			break;
		case "multiply":
			result = arg1 * arg2;
			break;
		case "divide":
			result = arg1 / arg2;
			break;
		default:
			result = "!!! Внимание: операция " + operation + " не предусмотрена!";
			break;
	}
	return result;
}

// Проверим на работоспособность
const a = 9;
const b = 6;

console.log(mathOperation(a, b, "sum"));
console.log(mathOperation(a, b, "minus"));
console.log(mathOperation(a, b, "multiply"));
console.log(mathOperation(a, b, "divide"));
console.log(mathOperation(a, b, "бобёр"));