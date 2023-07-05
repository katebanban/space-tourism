$(function(){
	$('.slider__box').slick({
		prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow left">',
		nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow right">',
	});
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('menu__list--active');
	menuBtn.classList.toggle('menu__btn--active');
	document.querySelector('body').classList.toggle('no-scroll');
});

let foreighObject = document.querySelectorAll('foreignObject');

let x1 = foreighObject[0].getAttribute('x');
let y1 = foreighObject[0].getAttribute('y');

let x2 = foreighObject[1].getAttribute('x');
let y2 = foreighObject[1].getAttribute('y');

let x3 = foreighObject[2].getAttribute('x');
let y3 = foreighObject[2].getAttribute('y');

function myFunction(screen) {
	if (screen.matches) { // Если медиа запрос совпадает
		foreighObject[0].setAttribute('x', '15');
		foreighObject[0].setAttribute('y', '398');
		
		foreighObject[1].setAttribute('x', '130');
		foreighObject[1].setAttribute('y', '520');
		
		foreighObject[2].setAttribute('x', '570');
		foreighObject[2].setAttribute('y', '420');
	} else {
		foreighObject[0].setAttribute('x', x1);
		foreighObject[0].setAttribute('y', y1);
		
		foreighObject[1].setAttribute('x', x2);
		foreighObject[1].setAttribute('y', y2);
		
		foreighObject[2].setAttribute('x', x3);
		foreighObject[2].setAttribute('y', y3);
	}
}

let myMediaWidth = window.matchMedia("(max-width: 425px)")
myFunction(myMediaWidth) // Вызов функции прослушивателя во время выполнения
myMediaWidth.addListener(myFunction) // Присоединить функцию прослушивателя при изменении состояния

