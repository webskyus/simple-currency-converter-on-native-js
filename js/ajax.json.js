'use strict'



let inputRub = document.querySelector('.rub-input'),
		inputUsd = document.querySelector('.usd-input');


inputRub.addEventListener('input', function () {

	let request = new XMLHttpRequest();
	this.value = this.value.replace(/[^\d,]/g, '')
	
	request.open('GET', 'js/currency.json');
	request.setRequestHeader('Content-Type', 'application/json');
	request.send();

	request.addEventListener('readystatechange', function () {
		if (request.readyState === 4 || request.readyState === 200) {
			let data = JSON.parse(request.response);
			inputUsd.value = (inputRub.value / data.usd).toFixed(2);
		} else {
			inputUsd.value = 'error';
		}
	});

});

inputUsd.addEventListener('input', function () {

	let request = new XMLHttpRequest();
	this.value = this.value.replace(/[^\d,]/g, '')
	
	request.open('GET', 'js/currency.json');
	request.setRequestHeader('Content-Type', 'application/json');
	request.send();

	request.addEventListener('readystatechange', function () {
		if (request.readyState === 4 || request.readyState === 200) {
			let data = JSON.parse(request.response);
			inputRub.value = (inputUsd.value * data.usd).toFixed(2);
		} else {
			inputRub.value = 'error';
		}
	});

});



