var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

//line width
context.lineWidth = radius*2;


//putPoint function
function putPoint(e) {
	if (dragging) {
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fillStyle = 'black';
		context.fill();	
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}

}


//disengage function
function disengage() {

	dragging = false;
	context.beginPath();
}

//engage function
function engage(e) {
	dragging = true;
	putPoint(e);
}

//clear canvas
function clear() {
	context.clearRect(0, 0, 1200, 600);
}

//adding event listeners
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);


	




