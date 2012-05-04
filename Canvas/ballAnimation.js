// 2D drawing Context
var ctx;
// Create a canvas and a context for the gradient
var grC, grCtx;
// Ball variables
var bX = 20, bY = 20, bR = 20;
// Canvas height and width. Also the movement/velocity on the X- and Y-axis
var cH = 300, cW = 500, bMX = 2, bMY = 4;

// TimeOut object that contains the ball animation
var timeOut;

function drawBall(ctx, x, y, radius)
{
	ctx.drawImage(grC, x-radius, y-radius, radius*2, radius*2);
	/*
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,radius,0,Math.PI*2);
	ctx.closePath();
	ctx.fill();
	*/
}
function init()
{
	var canvas = document.getElementById("canvas");
	//canvas.height = window.innerHeight;
	//canvas.width = window.innerWidth;
	cH = canvas.height;
	cW = canvas.width;
	ctx = canvas.getContext("2d");
	grC = document.createElement("canvas");
	grCtx = grC.getContext("2d");
	createGradientBall();
	drawBall(ctx, bX, bY, bR);
	animateBall();
}

function createGradientBall()
{
	grC.width = 100;
	grC.height = 100;
	grCtx.save();
	var grd=grCtx.createRadialGradient(20,30,5,50,50,50);
	grCtx.beginPath;
	grCtx.arc(50, 50, 50, 0, Math.PI*2);
	grCtx.closePath();
	grCtx.clip();
	grd.addColorStop(0,"white");
	grd.addColorStop(1,"red");
	grCtx.fillStyle=grd;
	grCtx.fillRect(0,0,100,100);
	grCtx.restore();
}

function animateBall()
{
	//drawBall(ctx, bX, bY, bR, "white");
	bX+=bMX;
	bY+=bMY;
	if ((bX+bR >= cW) || (bX-bR<=0))
	{
		bMX*=-1;
	}
	if ((bY+bR >= cH) || (bY-bR<=0))
	{
		bMY*=-1;
	}
	ctx.clearRect(0, 0, cW, cH);
	drawBall(ctx, bX, bY, bR);
	timeOut = setTimeout(animateBall, 20);
}