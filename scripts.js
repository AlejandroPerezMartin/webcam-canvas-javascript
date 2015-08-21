
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

// draw square
ctx.fillRect(25, 25, 25, 25);

// draw lines
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(250, 100);
ctx.lineTo(75, 250);
ctx.strokeStyle = "#ff0000";
ctx.stroke();
