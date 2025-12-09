var boatRectX = 795; //for boat movement//
var boatRectY = 700;
var boatRectX2 = 865;
var boatRectY2 = 580;
var boatOvalX = 870;
var boatOvalY = 740;
var boatLeftX1 = 815;
var boatLeftX2 = 865;
var boatLeftX3 = 865;
var boatLeftY1 = 690;
var boatLeftY2 = 570;
var boatLeftY3 = 695;
var boatRightX1 = 875;
var boatRightX2 = 920;
var boatRightX3 = 875;
var boatRightY1 = 570;
var boatRightY2 = 690;
var boatRightY3 = 695;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var canvasWidth = 1400;
var canvasHeight = 1000;


var snowfallXs = []; //for snow movement//
var snowfallYs = [];
var snowfallWidth = [];

var snowfallXSpeeds = [];
var snowfallYSpeeds = [];


var darkBlueR = 0; //for color changes//
var darkBlueG = 10;
var darkBlueB = 78;

var lightBlueR = 153;
var lightBlueG = 204;
var lightBlueB = 255; 

var snowBlueR = 205;
var snowBlueG = 229;
var snowBlueB = 255;

var lightGreenR = 0;
var lightGreenG = 102;
var lightGreenB = 51;

var darkGreenR = 0;
var darkGreenG = 51;
var darkGreenB = 25;

var waterBlueR = 0;
var waterBlueG = 76;
var waterBlueB = 153;

var textcolor1R = 0;
var textcolor1G = 0;
var textcolor1B = 102;

var textcolor2R = 153;
var textcolor2G = 0;
var textcolor2B = 76;

var reflectionR = 51;
var reflectionG = 153;
var reflectionB = 255;

var reflect1X1 = 690; // for wave motion//
var reflect1X3 = 710;
var reflect1X1direction = 1
var reflect1X3direction = 1

var reflect2X1 = 675;
var reflect2X3 = 725; 
var reflect2X1direction = 1
var reflect2X3direction = 1

var reflect3X1 = 650;
var reflect3X3 = 750; 
var reflect3X1direction = 1
var reflect3X3direction = 1

var reflect4X1 = 615;
var reflect4X3 = 785; 
var reflect4X1direction = 1
var reflect4X3direction = 1



function setup() {
  createCanvas(canvasWidth,canvasHeight);
  for (var i = 0; i < 250; i++)
        {
          snowfallXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          snowfallYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          snowfallXs[i] = getRandomNumber(1400);
          snowfallYs[i] = getRandomNumber(1000);
          snowfallWidth[i] = getRandomNumber(5);
        }
}

function draw() {
background(lightBlueR, lightBlueG, lightBlueB);

noStroke();

drawMountainsUnderLayer();
drawMountainSnow();
drawHills();
drawWater();
drawBoat();
createBoatMovement();
createSnowfall();
createInstructions();

}



function drawMountainsUnderLayer() {

    fill(darkBlueR,darkBlueG,darkBlueB);
    triangle(-200,300,200,100,600,300); //leftmost//
    triangle(300,300,550,180,800,300);
    triangle(450,300,850,40,1000,300);
    triangle(730,300,1050,120,1400,300);
    triangle(870,300,1300,70,1700,300); //rightmost//
    rect(0,300,1400,100);
    
}



function drawMountainSnow() {

    fill(255,255,255); //white left//
    triangle(-200,300,200,100,300,300);
    triangle(450,300,850,40,860,300);
    triangle(730,300,1050,120,1200,300);
  
    fill(snowBlueR,snowBlueG,snowBlueB); //light blue right//
    triangle(300,300,200,100,600,300);
    triangle(857,230,850,40,934,185);
    triangle(1200,300,1050,120,1400,300);
}

function drawHills() {
   
    fill(lightGreenR,lightGreenG,lightGreenB); //furthest hill//
    rect(0,300,1400,200); //underlayer//
    ellipse(1260,310,350,50); //right top//
    ellipse(140,310,350,50);

     fill(snowBlueR,snowBlueG,snowBlueB); //snow continuation//
    triangle(300,300,700,400,1100,300);

    fill(255,255,255); //round snow on mountains at bottom//
    ellipse(846,300,490,30);

    fill(darkGreenR,darkGreenG,darkGreenB);
    triangle(-200,500,0,300,850,500); //left front//
    triangle(550,500,1400,300,1600,500); //right front//


     fill(lightGreenR,lightGreenG,lightGreenB); //middle far hill//
    ellipse(700,385,350,50);

    fill(255,255,255); //snow shoreline//
    rect(0,500,1400,10);

}

