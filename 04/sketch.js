var posX = 250;
var color = 0;
var herramienta = 0;
var ang = 0;
function setup() {
  createCanvas(1000, 1000);
 	resetSketch();
}

function draw() {

  strokeWeight(1);
  
  if(mouseIsPressed)
  {
      //Limpio Boton
     if(mouseX > 900 && mouseX < 965 && mouseY > 900 && mouseY < 965)
    {
     resetSketch();
    herramienta = 0;
      color = 0;
    } 
    //Herramientas Botones
    if(mouseX > 250 && mouseX < 280 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 1; 
    } 
    if(mouseX > 300 && mouseX < 330 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 2; 
    } 
    if(mouseX > 350 && mouseX < 380 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 3; 
    } 
    if(mouseX > 400 && mouseX < 430 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 4; 
    } 
    if(mouseX > 450 && mouseX < 480 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 5; 
    } 
    if(mouseX > 500 && mouseX < 530 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 6; 
    } 
    if(mouseX > 550 && mouseX < 580 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 7; 
    } 
    if(mouseX > 600 && mouseX < 630 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 8; 
    } 
    if(mouseX > 650 && mouseX < 680 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 9; 
    } 
    if(mouseX > 700 && mouseX < 730 && mouseY > 50 && mouseY < 80)
    {
     herramienta = 10; 
    } 
    
    //Colores Botones
    if(mouseX > 250 && mouseX < 280 && mouseY > 950 && mouseY < 980)
    {
     color = 0; 
    } 
    if(mouseX > 300 && mouseX < 330 && mouseY > 950 && mouseY < 980)
    {
     color = 1; 
    } 
    if(mouseX > 350 && mouseX < 380 && mouseY > 950 && mouseY < 980)
    {
     color = 2; 
    } 
    if(mouseX > 400 && mouseX < 430 && mouseY > 950 && mouseY <980)
    {
     color = 3; 
    } 
    if(mouseX > 450 && mouseX < 480 && mouseY > 950 && mouseY < 980)
    {
     color = 4; 
    } 
    if(mouseX > 500 && mouseX < 530 && mouseY > 950 && mouseY < 980)
    {
     color = 5; 
    } 
    if(mouseX > 550 && mouseX < 580 && mouseY > 950 && mouseY < 980)
    {
     color = 6; 
    } 
    if(mouseX > 600 && mouseX < 630 && mouseY > 950 && mouseY < 980)
    {
     color = 7; 
    } 
    if(mouseX > 650 && mouseX < 680 && mouseY > 950 && mouseY < 980)
    {
     color = 8; 
    } 
    if(mouseX > 700 && mouseX < 730 && mouseY > 950 && mouseY < 980)
    {
     color = 9; 
    } 
    
    // Contorno
     if(mouseX > 900 && mouseX < 930 && mouseY > 500 && mouseY < 530)
    {
     contorno = 0; 
    } 
     if(mouseX > 900 && mouseX < 930 && mouseY > 550 && mouseY < 580)
    {
     contorno = 1; 
    } 
    
  
    
  //Herramientas
  if(herramienta == 1)
  {
    triangle(width/2, height/2, mouseX, mouseY, mouseX-50, mouseY-50);
  } 
  if(herramienta == 2)
  {
    noFill();
    arc(mouseX, mouseY, mouseY, 90, PI, PI+QUARTER_PI);
  } 
  if(herramienta == 3)
  {
   noFill();
   curve(mouseX,mouseX-mouseY,mouseY,width/2, mouseY,mouseY+50, -mouseX,-mouseY); 
  } 
  if(herramienta == 4)
  {
    noStroke();
    triangle(mouseX-30, mouseY, mouseX+30,mouseY,mouseX,mouseY-40);
    triangle(mouseX-30, mouseY-30, mouseX+30,mouseY-30, mouseX, mouseY+20);
  } 
  if(herramienta == 5)
  {
   push();
    translate(mouseX,mouseY);
  	rotate(ang);
  	line(0, 0, 50,50);
    pop();
    ang = ang +30;
  } 
  if(herramienta == 6)
  {
    strokeWeight(6);
    stroke(mouseX/4, mouseY/4, (mouseX/4)-(mouseY/4));
   ellipse(mouseX,mouseY, 45,45);
   ellipse(mouseX+20,mouseY-20,30,30);
   ellipse(mouseX-20,mouseY-20,30,30);
  } 
  if(herramienta == 7)
  {
    beginShape();
    vertex(mouseX,mouseY);
    vertex(mouseX, mouseY+40);
    vertex (mouseX+40, mouseY+40);
    vertex(mouseX-40, mouseY -40);
    beginContour();
    vertex(mouseX,mouseY);
    vertex(mouseX, mouseY+50);
    vertex (mouseX+50, mouseY+50);
    vertex(mouseX-50, mouseY -50);
    vertex(mouseX, mouseY-50);
    endContour();
    endShape(CLOSE);
    
    
  } 
  if(herramienta == 8)
  {
    push();
    translate(mouseX,mouseY);
  	rotate(ang);
  	rect(0, 0, 50,50);
    pop();
    ang = ang +30;
  } 
  if(herramienta == 9)
  {
    rect(mouseX-20,mouseY-100,20,200)
    push();
    translate(mouseX,mouseY);
  	rotate(90);
  	rect(-10,-100,20,200);
    pop();
  } 
  if(herramienta == 10)
  {
    push();
    translate(mouseX, mouseY);
    triangle(-100,0, -50, 0, -75,-50 );
		triangle(-200,0, -150, 0, -175,50 );
    triangle(100,0, 50, 0, 75,-50 );
    triangle(200,0, 150, 0, 175,50 );
    triangle(-100,0, -50, 0, -75,-50 );
    pop();
  } 
  
  //Colores
  if(color == 0)
  {
  	fill(0);
    stroke(0);
  }
    if(color == 1)
  {
  	fill(255);
    stroke(255);
  }
    if(color == 2)
  {
    fill(255,51,51); 
    stroke(255,51,51);
  }
    if(color == 3)
  {
     fill(255,153,51);
    stroke(255,153,51);
  }
    if(color == 4)
  {
     fill(255,255,51);
    stroke(255,255,51);
  }
    if(color == 5)
  {
     fill(51,255,51);
    stroke(51,255,51);
  }
    if(color == 6)
  {
     fill(51,153,255);
    stroke(51,153,255);
  }
    if(color == 7)
  {
     fill(51,51,255);
    stroke(51,51,255);
  }
    if(color == 8)
  {
     fill(153,51,255);
    stroke(153,51,255);
  }
    if(color == 9)
  {
     fill(255,51,255);
    stroke(255,51,255);
  }
  }
  
   
}

