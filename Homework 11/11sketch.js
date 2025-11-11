var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var canvasWidth = 900
var canvasHeight = 1100

var firstObstacleX = 300
var firstObstacleY = 500
var firstObstacleXSpeed;
var firstObstacleYSpeed;

var secondObstacleX = 700
var secondObstacleY = 800
var secondObstacleXSpeed;
var secondObstacleYSpeed;

var mouseClickObstacleX;
var mouseClickObstacleY;





function setup() {
  createCanvas(canvasWidth,canvasHeight);
  firstObstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  firstObstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  secondObstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  secondObstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}

function draw() {
background(255, 236, 236);
noStroke();



fill(255,103,204);
textSize(30);
text("EXIT", canvasWidth-100, canvasHeight-140);

fill(153,153,255); //establish character//
circle(characterX,characterY,30);

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

fill(255,102,102); //establish obstacle 1//
rect(firstObstacleX,firstObstacleY,60,60);

fill(255,178,102); //establish obstacle 2//
rect(secondObstacleX,secondObstacleY,40,40);

fill(255,255,51); //establish click obstacle//
rect(mouseClickObstacleX,mouseClickObstacleY,90,90);

fill(255,103,204); //establish border//
rect(0,0,canvasWidth,20);
rect(0,0,20,canvasHeight);
rect(0,canvasHeight-20,canvasWidth,20);
rect(canvasWidth-20,0,20,canvasHeight-130);



firstObstacleX += firstObstacleXSpeed; //first obstacle movement//
firstObstacleY += firstObstacleYSpeed;

if(firstObstacleX > canvasWidth) //first obstacle appear on other side x//
{
  firstObstacleX = 0;
}
if (firstObstacleX < 0)
{
  firstObstacleX = canvasWidth;
}

if(firstObstacleY > canvasHeight) //first obstacle appear on other side y//
{
  firstObstacleY = 0;
}
if (firstObstacleY < 0)
{
  firstObstacleY = canvasHeight;
}


secondObstacleX += secondObstacleXSpeed; //second obstacle movement//
secondObstacleY += secondObstacleYSpeed;

if(secondObstacleX > canvasWidth) //second obstacle appear on other side x//
{
  secondObstacleX = 0;
}
if (secondObstacleX < 0)
{
  secondObstacleX = canvasWidth;
}

if(secondObstacleY > canvasHeight) //second obstacle appear on other side y//
{
  secondObstacleY = 0;
}
if (secondObstacleY < 0)
{
  secondObstacleY = canvasHeight;
}

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
function mouseClicked()
{
mouseClickObstacleX = mouseX;
mouseClickObstacleY = mouseY;
}