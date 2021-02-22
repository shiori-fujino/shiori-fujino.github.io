var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("sitetitle"));
const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;
var hearts = [];
function generateHeart(x, y, xBound, xStart, scale)
{
   var heart = document.createElement("DIV");
   heart.setAttribute('class', 'heart');
   brd.appendChild(heart);
   heart.time = duration;
   heart.x = x;
   heart.y = y;
   heart.bound = xBound;
   heart.direction = xStart;
   heart.style.left = heart.x + "px";
   heart.style.top = heart.y + "px";
   heart.scale = scale;
   heart.style.transform = "scale(" + scale + "," + scale + ")";
   if(hearts == null)
    hearts = [];
   hearts.push(heart);
   return heart;
}
generateHeart(250, 250, null, null, 1);
