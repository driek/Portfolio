var canvas, ctx, video, television = new Image, ipad = new Image, timeOut;

function initTelevisionAndMovie()
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	video = document.getElementById("video");
	television.onload = loadTelevision;
	television.src = "images/television.jpeg";
	ipad.onload = function(){ctx.drawImage(ipad, 400, 100, 200, 160); };
	ipad.src = "images/ipad.jpeg";
	video.addEventListener('play', function(){
        startAnimation();
    },false);
}

function loadTelevision()
{
	ctx.drawImage(television, 0, 0);
}

function startAnimation()
{
	if (video.paused || video.ended) return false;
	loadTelevision();
	loadVideoOnIPad();
	timeOut = setTimeout(startAnimation, 20);
}

function loadVideoOnIPad()
{
	ctx.drawImage(video, 423, 123, 154, 102);
}