function drawWater() {
    
    fill(waterBlueR,waterBlueG,waterBlueB); //water//
    rect(0,510,1400,890);

    fill(reflectionR,reflectionG,reflectionB); //reflection//  //if statements make edge of reflection slightly expand and contract//
    triangle(reflect1X1,515,700,510,reflect1X3,515);
    reflect1X1-=reflect1X1direction * 0.1;
    if(reflect1X1 <= 680 || reflect1X1 >690){
      reflect1X1direction *= -1;
    }
    reflect1X3+=reflect1X3direction * 0.1;
    if(reflect1X3 <= 710 || reflect1X3 >720){
      reflect1X3direction *= -1;
    }

    triangle(reflect2X1,545,700,540,reflect2X3,545);
    reflect2X1-=reflect2X1direction *0.1;
    if(reflect2X1 <= 655 || reflect2X1 >675){
      reflect2X1direction *= -1;
    }
    reflect2X3+=reflect2X3direction*0.1;
    if(reflect2X3 <= 725 || reflect2X3 >745){
      reflect2X3direction *= -1;
    }
    triangle(reflect3X1,600,700,595,reflect3X3,600);
    reflect3X1-=reflect3X1direction*0.2;
    if(reflect3X1 <= 610 || reflect3X1 > 650){
      reflect3X1direction *= -1;
    }
    reflect3X3+=reflect3X3direction*0.2;
    if(reflect3X3 <= 750 || reflect3X3 >790){
      reflect3X3direction *= -1;
    }
    triangle(reflect4X1,670,700,665,reflect4X3,670);
    reflect4X1-=reflect4X1direction*0.3;
    if(reflect4X1 <= 555 || reflect4X1 >615){
      reflect4X1direction *= -1;
    }
    reflect4X3+=reflect4X3direction*0.3;
    if(reflect4X3 <= 785 || reflect4X3 >855){
      reflect4X3direction *= -1;
    }
}

function drawBoat() {

  fill(102,51,0);
  rect(boatRectX,boatRectY,150,40); //body//
  ellipse(boatOvalX,boatOvalY,150,20); //bottom//
  rect(boatRectX2,boatRectY2,10,120); //mast//
  
  fill(255,255,255);
  triangle(boatRightX1,boatRightY1,boatRightX2,boatRightY2,boatRightX3,boatRightY3);
  triangle(boatLeftX1,boatLeftY1,boatLeftX2,boatLeftY2,boatLeftX3,boatLeftY3);
}

function createBoatMovement() //inbetween if statements keep boat in water//
{
if(keyIsDown(w)|| keyIsDown(38))
{
  boatRectY -= 10;
  if (boatRectY <= 500){
    boatRectY += 10;}

  boatRectY2 -= 10;
  if (boatRectY2 <= 395){
    boatRectY2 += 10;}
  
    boatOvalY -= 10;
  if (boatOvalY <= 540){
    boatOvalY += 10;}
 
    boatRightY1 -= 10;
  if (boatRightY1 <= 385){
    boatRightY1 += 10;}
  
    boatRightY2 -= 10;
  if (boatRightY2 <= 490){
    boatRightY2 += 10;}

  boatRightY3 -= 10;
  if (boatRightY3 <= 500){
    boatRightY3 += 10;}

  boatLeftY1 -= 10;
  if (boatLeftY1 <= 490){
    boatLeftY1 += 10;}

  boatLeftY2 -= 10;
  if (boatLeftY2 <= 385){
    boatLeftY2 += 10;}

  boatLeftY3 -= 10;
  if (boatLeftY3 <= 500){
    boatLeftY3 += 10;}

}
if(keyIsDown(s) || keyIsDown(40))
{
  boatRectY += 10;
  if (boatRectY >= 960){
    boatRectY -= 10;}

  boatRectY2 += 10;
  if (boatRectY2 >= 840){
    boatRectY2 -= 10}

  boatOvalY += 10;
  if (boatOvalY >= 1000){
    boatOvalY -= 10;}

  boatRightY1 += 10;
  if (boatRightY1 >= 830){
    boatRightY1 -= 10;}

  boatRightY2 += 10;
  if (boatRightY2 >= 950){
    boatRightY2 -= 10;}

  boatRightY3 += 10;
  if (boatRightY3 >= 955){
    boatRightY3 -= 10;}

  boatLeftY1 += 10;
  if (boatLeftY1 >= 950){
    boatLeftY1 -= 10;}

  boatLeftY2 += 10;
  if (boatLeftY2 >= 830){
    boatLeftY2 -= 10;
  }
  boatLeftY3 += 10;
  if (boatLeftY3 >= 955){
    boatLeftY3 -= 10;}
}
if(keyIsDown(a)|| keyIsDown(37))
{
  boatRectX -= 10;
  if (boatRectX <= 0){
    boatRectX += 10;}

  boatRectX2 -= 10;
  if (boatRectX2 <= 70){
    boatRectX2 += 10;}

  boatOvalX -= 10;
  if (boatOvalX <= 70){
    boatOvalX += 10;}
  
  boatRightX1 -= 10;
  if (boatRightX1 <= 80){
    boatRightX1 += 10;}

  boatRightX2 -= 10;
   if (boatRightX2 <= 125){
    boatRightX2 += 10;}
 
    boatRightX3 -= 10;
  if (boatRightX3 <= 80){
    boatRightX3 += 10;}
  boatLeftX1 -= 10;
  if (boatLeftX1 <= 15){
    boatLeftX1 += 10;}

  boatLeftX2 -= 10;
   if (boatLeftX2 <= 65){
    boatLeftX2 += 10;}
    
  boatLeftX3 -= 10;
   if (boatLeftX3 <= 65){
    boatLeftX3 += 10;}
    
}
if(keyIsDown(d) || keyIsDown(39))
{
  boatRectX += 10;
  if (boatRectX >= 1250){
    boatRectX -= 10;}

  boatRectX2 += 10;
  if (boatRectX2 >= 1320){
    boatRectX2 -= 10;}

  boatOvalX += 10;
  if (boatOvalX >= 1330){
    boatOvalX -= 10;}

  boatRightX1 += 10;
  if (boatRightX1 >= 1335){
    boatRightX1 -= 10;}

  boatRightX2 += 10;
  if (boatRightX2 >= 1380){
    boatRightX2 -= 10;}

  boatRightX3 += 10;
  if (boatRightX3 >= 1335){
    boatRightX3 -= 10;}

  boatLeftX1 += 10;
  if (boatLeftX1 >= 1275){
    boatLeftX1 -= 10;}
  
  boatLeftX2 += 10;
   if (boatLeftX2 >= 1320){
    boatLeftX2 -= 10;}
    
  boatLeftX3 += 10;
  if (boatLeftX3 >= 1320){
    boatLeftX3 -= 10;}
}
}




