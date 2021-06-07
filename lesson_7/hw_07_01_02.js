'use strict';

// Корзина
let cart = [];

// Каталог товаров
let products = [
	{
		id : 0,
		title : 'Морква',
		description : 'Классическая морква из&nbsp;анекдота, в&nbsp;комплекте две&nbsp;штуки.',
		picture : 'img/morkva.jpg',
		price : 256,
		quantity : 6
	},
	{
		id : 1,
		title : 'Бобёр',
		description : 'Бобёр натуральный, ворс продольный, хвост лопатой.',
		picture : 'img/bober.jpg',
		price : 1005,
		quantity : 4
	},
	{
		id : 2,
		title : 'Тяпка',
		description : 'Тяпка классическая, подходит для&nbsp;тренировки поясницы на&nbsp;даче.',
		picture : 'img/tyapka.jpg',
		price : 682,
		quantity : 9
	},
	{
		id : 5,
		title : 'Ничего',
		description : 'Совсем ничего по&nbsp;завышеным ценам.',
		picture : '',//'img/nothing.jpg',
		price : 1245,
		quantity : 0},
	{
		id : 6,
		title : 'Кое-что',
		description : 'Кое-что, это&nbsp;почти ничего, но&nbsp;немного дороже.',
		picture : 'img/something.jpg',
		price : 1246,
		quantity : 9
	}
];

const catalog = document.querySelector('#products');
const topCart = document.querySelector('#cart');

const popupCart = document.querySelector('#popup__cart');
const popupCartCloseBtn = popupCart.querySelector('#close__popup__cart__btn');
const popupCartNextBtn = popupCart.querySelector('#next__popup__cart__btn');

let currentCartPage = 1;

// Общая сумма корзины
function getCartSum() {
	let cartSum = 0;

	for(let good of cart) {
		cartSum += good.price * good.quantity;
	}
	return cartSum;
}

// Общее количество товаров в корзине
function getCartQuantity() {
	let cartQuantity = 0;

	for(let good of cart) {
		cartQuantity += good.quantity;
	}
	return cartQuantity;
}

// Добавление товара в корзину
function addToCart(data) {
	for(let product of cart) {
		if(product.id === data.id) {
			return product.quantity++;
		}
	}

	let newPosition = crateCartPosition(data);
	cart.push(newPosition);
}

// Создание новой позиции для корзины
function crateCartPosition(data) {
	let position = {};
	for(let key in data) {
		if(key == 'quantity') {
			position[key] = 1;
		}
		else {
			position[key] = data[key];
		}
	}
	return position;
}

// Удаление товара из корзины
function removeFromCart(id) {
	cart.forEach(function(el, i) {
		if(el.id === id) {
			cart.splice(i, 1);
		}
	});
}


// Извлечение товара из каталога
function getProduct(id) {
	for(let i of products) {
		if(i.id === id) {
			i.quantity--;
			return i;
		}
	}
}


// Возврат товара в каталог
function addProduct(id, quant) {
	for(let i of products) {
		if(i.id === id) {
			i.quantity += quant;
		}
	}
}

// Отрисовка корзины в шапке
function drawTopCart() {
	let cartQuantity = getCartQuantity();
	let cartSum = getCartSum();

	const cartDOM = document.querySelector('#cart');
	cartDOM.textContent = '';

	if(cartQuantity) {
		cartDOM.textContent = `В корзине: ${cartQuantity} товаров на сумму ${cartSum} рублей`;
		cartDOM.insertAdjacentHTML('afterbegin', '<a href="" id="open__popup__cart__btn"><img src="img/cart.png" alt="корзина" title="корзина"></a>');

		drawPopupCatalog();
		
		const cartBtn = topCart.querySelector('#open__popup__cart__btn');
		cartBtn.addEventListener('click', clickCartBtnHandler);
	}
	else {
		cartDOM.textContent = 'Корзина пуста';
	}
}

// Отрисовка корзины в popup
function drawPopupCatalog() {
	const cartCatalog = popupCart.querySelector('#cart__page1');
	cartCatalog.textContent = '';
	cartCatalog.insertAdjacentHTML('beforeend', '<h2>Корзина</h2>');

	for(let product of cart) {
		let card = createPopuptCard(product);
		cartCatalog.insertAdjacentHTML('beforeend', card);
	}

	cartCatalog.insertAdjacentHTML('beforeend', `<div class='total__price'>Общая цена: <span>${getCartSum()} руб.</span></div>`);
}

// Отрисовка карточки в popup
function createPopuptCard(data) {
	let card = `
	<div class='cart__card' id='item-${data.id}'>
		<div class='cart__card__title'>${data.title}</div>
		<div>${data.quantity} шт. &times; ${data.price} = ${data.quantity * data.price} руб.</div>
		<button class='remove__from__cart' id='remove__item-${data.id}' data-id='${data.id}'>&times;</button>
	</div>
	`;
	return card;
}


// Отрисовка каталога
function drawProductsCatalog() {
	catalog.textContent = '';

	for(let product of products) {
		let card = createProductCard(product);
		catalog.insertAdjacentHTML('beforeend', card);
	}
}

// Отрисовка карточки товара для каталога
function createProductCard(data) {
	let productCard = `
	<div class='card' id='item-${data.id}'>
		<h3 class='card__title'>${data.title}</h3>

		<div class='card__img'>
			${
				data.picture
				? `<img src='${data.picture}'>`
				: '&nbsp;'
			}
		</div>

		<div class='card__description'>
			<span>Описание: </span>${data.description}
		</div>
		<div class='card__price'>
			<span>Цена: </span>${data.price}
		</div>

		<div class='card__quantity'>
			${
				data.quantity
				? `<span>В наличии: </span>${data.quantity}</div>
					<button class='card__add' data-id='${data.id}'>В корзину</button></div>`
				: `Нет в наличии</div>
					<button class='card__add' data-id='${data.id}' disabled>Нет в наличии</button>`
			}
	</div>`;

	return productCard;
}

function clickCardHandler(e) {
	if(e.target.className === 'card__add') {
		let productId = parseInt(e.target.dataset.id);
		let product = getProduct(productId);
		addToCart(product);
		updateShop();
	}
}

function clickCartBtnHandler(e) {
	e.preventDefault();
	popupCart.style.display = 'flex';
}

function changeCartPages(currentPage) {
	for(let i = 1; i <= 3; i++) {
		popupCart.querySelector('#cart__page' + i).style.display = 'none';
	}
	popupCart.querySelector('#cart__page' + currentPage).style.display = 'flex';
}

function closeCartPopup() {
	currentCartPage = 1;
	changeCartPages(currentCartPage);
	popupCart.style.display = 'none';
}

function clickPopupHandler(e) {
	let targetId = e.target.id;
	let targetClass = e.target.className;
	if(targetId === 'close__popup__cart__btn') {
		closeCartPopup();
	}
	else if(targetId === 'next__popup__cart__btn') {
		if(currentCartPage < 3) {
			changeCartPages(++currentCartPage);
		}
		else {
			closeCartPopup();
		}
	}
	else if(e.target.tagName === 'BUTTON' && targetClass === 'remove__from__cart') {
		const id = parseInt(e.target.dataset.id);
		let quant = 0;
		for(let el of cart) {
			if(el.id === id) {
				quant = el.quantity;
			}
		}
		addProduct(id, quant);
		removeFromCart(id);
		updateShop();
	}
}

popupCart.addEventListener('click', clickPopupHandler);


function updateShop() {
	drawTopCart();
	drawProductsCatalog(products);
}
updateShop();

catalog.addEventListener('click', clickCardHandler);

