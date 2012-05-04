var cCanvas, clockCtx, clockCWidth, clockCHeight, clockDate;

function initClock()
{
	cCanvas = document.getElementById("clockCanvas");
	clockCtx = cCanvas.getContext("2d");
	clockCWidth = cCanvas.width;
	clockCHeight = cCanvas.height;
	clockCenter = clockCWidth/2;
	drawClock();
}

/**
 * Draw the clock. (this function calls more functions)
 */
function drawClock()
{
	clockCtx.clearRect(0,0,clockCWidth, clockCHeight);
	drawClockOutline();
	drawNumbers();
	drawHands();
	setTimeout(drawClock, 20);
}

/**
 * Draw the clock outline/background.
 */
function drawClockOutline()
{
	clockCtx.beginPath();
	var grd=clockCtx.createRadialGradient(clockCenter, clockCenter,5, clockCenter, clockCenter,100);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"black");
	clockCtx.fillStyle = grd;
	clockCtx.arc(clockCenter, clockCenter, clockCWidth/2-2, 0, 2*Math.PI);
	clockCtx.fill();
	clockCtx.fillStyle="black";
	clockCtx.stroke();
}

/**
 * Draw the hands of the clock
 */
function drawHands()
{
	clockCtx.save();
	clockDate = new Date();
	var radius = clockCWidth/2-15;
	var cSeconds = clockDate.getSeconds();
	clockCtx.lineWidth = 3;
	drawHand(cSeconds, radius);
	var cMinutes = clockDate.getMinutes();
	radius -= 20;
	clockCtx.strokeStyle = "blue";
	drawHand(cMinutes, radius);
	var cHours = clockDate.getHours();
	radius -= 10;
	clockCtx.strokeStyle = "red";
	drawHand(cHours*5, radius);
	clockCtx.restore();
}

/**
 * Draw a hand of the clock
 * @param number; second or minute. 1/60 of a full circle
 * @param radius; Radius of the hand.
 */
function drawHand(number, radius)
{
	clockCtx.beginPath();
	clockCtx.moveTo(clockCenter, clockCenter);
	var hX = Math.cos(Math.PI/30*number-Math.PI/2)*radius + clockCenter;
	var hY = Math.sin(Math.PI/30*number-Math.PI/2)*radius + clockCenter;
	clockCtx.lineTo(hX, hY);
	clockCtx.stroke();	
}

/**
 * Draw the numbers on the clock.
 */
function drawNumbers()
{
	clockCtx.fillStyle="white";
	clockCtx.font="20px Arial";
	var nX, nY, radius = (clockCWidth/2)-15;
	var nXOffset = -6, nYOffset = 7;
	for (var i = 0; i < 12; i++)
	{
		nX = Math.cos(Math.PI/6*i-Math.PI/3)*radius + clockCenter + nXOffset;
		nY = Math.sin(Math.PI/6*i-Math.PI/3)*radius + clockCenter + nYOffset;
		clockCtx.fillText(i+1, nX, nY, 500);
	}
}