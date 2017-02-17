	  var stage = new Kinetic.Stage({
        container: 'container',
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });

      var layer = new Kinetic.Layer();
	  
	  for (let i=0; i<=30; i++) {
		console.time('test');  
	  
	  var rect = new Kinetic.Rect({
        x: i*5+5,
        y: i*55,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 2
      });

      // // add the shape to the layer
       layer.add(rect);

      // add the layer to the stage
      stage.add(layer);
console.timeEnd('test');	 
} 