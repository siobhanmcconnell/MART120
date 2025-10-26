function setup() {
  createCanvas(900,1100);
}

function draw() {
background(255, 236, 236);

noStroke(); //hair//
fill(185,112,48);
circle(320,370,450);
circle(600,380,400);
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
circle(400,450,35);
circle(500,450,35);

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

line(350,370,420,370); //eyebrows//
line(350,370,335,380);
line(480,370,550,370);
line(550,370,565,380);

stroke(255,193,181); //mouth//
line(410,580,435,560);
line(435,560,465,563);
line(465,563,468,585);

noStroke();
textSize(35);
text('Siobhan M',725,1090);
fill(34,139,34);
text("Siobhan Squared",350,50);







}