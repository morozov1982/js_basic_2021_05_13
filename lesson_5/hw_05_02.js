'use strict';

let basketArr = {
	goods : [
		// {title: 'good1', price : 300},
		// {title: 'good2', price : 600},
		// {title: 'good3', price : 400}
	],
	getTotalSum() {
		let totalSum = 0;
		for (let good in this.goods) {
			totalSum += this.goods[good].price;
		}
		return totalSum;
	},
	getTotalQuantity() {
		return this.goods.length;
	}
};


let quantity = basketArr.getTotalQuantity();
let totalSum = basketArr.getTotalSum();

const basket = document.querySelector('#basket');
basket.insertAdjacentHTML('beforeBegin', '<h2>Корзина</h2>')

if(quantity) {
	basket.insertAdjacentHTML('afterBegin', `<p>В корзине: ${quantity} товаров на сумму ${totalSum} рублей</p>`)
}
else {
	basket.insertAdjacentHTML('afterBegin', '<p>Корзина пуста</p>');
}
