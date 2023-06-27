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