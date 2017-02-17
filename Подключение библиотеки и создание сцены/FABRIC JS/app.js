for (let i=0; i<=30; i++)
{
console.time('test');

var canvas = new fabric.Canvas('content', {backgroundColor : '#CCC'});

canvas.setHeight(document.documentElement.clientHeight);
canvas.setWidth(document.documentElement.clientWidth);

canvas.selection = false; // выключаем выделение
canvas.hoverCursor = ' default';


console.timeEnd('test');
}