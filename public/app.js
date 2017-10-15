// Connect with server
const socket = io('http://localhost:8080');

const body = document.querySelector('body');

function updateBodyColor(color) {
		body.style.backgroundColor = color;
}

document.addEventListener('click', (event) => {
	let color = event.target.getAttribute('data-color');
	if(color){
		// emits the colorUpdate event
		console.log('Color is', color);
		socket.emit('updateColor', { 'color': color});
		console.log('Message sent through websockets');
		updateBodyColor(color);
		return;		
	}
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.style.backgroundColor = button.getAttribute('data-color');
});

socket.on('updateColor', (data) => {
	console.log('From server', data);
	updateBodyColor(data.color);
})

