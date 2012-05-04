<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JavascriptEvent and position</title>
</head>
<body>
<div style="padding:100px;">
<canvas style="position: relative;border: 2px solid #ccc" width="200" height="200" onmousemove="handleMouseEvent(event);"></canvas>
</div>
<p id="info"></p>
<script type="text/javascript">
function handleMouseEvent(event)
{
    var mouseX, mouseY;

    if (event && false)
    {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    else if(event.offsetX) {
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    }
    else if(event.layerX) {
        mouseX = event.layerX;
        mouseY = event.layerY;
    }
    document.getElementById("info").innerHTML = "X: " + mouseX + ", Y: " + mouseY + "<br />" + event	;
}
</script>
</body>
</html>