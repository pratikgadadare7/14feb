const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'mansi';
const nextPageUrl = 'main.html'; 

form.addEventListener('mansi', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; 
	} else {
		resultDiv.innerHTML = 'Nahi tu majhi mansi nahiyes....!!';
	}
});