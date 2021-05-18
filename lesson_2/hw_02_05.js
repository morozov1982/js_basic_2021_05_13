'use strict';

/*
5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

function sum(a, b) {
	return a + b;
}

function minus(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// Проверим на работоспособность
const a = 9;
const b = 6;

console.log(sum(a, b));
console.log(minus(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));