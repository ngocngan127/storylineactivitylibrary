window.InitUserScripts = function()
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
window.Script4 = function()
{
  var mySliderVar = 'VerticalSlider';        // Storyline slider variable (0 → 1)
var elementAccText = 'MyLayer+y';  // +y = vertical reveal

var storyline = GetPlayer();
var mySliderValue = storyline.GetVar(mySliderVar);

// Get cropped element
var cropElement = document.querySelector(
  "[data-acc-text='" + elementAccText + "']"
);
var cropElementChild = cropElement.children[0];

// Get original height
var originalHeight = parseFloat(cropElement.style.height);

// Ensure hidden first
cropElementChild.style.overflow = "hidden";

// 🔹 Reveal from TOP → BOTTOM
cropElementChild.style.height = (originalHeight * mySliderValue) + "px";

}

};
