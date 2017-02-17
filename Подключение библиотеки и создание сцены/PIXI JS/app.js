for (let i=0; i<=30; i++) {
console.time('test');

var app = new PIXI.Application(document.documentElement.clientWidth, document.documentElement.clientHeight, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

    console.timeEnd('test');
}