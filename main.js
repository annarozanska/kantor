const btnChange = document.querySelector('.btn-change');
const h1 = document.querySelector('.converter');
const inputCash = document.querySelector('.input-cash');
const option = document.getElementById('currency');

const main = () => {
	btnChange.addEventListener('click', converter);
};

const URL = 'https://api.nbp.pl/api/exchangerates/rates/a/';

const convertCurrency = (rate) => {
	const result = inputCash.value * rate;
	return result.toFixed(2);
};

const converter = () => {
	const valueNum = inputCash.value;
	const valueOption = option.value;

	if (!valueNum || valueNum === '') {
		alert('Wprowadź kwotę');
	} else {
		axios
			.get(URL + `${valueOption}/`)
			.then((res) => {

				const rate = res.data.rates[0].mid;

				if (valueOption == 'EUR') {
					h1.innerHTML = `to: ${convertCurrency(rate)} PLN`;
				} else if (valueOption == 'USD') {
					h1.innerHTML = `to: ${convertCurrency(rate)} PLN`;
				} else if (valueOption == 'CHF') {
					h1.innerHTML = `to: ${convertCurrency(rate)} PLN`;
				}
			})
			.catch(() => alert('Niestety w tej chwili nie udało nam się pobrać kursu wybranej waluty, spróbuj jeszcze raz.'));
	}
};

document.addEventListener('DOMContentLoaded', main);
