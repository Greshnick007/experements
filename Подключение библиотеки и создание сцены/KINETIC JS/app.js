	  for (let i=0; i<=30; i++) {
		console.time('test');  

	  var stage = new Kinetic.Stage({
        container: 'container',
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });

      var layer = new Kinetic.Layer();
	  


      // add the layer to the stage
      stage.add(layer);
console.timeEnd('test');	 
} 