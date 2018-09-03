var ang = 0;
var tam = 0;
var col = 255;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
	
	
  background(255);
	fill(0);
  
	push();
	translate(width/2, height/2);
	rotate(ang);
	rect(0,0,80,80);
	pop();
	
  ang = ang+200;
  ellipse(width/2,height/2, tam, tam);
  tam = tam + 5;
  
	fill(255);
	noStroke();
  
  //Planetas
  //Mercurio
  fill(col+200,col+200,col+200);
	rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 1100-millis()/ 100, 80));
  ellipse(0, 0, 20, 20);
	pop();
  //Venus
  fill(255,255,col+170);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 1000-millis()/ 500, 110));
  ellipse(0, 0, 30, 30);
	pop(); 
  //Tierra
  fill(col,col+100,255);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 900-millis()/ 800, 160));
  ellipse(0, 0, 35, 35);
	pop();
  //Marte
  fill(col+128,col,col);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 800-millis()/ 1100, 200));
  ellipse(0, 0, 35, 35);
	pop();  
  //Jupiter
  fill(255,col+69,col);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 700-millis()/ 1400, 250));
  ellipse(0, 0, 50, 50);
	pop(); 
  //Saturno
  fill(255,col+230, col+120);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( 600-millis()/ 1700, 300));
  ellipse(0, 0, 45, 45);
	pop(); 
  //Urano
  fill(col+65,col+105,col+225);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(500 -millis()/ 2000, 320));
  ellipse(0, 0, 40, 40);
	pop();
  //Neptuno
  fill(col+30,col+144,255);
  push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(400 - millis()/ 2300, 350));
	ellipse(0, 0, 40, 40);
	pop();
  //Pluto
  fill(col+160,col+82,col+45);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(300 - millis()/ 2600, 380));
  ellipse(0, 0, 20, 20);
	pop();
  
  //Asteroides
  fill(col+100);
  rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(200 - millis()/ 5000, 400));
  ellipse(0, 0, 20, 20);
	pop();
   rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle(100 - millis()/ 10000, 430));
  ellipse(0, 0, 20, 20);
	pop();
    rectMode(CENTER);
	push();
  translate(width/2, height / 2);
  translate(p5.Vector.fromAngle( -millis()/ 15000, 450));
  ellipse(0, 0, 25, 25);
	pop();

  fill(255);
  for(var i = 0; i < 20; i++)
  {
   ellipse(random(1000), random(1000), 2, 2); 
  }
  
  fill (255,col+170, col);
	ellipse(500,500,100,100);
	if (col >=  0)
  {
  	col=col-0.5;
  }
  
}