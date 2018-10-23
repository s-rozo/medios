//Variables generales del juego
var estrellas = [];
var gameState;
var soundtrack;
var score = [];
var opTexto = 255;

//Variables para el jugador
var pImg;
var playerBub;
var x;
var y;
var opPlayer = 0;
var pTamx;
var pTamy;

//Variables anillos puas
var ring;
var opRing = 0;

//variables clavos
var clavosP = [];
var clavos = [];

//Cargar imagenes y varios efectos de sonido
function preload()
{
	pImg = loadImage('assets/player.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Iniciar el juego en la introduccion
  gameState = 0;
  
  //Guardar la ubicacion para las estrellas
  for (var i = 0; i < 200; i++) {
    estrellas.push({
      x: random(0, width),
      y: random(0, height)
    });
  }
  
  //Crear las posiciones de los clavos
  for(var s = 0; s < 20; s++)
  {
   clavosP.push({
   	x:s* width/20,
    y: 0,
   });
  }
  //Posicion y tamano inicial del jugador
  x = width/2;
  y = height/2;
  pTamx = (100*width)/2000;
  pTamy = (75*height)/2000;
}

function draw() {
  background(3, 13, 79);
  for (var e = 0; e < estrellas.length; e++) {
    push();
    fill(255);
    stroke(255);
    ellipse(estrellas[e].x, estrellas[e].y, (8 * width) / 2000, (8 * width) / 2000);
    pop();
  }
  
	//Titulo introductorio
    fill(255, opTexto);
    stroke(255, opTexto);
    textSize((250 * width) / 2000);
    textFont('Fascinate Inline');
    textAlign(CENTER);
    text('BUBBLE\nPOP', width / 2, height / 4);

	//Boton de jugar
    push();
    fill(100, 0, 100,opTexto);
    strokeWeight(8);
    rectMode(CENTER);
    rect(width / 2, height / 1.5, (500 * width) / 2000, (200 * height) / 2000, 50);
    noFill();
    stroke(255, 255, 255, opTexto-35);
    strokeWeight(5);
    rect(width / 2, height / 1.5, (545 * width) / 2000, (245 * height) / 2000, 50);
    stroke(255, 255, 255, opTexto-84);
    strokeWeight(3);
    rect(width / 2, height / 1.5, (575 * width) / 2000, (275 * height) / 2000, 50);
    pop();
    push();
    noStroke();
    textAlign(CENTER);
    textSize((100 * width) / 2000);
    text('Play', width / 2, height / 1.45);
    pop();

  //autor del juego
    push();
    noStroke();
    textFont('Helvetica');
    textSize((30 * width) / 2000);
    text('by: Santiago Rozo Urreta', width / 2, height / 1.05);
    pop();
  
  //inicia al jugador con su burbuja
  playerBub = new player(x,y);
  playerBub.blow();
  
   for (var i = 0; i < 6; i++) 
   {
  push();
	translate(width/2, height/2);
  translate(p5.Vector.fromAngle((i*200)-millis() / 1000, (500*width)/2000));
  ring = new rings(0,0);
  ring.spin();
  pop();
  }
  
  for(var n = 0; n < nails.length; n++)
      {
        clavos[n] = new nails (clavosP[n].x, clavosP[n].y);
        clavos[n].hang();
      }
  
  //Transicion de estados
  if(gameState == 1 && opTexto > 0)
  {
    opTexto-=5;
    opPlayer+=5;
    opRing += 5;
  }
  if(gameState == 1)
  {
    score[0] = floor(millis()/100-score[1]);
    push();
    textSize((50*width)/2000);
		fill(255);
    text('Score: ' + score[0], width/1.1, height/15);
    
  }
  
  console.log(gameState);
}

function player(pX, pY) 
{
  this.x = pX;
  this.y = pY;
  this.perdio = false;
  
  
  this.blow = function()
  {
    imageMode(CENTER);
    tint(255,opPlayer);
  	image(pImg,x,y,pTamx,pTamy);
  }

}

function rings(rX, rY) 
{
	this.x = rX;
  this.y = rY;
  
  this.spin = function()
  {
      for (var i = 0; i < 4; i++) {
      push();
      translate(this.x, this.y);
      translate(p5.Vector.fromAngle((i * 300) - millis() / 2000, (200*width)/2000));
      fill(255,opRing);
      noStroke();
      ellipse(0,0, (50*width)/2000, (50*height)/2000);
      pop();
    }
  }

}

function follower() {


}

function nails(sX, sY) {
this.x = sX;
this.y = sY;
  
this.hang = function()
{
  fill(255,0,0,opPlayer);
	rect(this.x, this.y, (50*width)/2000, (100*height)/2000);
}

this.fall = function()
{
 if(this.y >= height)
 {
  this.y = sY;
 }
this.y--;
}
}

function bounce() {


}

function lines() {


}

function mousePressed() 
{
  if(gameState == 0)
  {
    if (dist(mouseX,mouseY, width/2, height/1.5) <= (200*width)/2000)
    { 
      gameState = 1;
      score[1] = millis()/100;
      score[0] = 0;
    }
  }
 
}

function mouseDragged()
{
 	if(dist(mouseX,mouseY,x,y) < pTamx/2)
  {
    x = mouseX;
    y = mouseY;
  }
}
