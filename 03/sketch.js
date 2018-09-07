var ang = 0;
var tam = 0;
var col = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(4);
}

function draw() {
	
	
  background(255);
	fill(0);
  
	push();
	translate(width/2, height/2);
	rotate(ang);
	rect(0,0,(80*width)/1000,(80*height)/1000);
	pop();
	
  ang = ang+(50*width)/1000;
  ellipse(width/2,height/2, tam, tam);
  tam = tam + (5*width)/1000;
  
	fill(255);
	noStroke();
   fill(255);
  for(var i = 0; i < 20; i++)
  {
   ellipse(random(width), random(height), (2*width)/1000, (2*width)/1000); 
  }
  
  //Planetas
  //Mercurio
  fill(col+200,col+200,col+200);
	rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 1100-millis()/ 100, (80*width)/1000));
  ellipse(0, 0, (20*width)/1000, (20*width)/1000);
	pop();
  //Venus
  fill(255,255,col+170);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 1000-millis()/ 500, (110*width)/1000));
  ellipse(0, 0, (30*width)/1000, (30*width)/1000);
	pop(); 
  //Tierra
  fill(col,col+100,255);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 900-millis()/ 800, (160*width)/1000));
  ellipse(0, 0, (35*width)/1000, (35*width)/1000);
	pop();
  //Marte
  fill(col+128,col,col);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 800-millis()/ 1100, (200*width)/1000));
  ellipse(0, 0, (35*width)/1000, (35*width)/1000);
	pop();  
  //Jupiter
  fill(255,col+69,col);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 700-millis()/ 1400, (250*width)/1000));
  ellipse(0, 0, (50*width)/1000, (50*width)/1000);
	pop(); 
  //Saturno
  fill(255,col+230, col+120);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 600-millis()/ 1700, (300*width)/1000));
  ellipse(0, 0, (45*width)/1000, (45*width)/1000);
	pop(); 
  //Urano
  fill(col+65,col+105,col+225);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(500 -millis()/ 2000, (320*width)/1000));
  ellipse(0, 0, (40*width)/1000, (40*width)/1000);
	pop();
  //Neptuno
  fill(col+30,col+144,255);
  push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(400 - millis()/ 2300, (350*width)/1000));
	ellipse(0, 0, (40*width)/1000, (40*width)/1000);
	pop();
  //Pluto
  fill(col+160,col+82,col+45);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(300 - millis()/ 2600, (380*width)/1000));
  ellipse(0, 0, (20*width)/1000, (20*width)/1000);
	pop();
  
  //Asteroides
  fill(col+100);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(200 - millis()/ 5000, (400*width)/1000));
  ellipse(0, 0, (20*width)/1000, (20*width)/1000);
	pop();
   rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(100 - millis()/ 10000, (430*width)/1000));
   ellipse(0, 0, (20*width)/1000, (20*width)/1000);
	pop();
    rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( -millis()/ 15000, (450*width)/1000));
  ellipse(0, 0, (25*width)/1000, (25*width)/1000);
	pop();

 
  fill (255,col+170, col);
	ellipse(width/2,height/2,(100*width/1000),(100*width)/1000);
	if (col >=  0)
  {
  	col=col-0.5;
  }
  
  if(frameCount <= 400)
  {
    if(frameCount%4 == 0){
    //saveCanvas("miFlipbookito" + frameCount,"jpg");
    }
  }
  
  print(frameCount);
  
  
}