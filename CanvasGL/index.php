<!DOCTYPE HTML>
<html>
<body onLoad="start();">
	<div id="info"></div>
	<canvas id="glcanvas" width="640" height="480">
		Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.  
	</canvas>
	<script type="text/javascript">
	function start() {  
		  var canvas = document.getElementById("glcanvas", {antialias:true});  
		  
		  initWebGL(canvas);      // Initialize the GL context  
		    
		  // Only continue if WebGL is available and working  
		    
		  if (gl) {  
		    gl.clearColor(0.0, 0.0, 0.0, 0.5);                      // Set clear color to black, fully opaque  
		    gl.enable(gl.DEPTH_TEST);                               // Enable depth testing  
		    gl.depthFunc(gl.LEQUAL);                                // Near things obscure far things  
		    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Clear the color as well as the depth buffer.
		  }  
		}
	function initWebGL(canvas) {  
		  // Initialize the global variable gl to null.  
		  gl = null;  
		    
		  try {  
		    // Try to grab the standard context. If it fails, fallback to experimental.  
		    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");  
		  }  
		  catch(e) {}  
		    
		  // If we don't have a GL context, give up now  
		  if (!gl) {  
		    alert("Unable to initialize WebGL. Your browser may not support it.");  
		  }  
		}    
	</script>
</body>
</html>
