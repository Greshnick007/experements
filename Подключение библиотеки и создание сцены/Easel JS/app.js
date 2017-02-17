	for (let i=0; i<=30; i++) {   
	console.time('test');
	
	stage = new createjs.Stage("container");
	stage.canvas.height = window.innerHeight; 
	stage.canvas.width = window.innerWidth; 
	
	stage.update();
	
	console.timeEnd('test');	
	}
	
	