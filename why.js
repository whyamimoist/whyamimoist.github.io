var reasons - [
	'foo',
	'bar',
	'baz'
]

function getReason() {
	var randomNumber = Math.floor(Math.random() * (reasons.length));
	document.getElementById('reasonDisplay').innerHTML = reasons[randomNumber];
}