function resetSketch()
{
   	background(255);
 	strokeWeight(1);
  fill(0); 
  posX = width/4;
   ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
  stroke(0);
  fill(255);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
  
  
  noStroke();
  
  fill(153,0,0);
  rect ((900*width)/1000,(900*height)/1000, 65, 65);
  
  fill(255,51,51);
  ellipse(posX,(950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(255,153,51);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(255,255,51);
  ellipse(posX,(950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(51,255,51);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(51,255,255);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(51,51,255);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(153,51,255);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
  
   fill(255,51,255);
  ellipse(posX, (950*height)/1000, 30, 30);
  posX = posX + 50;
    
  posX = width/4;
  
  fill(0);
  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX,(50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;

  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
   rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX,(50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
  rect(posX, (50*height)/1000, 30, 30);
  posX = posX + 50;
  
  fill(255);
  
  triangle(width/4, (50*height)/1000, (275*width)/1000, (70*height)/100, (270*width)/1000, (75*height)/1000);
  
  text('arco',(302.5*width)/1000,(70*height)/1000);
  
  text('curva',(350*width)/1000,(70*height)/1000);
  
  triangle((405*width)/1000, (70*height)/1000, (425*width)/1000, (70*height)/1000,(415*width)/1000,(55*height)/1000);
  triangle((405*width)/1000, (60*height)/1000, (425*width)/1000,(60*height)/1000, (415*width)/1000, (75*height)/1000);
  
  stroke(255);
  line((465*width)/1000, (80*height)/1000,(465*width)/1000,(50*height)/1000 );
  line((480*width)/1000,(50*height)/1000,(450*width)/1000,(80*height)/1000);
  line((480*width)/1000,(80*height)/1000,(450*width)/1000,(50*height)/1000);
  
  ellipse(515,67, 15,15);
  ellipse(520,58,10,10);
  ellipse(510,58,10,10);
  
  beginShape();
  vertex(565,65);
  vertex(565, 75);
  vertex (575, 75);
  vertex(555, 55);
  beginContour();
  vertex(565,65);
  vertex(565, 80);
  vertex (580, 80);
  vertex(550, 50);
  vertex(565, 50);
  endContour();
  endShape(CLOSE);
  
  rect(605,55,10,10);
  rect(615,65,10,10);
  
  rect(660,55,5,20);
  push();
  translate(665,65);
  rotate(90);
  rect(-3,-10,5,20);
  pop();
  
  triangle(700,65, 715, 65, 707.5,50 );
	triangle(715,65, 730, 65, 722.5,80 );
  
  textSize(18);
  text('Reset', 910,937.5);
  
  stroke(0);
 
}