let app = new PIXI.Application(document.documentElement.clientWidth, document.documentElement.clientHeight, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

for (let i=0; i<=30; i++) {
console.time('test');

    var graphics = new PIXI.Graphics();
// set a fill and a line style again and draw a rectangle
 graphics.lineStyle(5, 0x0000FF, 1);
graphics.beginFill(0xFF700B, 1);
graphics.drawRect(i*35+15, 15, 20, 20);

app.stage.addChild(graphics);

    console.timeEnd('test');
}