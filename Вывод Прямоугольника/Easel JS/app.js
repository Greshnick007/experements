	stage = new createjs.Stage("container");
	stage.canvas.height = window.innerHeight; 
	stage.canvas.width = window.innerWidth; 
	for (let i=0; i<=30; i++) {   
	console.time('test');

    // circle = new createjs.Shape();
	
    // circle.graphics.beginFill("red").drawCircle(0, 0, 20);
	
	// circle.x = i*40+20;
	// circle.y = 25;

	var rect = new createjs.Shape();
	rect.graphics.beginFill("#ff0000").drawRect(i*45, 5, 40, 40);
    stage.addChild(rect);
	
	console.timeEnd('test');	
	}
	
	stage.update();