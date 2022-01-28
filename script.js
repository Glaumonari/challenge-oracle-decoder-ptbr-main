var input = document.querySelector('#entrada');
var output = document.querySelector('#saida');

input.addEventListener('keypress', function (e) {
	if (!checkText(e)) {
		e.preventDefault();
	}
});
function checkText(e) {
	var char = String.fromCharCode(e.keyCode);
	var pattern = '[a-zA-Z0-9]';
	if (char.match(pattern)) {
		return true;
	}
}

function criptografar() {
	output.value = input.value
		.toLowerCase()
		.replaceAll('e', 'enter')
		.replaceAll('i', 'imes')
		.replaceAll('a', 'ai')
		.replaceAll('o', 'ober')
		.replaceAll('u', 'ufat');

	input.value = '';
}

function descriptografar() {
	output.value = input.value
		.toLowerCase()
		.replaceAll('enter', 'e')
		.replaceAll('imes', 'i')
		.replaceAll('ai', 'a')
		.replaceAll('ober', 'o')
		.replaceAll('ufat', 'u');

	input.value = '';
}

function copiarTexto() {
	navigator.clipboard.writeText(output.value);
	output.value = '';
}
