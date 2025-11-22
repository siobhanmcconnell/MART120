var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var canvasWidth = 900
var canvasHeight = 1100

var obstacleXs = [];
var obstacleYs = [];
var obstacleWidth = [];

var obstacleXSpeeds = [];
var obstacleYSpeeds = [];


var mouseClickObstacleX;
var mouseClickObstacleY;

var i = 0

var randomColor = [];




function setup() {
  createCanvas(canvasWidth,canvasHeight);
      for (var i = 0; i < 7; i++)
        {
          obstacleXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          obstacleYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          obstacleXs[i] = getRandomNumber(900);
          obstacleYs[i] = getRandomNumber(1100);
          obstacleWidth[i] = getRandomNumber(150);
          randomColor[i] = color(random(255),random(255),random(255));
      }
  
  
}


function draw() {
background(255, 236, 236);
noStroke();

createCharacter();

createKeyboardMovement();

createObstacles();

createBorders();

createExit();

createMessage();

}

function mouseClicked()
{
mouseClickObstacleX = mouseX;
mouseClickObstacleY = mouseY;
}


function createCharacter()
{
fill(153,153,255); //establish character//
circle(characterX,characterY,30);
}

function createKeyboardMovement()
{
if(keyIsDown(w))
{
  characterY -= 10;
}
if(keyIsDown(s))
{
  characterY += 10;   
}
if(keyIsDown(a))
{
  characterX -= 10;
}
if(keyIsDown(d))
{
  characterX += 10;
}
}

function createObstacles()
{
//establish obstacles//
for (var i = 0; i <obstacleXs.length; i++){
fill(randomColor[i])
rect(obstacleXs[i],obstacleYs[i],obstacleWidth[i],obstacleWidth[i]);
obstacleXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
obstacleYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);


obstacleXs[i] += obstacleXSpeeds[i]; //first obstacle movement//
obstacleYs[i] += obstacleYSpeeds[i];

if(obstacleXs[i] > canvasWidth) //first obstacle appear on other side x//
{
  obstacleXs[i] = 0;
}
if (obstacleXs[i] < 0)
{
  obstacleXs[i] = canvasWidth;
}

if(obstacleYs[i] > canvasHeight) //first obstacle appear on other side y//
{
  obstacleYs[i] = 0;
}
if (obstacleYs[i] < 0)
{
  obstacleYs[i] = canvasHeight;
}

}

fill(255,255,51); //establish click obstacle//
rect(mouseClickObstacleX,mouseClickObstacleY,90,90);
}



function createBorders()
{
fill(255,103,204); //establish border//
rect(0,0,canvasWidth,20);
rect(0,0,20,canvasHeight);
rect(0,canvasHeight-20,canvasWidth,20);
rect(canvasWidth-20,0,20,canvasHeight-130);
}

function createExit()
{
fill(255,103,204);
textSize(30);
text("EXIT", canvasWidth-100, canvasHeight-140);
}

function createMessage()
{
if(characterX > canvasWidth-10 && characterY > canvasHeight-130) //exit check//
{
  textSize(60);
  text("You Did It!", canvasWidth/2-120,canvasHeight/2-170);
}
else{
  textSize(20);
  text("(Use WASD to move)",canvasWidth/2-70,canvasHeight/2-490);
}
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
