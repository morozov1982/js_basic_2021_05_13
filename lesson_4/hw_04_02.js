/*
2. Продолжить работу с интернет-магазином:
	a. В прошлом домашнем задании вы реализовали корзину на базе массивов.
	   Какими объектами можно заменить их элементы?
	b. Реализуйте такие объекты.
	c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

let basket = {
	goods : [
		{title: 'good1', price : 300, quantity : 1},
		{title: 'good2', price : 600, quantity : 2},
		{title: 'good3', price : 400, quantity : 5}
	],
	getTotalSum() {
		let totalSum = 0;
		for (let good in this.goods) {
			totalSum += this.goods[good].quantity * this.goods[good].price;
		}
		return totalSum;
	},
	getTotalQuantity() {
		let totalQuantity = 0;
		for (let good in this.goods) {
			totalQuantity += this.goods[good].quantity;
		}
		return totalQuantity;
	}
};

console.log('В корзине: \33[92m' + basket.getTotalQuantity() + ' товаров\33[0m, на сумму - \33[93m' + basket.getTotalSum() + '\33[0m');