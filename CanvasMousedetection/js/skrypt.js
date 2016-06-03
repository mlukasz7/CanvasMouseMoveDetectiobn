$(function(){
	
	// Canvas
	var canvas = document.getElementById('mycanvas');
	var context = $('#mycanvas')[0].getContext("2d");
	var mouse = {x: 0, y: 0};

	canvas.addEventListener('mousemove', function(e) {
	  mouse.x = e.pageX - this.offsetLeft;
	  mouse.y = e.pageY - this.offsetTop;
	  canvas.addEventListener('mousemove', drawCircle, false);
	}, false);

	context.lineWidth = 5;
	context.lineJoin = 'round';
	context.lineCap = 'round';
	context.strokeStyle = 'blue';

	// canvas.addEventListener('mousedown', function(e) {
	//     context.beginPath();
	//     context.moveTo(mouse.x, mouse.y);
	 
	//     canvas.addEventListener('mousemove', onPaint, false);
	// }, false);
	 
	// canvas.addEventListener('mouseup', function() {
	//     canvas.removeEventListener('mousemove', onPaint, false);
	// }, false);
	 
	var onPaint = function() {
	    context.lineTo(mouse.x, mouse.y);
	    context.stroke();
	};

	var drawCircle = function() {
		context.globalAlpha = 0.2;
		context.beginPath();
		context.rect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'white';
		context.fill();
		context.globalAlpha = 1;
		var radius = 20;
		context.beginPath();
		context.arc(mouse.x, mouse.y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
	}

});