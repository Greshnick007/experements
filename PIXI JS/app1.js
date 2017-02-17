/* var app = new PIXI.Application(document.documentElement.clientWidth, document.documentElement.clientHeight, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var graphics = new PIXI.Graphics();

for (let i=0; i<=15; i++) {

// set a fill and a line style again and draw a rectangle
graphics.lineStyle(2, 0x0000FF, 1);
graphics.beginFill(0xFF700B, 1);
graphics.drawRect(i*100, i*100, 50, 120);

app.stage.addChild(graphics);


}

 */

/* for (let i=0; i<=15; i++) {
console.time('test');

var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;

var zombieTexture = PIXI.Texture.fromImage('https://raw.githubusercontent.com/sethvincent/hogjam4/gh-pages/images/menu-image/05.png'); 
var zombie = new PIXI.Sprite(zombieTexture);

zombie.position.x = window.innerWidth / 2 - 150;
zombie.position.y = window.innerHeight / 2 - 150;

stage.addChild(zombie);

function draw() { renderer.render(stage); requestAnimationFrame(draw); }

draw(); 

console.timeEnd('test');
} */

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
var app = new PIXI.Application(), speed = 0;


// The application will create a canvas element for you that you 
// can then insert into the DOM.
document.body.appendChild(app.view);



// load the texture we need
PIXI.loader.add('bunny', 'Car.png').load(function(loader, resources) {

    // This creates a texture from a 'bunny.png' image.
    var bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building.
    app.stage.addChild(bunny);

    // Listen for frame updates
    app.ticker.add(function() {
         // each frame we spin the bunny around a bit
			bunny.rotation += speed; 
    });
});