var leftEyeX= 400;
var leftEyeDirection = 1;
var rightEyeX= 500;
var rightEyeDirection = 1;

var leftEyebrowY1 = 370;
var leftEyebrowY2 = 370;
var leftEyebrowLine2Y1 = 370;
var leftEyebrowLine2Y2= 380;
var leftEyebrowDirection = 1
var leftEyebrow2Direction = 1
var leftEyebrowLine2Direction = 1
var leftEyebrowLine2Direction2 = 1

var rightEyebrowY1 = 370;
var rightEyebrowY2 = 370;
var rightEyebrowLine2Y1 = 370;
var rightEyebrowLine2Y2= 380;
var rightEyebrowDirection = 1
var rightEyebrow2Direction = 1
var rightEyebrowLine2Direction = 1
var rightEyebrowLine2Direction2 = 1

var leftHairX = 320
var leftHairY = 370
var leftHairDirection1 = 1
var leftHairDirection2 = 1

var size = 45
var count = 0
var sizeDirection = 1

function setup() {
  createCanvas(900,1100);
  leftEyeMovement = floor(random() * 10) +1;
  rightEyeMovement = floor(random() * 10) +1;
  leftEyebrowMovement = floor(random() * 10) +1;
  rightEyebrowMovement = floor(random() * 10) +1;
  leftHairMovement = floor(random() * 10) +1;
}

function draw() {
background(255, 236, 236);

noStroke(); //left top hair circle//
fill(185,112,48);
circle(leftHairX,leftHairY,450);
leftHairX+=leftHairDirection1;
if(leftHairX >= 335 || leftHairX <= 305)
  {leftHairDirection1 *= -1;
    leftHairMovement *= -1;
  }
leftHairX += leftHairMovement;
leftHairY+=leftHairDirection2;
if(leftHairY >= 385 || leftHairY <= 355)
{leftHairDirection2 *= -1;}
leftHairY += leftHairMovement;

circle(600,380,400);//rest of hair//
circle(250,590,380); 
circle(650,580,380);
circle(300,850,600);
circle(590,850,600);

fill(255,245,238); //head//
rect(200,300,500,400);
circle(175,450,100);
circle(720,450,100);
triangle(430,305,450,275,470,305);

fill(185,112,48); //hair part//
circle(435,280,40);
circle(470,280,40);

fill(255,193,181); //nose//
triangle(425,530,450,480,475,530);

fill(255,215,0); //body/clothing//
rect(330,700,240,45);
rect(280,745,340,360);
triangle(200,1100,280,745,330,1100);
triangle(620,1100,620,745,670,1100);
circle(170,480,20);
circle(725,480,20);

fill(255,255,255); //eyes white//
ellipse(390,435,100,120);
ellipse(510,435,100,120);

fill(34,139,34); //eyes//
circle(leftEyeX,450,35);
leftEyeX+=leftEyeDirection;
if(leftEyeX >= 420 || leftEyeX <= 360)
{
  leftEyeDirection *= -1;
  leftEyeMovement *= -1;
}
leftEyeX += leftEyeMovement;

circle(rightEyeX,450,35);
rightEyeX+=rightEyeDirection;
if(rightEyeX >= 540 || rightEyeX <= 480)
{
  rightEyeDirection *= -1;
  rightEyeMovement *=-1;
}
rightEyeX += rightEyeMovement;

fill(255,245,238); //hide overlap//
rect(340,370,100,30);
rect(460,370,100,30);

fill(255,193,181); //eyelids//
rect(340,418,100,30);
ellipse(390,415,100,50);
rect(460,418,100,30);
ellipse(510,415,100,50);
square(340,390,50);
square(510,390,50);

stroke(185,112,48); //freckles//
strokeWeight(4);
point(370,530);
point(320,517);
point(286,536);
point(525,530);
point(570,517);
point(616,536);

line(350,leftEyebrowY1,420,leftEyebrowY2); //left eyebrow long line//
leftEyebrowY1+=leftEyebrowDirection;
leftEyebrowY2+=leftEyebrow2Direction;
if(leftEyebrowY1 >= 385 || leftEyebrowY1 <= 350)
{leftEyebrowDirection *=-1;
  leftEyebrowMovement *=-1;
}
leftEyebrowY1 += leftEyebrowMovement;

if(leftEyebrowY2 >= 385 || leftEyebrowY2 <= 350)
{leftEyebrow2Direction *=-1;}
leftEyebrowY2 += leftEyebrowMovement

line(350,leftEyebrowLine2Y1,335,leftEyebrowLine2Y2); //left eyebrow short line//
leftEyebrowLine2Y1+=leftEyebrowLine2Direction;
leftEyebrowLine2Y2+=leftEyebrowLine2Direction2;
if(leftEyebrowLine2Y1 >= 385 || leftEyebrowLine2Y1 <= 350)
{leftEyebrowLine2Direction *=-1;}
leftEyebrowLine2Y1 += leftEyebrowMovement;

if(leftEyebrowLine2Y2 >= 395 || leftEyebrowLine2Y2 <= 360)
{leftEyebrowLine2Direction2 *=-1;}
leftEyebrowLine2Y2 += leftEyebrowMovement;

line(480,rightEyebrowY1,550,rightEyebrowY2); //right eyebrow long line//
rightEyebrowY1+=rightEyebrowDirection;
rightEyebrowY2+=rightEyebrow2Direction;
if(rightEyebrowY1 >= 385 || rightEyebrowY1 <= 350)
{rightEyebrowDirection *=-1;
  rightEyebrowMovement *=-1;
}
rightEyebrowY1 += rightEyebrowMovement;

if(rightEyebrowY2 >= 385 || rightEyebrowY2 <= 350)
{rightEyebrow2Direction *=-1;}
rightEyebrowY2 += rightEyebrowMovement

line(550,rightEyebrowLine2Y1,565,rightEyebrowLine2Y2);
rightEyebrowLine2Y1+=rightEyebrowLine2Direction;
rightEyebrowLine2Y2+=rightEyebrowLine2Direction2;
if(rightEyebrowLine2Y1 >= 385 || rightEyebrowLine2Y1 <= 350)
{rightEyebrowLine2Direction *=-1;}
rightEyebrowLine2Y1 += rightEyebrowMovement;

if(rightEyebrowLine2Y2 >= 395 || rightEyebrowLine2Y2 <= 360)
{rightEyebrowLine2Direction2 *=-1;}
rightEyebrowLine2Y2 += rightEyebrowMovement;

stroke(255,193,181); //mouth//
line(410,580,435,560);
line(435,560,465,563);
line(465,563,468,585);


noStroke(); //signature//
textSize(40);
text('Siobhan M',700,1090);

fill(34,139,34);//title//
textSize(size);
size += sizeDirection;
count++;
if(count > 5)
{sizeDirection *= -1;
  count = 0;
}
text("Siobhan Squared",310,50);






}