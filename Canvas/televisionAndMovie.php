<!DOCTYPE HTML>
<html>
<script type="text/javascript" src="televisionAndMovie.js">
</script>
<body>
<script type="text/javascript">
window.onload = function (){initTelevisionAndMovie();};
</script>
	<div id="info"></div>
	<canvas id="canvas" height="400" width="600" 
	style="outline:#cccccc dotted medium; position: absolute; top: 0; left:0; right: 0; bottom:0;"></canvas>
	<video id="video" style="position: absolute; top: 7px; left:12px;" width="345" height="205" controls="controls">
		<source src="movies/test_canvas_clip.mp4"></source>
	</video>
</body>
</html>
