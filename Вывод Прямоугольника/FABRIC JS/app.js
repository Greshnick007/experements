var canvas = new fabric.Canvas('content', {backgroundColor : '#CCC'});

canvas.setHeight(document.documentElement.clientHeight);
canvas.setWidth(document.documentElement.clientWidth);

canvas.selection = false; // выключаем выделение
canvas.hoverCursor = ' default';


for (let i=0; i<=30; i++)
{
console.time('test');
// // создаём прямоугольник с углом в 45 градусов
var rect = new fabric.Rect({
  left: i*25,
  top: 5,
  fill: 'red',
  width: 20,
  height: 20
});

 rect.set('selectable', false); // делаем объект невыделяемым

 canvas.add(rect);

console.timeEnd('test');
}