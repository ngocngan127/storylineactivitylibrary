function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rB6NOrwIwJ":
        Script1();
        break;
      case "6U1nI8TSVxJ":
        Script2();
        break;
      case "5vsz1a2PYlC":
        Script3();
        break;
      case "5ZpcNJORUdH":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6FubeaZXUcR');
const duration = 1000;
const easing = 'linear';
const id = '5VnhnV7TrlR';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5hlBt7UIgSN');
const duration = 1000;
const easing = 'linear';
const id = '6iUZpui8jY6';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5cC9xjNrNoU');
const duration = 1000;
const easing = 'linear';
const id = '5YAA8Y1Mv96';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
