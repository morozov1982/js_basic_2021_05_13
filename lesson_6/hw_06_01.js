'use strict';

let cartArr = {
	goods : [],
	getTotalSum() {
		let totalSum = 0;
		for (let good in this.goods) {
			totalSum += this.goods[good].price;
		}
		return totalSum;
	},
	getTotalQuantity() {
		return this.goods.length;
	},
	add(title, price) {
		this.goods.push({title, price : Number(price)});
	}
};

let productsArr = {
	products : [
		{
			id : 0,
			title : 'Морква',
			description : 'Классическая морква из&nbsp;анекдота, в&nbsp;комплекте две&nbsp;штуки.',
			picture : './img/morkva.jpg',
			price : 256,
			quantity : 6
		},
		{
			id : 1,
			title : 'Бобёр',
			description : 'Бобёр натуральный, ворс продольный, хвост лопатой.',
			picture : './img/bober.jpg',
			price : 1005,
			quantity : 4
		},
		{
			id : 2,
			title : 'Тяпка',
			description : 'Тяпка классическая, подходит для&nbsp;тренировки поясницы на&nbsp;даче.',
			picture : './img/tyapka.jpg',
			price : 682,
			quantity : 9
		},
		{
			id : 5,
			title : 'Ничего',
			description : 'Совсем ничего по&nbsp;завышеным ценам.',
			picture : '',//'./img/nothing.jpg',
			price : 1245,
			quantity : 0},
		{
			id : 6,
			title : 'Кое-что',
			description : 'Кое-что, это&nbsp;почти ничего, но&nbsp;немного дороже.',
			picture : './img/something.jpg',
			price : 1246,
			quantity : 9
		}
	],
	getProduct(id) {
		for(let i of this.products) {
			if(i.id == id) {
				i.quantity--;
				return i;
			}
		}
	}
};


function updateCart() {
	let quantity = cartArr.getTotalQuantity();
	let totalSum = cartArr.getTotalSum();

	const cart = document.querySelector('#cart');
	cart.innerHTML = null;

	if(quantity) {
		cart.insertAdjacentHTML('afterBegin', `В корзине: ${quantity} товаров на сумму ${totalSum} рублей`)
	}
	else {
		cart.insertAdjacentHTML('afterBegin', 'Корзина пуста');
	}
}

function createProductCard(data) {
	let card = '';
	
	card += `<h3 class='card__title'>${data.title}</h3>\n`;

	if(data.picture) {
		card += `<div class='card__img'><img src='${data.picture}'></div>\n`;
	}
	else {
		card += `<div class='card__img'>&nbsp;</div>\n`;
	}

	card += `<div class='card__description'><span>Описание: </span>${data.description}</div>\n`;
	card += `<div class='card__price'><span>Цена: </span>${data.price}</div>\n`;
	if(data.quantity) {
		card += `<div class='card__quantity'><span>В наличии: </span>${data.quantity}</div>\n`;
		card += `<button class='card__add'>В корзину</button>`;
	}
	else {
		card += `<div class='card__quantity'>Нет в наличии</div>\n`;
		card += `<button class='card__add' disabled>Нет в наличии</button>`;
	}

	return `<div class='card' data-id='${data.id}'>${card}</div>`;
}

function updateProducts(data) {
	const catalog = document.querySelector('#products');
	catalog.innerHTML = null;
	for(let i = 0; i < data.length; i++) {
		let card = createProductCard(data[i]);
		catalog.insertAdjacentHTML('beforeend', card);
	}
	for(let btn of catalog.querySelectorAll('.card')) {
		btn.querySelector('.card__add').addEventListener('click', clickCardHandler);
	}
}

function clickCardHandler(e) {
	let productId = e.target.parentNode.dataset.id;
	let product = productsArr.getProduct(productId);
	cartArr.goods.push(product);
	updateShop();
}

function updateShop() {
	updateProducts(productsArr.products);
	updateCart();
}

updateShop()
