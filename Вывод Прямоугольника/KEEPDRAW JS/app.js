   var stage = new KeepDraw.Stage({
	width: innerWidth,
	height: innerHeight,
	canvas: 'container',
	fill: '#00afff'
	});

	
	for (let i=0; i<=30; i++) {   
	console.time('test');
	
    var rect = new KeepDraw.Rect({
    x: i*35+15,
    y: 5,
    width: 20,
    height: 20,
    color: '#CCC',
    stage: stage
    });
	
	console.timeEnd('test');
	}
	