function createSnowfall()
{
for (var i = 0; i <snowfallXs.length; i++){
fill(255,255,255);
circle(snowfallXs[i],snowfallYs[i],snowfallWidth[i]);
snowfallXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
snowfallYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


snowfallXs[i] += snowfallXSpeeds[i]; 
snowfallYs[i] += snowfallYSpeeds[i];

if(snowfallXs[i] > canvasWidth) 
{
  snowfallXs[i] = 0;
}
if (snowfallXs[i] < 0)
{
  snowfallXs[i] = canvasWidth;
}

if(snowfallYs[i] > canvasHeight)
{
  snowfallYs[i] = 0;
}
if (snowfallYs[i] < 0)
{
  snowfallYs[i] = canvasHeight;
}

}
}



function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function createInstructions() { //top text//
  if (snowBlueR == 205) {fill(textcolor1R,textcolor1G,textcolor1B);}
  else if (snowBlueR == 255){fill(textcolor2R,textcolor2G,textcolor2B);}
  textSize (15);
  text("Use WASD or Arrow Keys to move boat",2,15);
  text("Click to change season",2,30);
  text("Double click to reset season",2,45);
  
}

function mouseClicked(){ //change colors//
 
  darkBlueR = 102;
  darkBlueG = 0;
  darkBlueB = 0;

  lightBlueR = 255;
  lightBlueG = 255;
  lightBlueB = 102;

  snowBlueR = 255;
  snowBlueG = 220;
  snowBlueB = 255;

  lightGreenR = 255;
  lightGreenG = 128;
  lightGreenB = 0;

  darkGreenR = 204;
  darkGreenG = 102;
  darkGreenB = 0;

  waterBlueR = 245;
  waterBlueG = 189;
  waterBlueB = 0;

  reflectionR = 255;
  reflectionG = 255;
  reflectionB = 0;
 
}

function doubleClicked (){ //revert colors//
darkBlueR = 0; 
darkBlueG = 10;
darkBlueB = 78;

lightBlueR = 153;
lightBlueG = 204;
lightBlueB = 255; 

snowBlueR = 205;
snowBlueG = 229;
snowBlueB = 255;

lightGreenR = 0;
lightGreenG = 102;
lightGreenB = 51;

darkGreenR = 0;
darkGreenG = 51;
darkGreenB = 25;

waterBlueR = 0;
waterBlueG = 76;
waterBlueB = 153;

reflectionR = 51;
reflectionG = 153;
reflectionB = 255;

}




