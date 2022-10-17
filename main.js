const btnChange = document.querySelector('.btn-change');
const h1 = document.querySelector('.converter');
const inputCash = document.querySelector('.input-cash');
const option = document.getElementById('currency');

const main = () => {
	btnChange.addEventListener('click', converter);
};

const URL = 'https://api.nbp.pl/api/exchangerates/rates/a/';

const calc = (i) => {
	const num = inputCash.value * i;
	return num.toFixed(2);
};

const converter = () => {
	const valueNum = inputCash.value;
	const valueOption = option.value;

	if (valueNum <= 0 || valueNum == '') {
		alert('Wprowadź kwotę');
	} else {
		axios
			.get(URL + `${valueOption}/`)
			.then((res) => {
				const eur = res.data.rates[0].mid;
				const usd = res.data.rates[0].mid;
				const chf = res.data.rates[0].mid;

				if (valueOption == 'EUR') {
					h1.innerHTML = `to: ${calc(eur)} PLN`;
				} else if (valueOption == 'USD') {
					h1.innerHTML = `to: ${calc(usd)} PLN`;
				} else if (valueOption == 'CHF') {
					h1.innerHTML = `to: ${calc(chf)} PLN`;
				}
			})
			.catch(() => alert('Wprowadź kwotę'));
	}
};

document.addEventListener('DOMContentLoaded', main);
