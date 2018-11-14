var capture; // variable para guardar la captura
var tracker; // variable para guardar el tracker
var canvas;  // variable para guardar el canvas

//Variables generales del juego
var estrellas = [];
var gameState;
var soundtrack;
var score = [];
var opTexto = 255;
var opTexto2 = 0;
var soundtrack;
var pops;
var played;
var amp;
var dific;
var puntajeMayor = 0;

//Variables para el jugador
var pImg;
var playerBub;
var x;
var y;
var opPlayer = 0;
var pTamx;
var pTamy;

//variables clavos
var caidos = [];
var clavos = [];
var velCla;
var imgCla;


//Variables Pistola
var balasP = [];
var balas = [];
var tamBx, tamBy;
var velBal;
var imgBal

//Variable Roca rebotadora
var bouncing;
var r;
var xB = 320;
var yB = 180;
var xspeed = 5;
var yspeed = 2;
var imgBouncer;


//Cargar imagenes y varios efectos de sonido
function preload() {
  pImg = loadImage('assets/player.png');
  imgCla = loadImage('assets/Clavo.png');
  imgBal = loadImage('assets/Bullet.png');
  imgBouncer = loadImage('assets/Bouncer.png');
  soundtrack = loadSound('assets/soundtrack.mp3');
  pops = loadSound('assets/POP.mp3');
}


function setup() {  
  
  //Define la densidad de pixeles para que la imagen sea igual en todos los dispositivos
  pixelDensity(1);
  capture = createCapture(VIDEO); //crea una captura de video
  capture.size(windowWidth, windowHeight);
  
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  capture.parent('container'); 
  canvas.parent('container'); 

  //Guardar la ubicacion para las estrellas
  for (var i = 0; i < 200; i++) {
    estrellas.push({
      x: random(0, width),
      y: random(0, height)
    });
  }

  //Metodo que reinicia el juego
  restart();
  
  activarTracking(); //activa el tracking para el color seleccionado


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
  fill(100, 0, 100, opTexto);
  strokeWeight(8);
  rectMode(CENTER);
  rect(width / 2, height / 1.5, (500 * width) / 2000, (200 * height) / 2000, 50);
  noFill();
  stroke(255, 255, 255, opTexto - 35);
  strokeWeight(5);
  rect(width / 2, height / 1.5, (545 * width) / 2000, (245 * height) / 2000, 50);
  stroke(255, 255, 255, opTexto - 84);
  strokeWeight(3);
  rect(width / 2, height / 1.5, (575 * width) / 2000, (275 * height) / 2000, 50);
  pop();
  push();
  noStroke();
  textAlign(CENTER);
  textSize((100 * width) / 2000);
  text('Easy', width / 2, height / 1.45);
  pop();
  
   //Boton de jugar
  push();
  fill(100, 0, 100, opTexto);
  strokeWeight(8);
  rectMode(CENTER);
  rect(width / 2, height / 1.2, (500 * width) / 2000, (200 * height) / 2000, 50);
  noFill();
  stroke(255, 255, 255, opTexto - 35);
  strokeWeight(5);
  rect(width / 2, height / 1.2, (545 * width) / 2000, (245 * height) / 2000, 50);
  stroke(255, 255, 255, opTexto - 84);
  strokeWeight(3);
  rect(width / 2, height / 1.2, (575 * width) / 2000, (275 * height) / 2000, 50);
  pop();
  push();
  noStroke();
  textAlign(CENTER);
  textSize((100 * width) / 2000);
  text('Hard', width / 2, height / 1.18);
  pop();

  //autor del juego
  push();
  noStroke();
  textFont('Helvetica');
  textSize((30 * width) / 2000);
  text('by: Santiago Rozo Urreta', width / 2, height / 1.05);
  pop();
  
   push();
  noStroke();
  textFont('Chango');
  textSize((40 * width) / 2000);
  text('Easy: Play with fingers\nHard: Play with something yellow in front of the camera!', width / 2, height / 1.9);
  pop();

  if (gameState == 1) {
    //inicia al jugador con su burbuja
    playerBub = new player(x, y);
    playerBub.blow();

    //Display de los clavos
    for (var n = 0; n < clavos.length; n++) {
      clavos[n].hang();
    }
    
    //Cambios en la velocidad de movimiento de acuerda al tiempo
     velCla+=0.01;
      if(score[0]>100)
      {
       velBal+=0.01; 
      }

  //Establecimiento de los clavos y balas que deben caer
    if (amp.getLevel() >= 0.5) {
      for (var t = 0; t < 5; t++) {
        caidos[t] = floor(random(0, clavos.length));
      }
    }
    for (var t = 0; t < 5; t++) {
      balasP[t] = floor(random(0, balas.length));
    }
		
    //Display de las balas
    if (score[0] >= 100) {
      for (var l = 0; l < balas.length; l++) {
        balas[l].load();
      }
    }

    //Movimiento de las balas y los clavos dependiendo de la cancion
    for (var c = 0; c < caidos.length; c++) {
      clavos[caidos[c]].fall();
      if(score[0] > 100)
      {
      balas[balasP[c]].shoot();
      }
    }

    //Creaci[on de la pelota rebotadora despues de cierto tiempo
    if (score[0] > 500) {
      push();
      fill(155, opPlayer);
      noStroke();
      image(imgBouncer, xB,yB, r*2,r*2);
      xB += xspeed;
      yB += yspeed;
      if (xB > width - r || xB < r) {
        xspeed = -xspeed;
      }
      if (yB > height - r || yB < r) {
        yspeed = -yspeed;
      }
      pop();

    }
		
    //Calculo y muestra del puntaje
    score[0] = floor(millis() / 100 - score[1]);
    push();
    textSize((50 * width) / 2000);
    fill(255);
    text('Score: ' + score[0], width / 1.1, height / 15);

    //Transicion de estados. Desaparecen los textos introductorios y comienza el juego
    if (gameState == 1 && opTexto > 0) {
      opTexto -= 5;
      opPlayer += 5;
    }

  }
  
  //Metodo que controla si el jugador pierde
  loss();

  //Estado de perder donde aparece el aviso y el boton de reinicio
  if (gameState == 2) {
    opTexto2++;

    fill(255, opTexto2);
    stroke(255, opTexto);
    textSize((250 * width) / 2000);
    textFont('Fascinate Inline');
    textAlign(CENTER);
    text('YOU\nLOSE', width / 2, height / 4);
    
    push();
    textSize(21)
    text('Score: ' + score[2], width/2, height/1.7);
    text('High Score: ' + puntajeMayor, width/2, height/1.6);
    pop();

    //Boton de ir al menu
    push();
    fill(100, 0, 100, opTexto2);
    strokeWeight(8);
    rectMode(CENTER);
    rect(width / 2, height / 1.25, (500 * width) / 2000, (200 * height) / 2000, 50);
    noFill();
    stroke(255, 255, 255, opTexto2 - 35);
    strokeWeight(5);
    rect(width / 2, height / 1.25, (545 * width) / 2000, (245 * height) / 2000, 50);
    stroke(255, 255, 255, opTexto2 - 84);
    strokeWeight(3);
    rect(width / 2, height / 1.25, (575 * width) / 2000, (275 * height) / 2000, 50);
    pop();
    push();
    noStroke();
    textAlign(CENTER);
    textSize((100 * width) / 2000);
    text('Retry', width / 2, height / 1.225);
    pop();
    
  }
  
  console.log(dist(mouseX, mouseY, width / 1.5, height / 1.5));
}

//Calse jugador para la creaciony movimiento del jugados
function player(pX, pY) {
  this.x = pX;
  this.y = pY;
  this.perdio = false;


  this.blow = function() {
    imageMode(CENTER);
    tint(255, opPlayer);
    image(pImg, x, y, pTamx, pTamy);
  }

}

//Clase clavos parala crecion y movimiento de los clavos
function nails(sX, sY) {
  this.x = sX;
  this.y = sY;

  this.hang = function() {
    fill(255, 0, 0, opPlayer);
    noStroke();
    image(imgCla, this.x,this.y, (75*width)/2000,(125*height)/2000);
  }

  this.fall = function() {
    if (this.y >= height) {
      this.y = sY;
    }
    this.y += velCla;
  }

  this.giveX = function() {
    return this.x;
  }

  this.giveY = function() {
    return this.y;
  }
}


//Clase creada para las balas en el juego
function bullets(bX, bY) {
  this.x = bX;
  this.y = bY;
  this.showing = false;

  this.load = function() {
    fill(0, 255, 0, opPlayer);
    noStroke();
    image(imgBal, this.x,this.y, tamBx,tamBy);
    this.showing = true;
  }

  this.shoot = function() {
    if (this.x <= 0) {
      this.x = bX;
    }
    this.x -= velBal;

  }

  this.isShowing = function() {
    return this.showing;
  }

}

function loss() {
  //Condicional para perder por la cercania de los clavos
  for (var p = 0; p < clavos.length; p++) {
    var dista = dist(x, y, clavos[p].x, clavos[p].y)
    if (dista <= pTamx / 2 + (34 * height / 2000)) {
      if(!pops.isPlaying() && !played)
      {
      pops.play();
        played = true;
      }
      gameState = 2;
			
      if(score[0] > puntajeMayor)
      {
       puntajeMayor = score[0]; 
      }
      
      score[2] = score[0];
    }
  }
//Condicional para perder por la cercania de las balas
  for (var h = 0; h < balas.length; h++) {
    if (balas[h].isShowing) {
      if (dist(x, y, balas[h].x, balas[h].y) <= tamBx) {
          if(!pops.isPlaying()&&!played)
      {
      pops.play();
        played = true;
      }
        gameState = 2;

        score[2] = score[0];
      }
    }
  }
//Condicional para perder por la pelota que rebota
  var reb = dist(x, y, xB, yB);
  if (reb <= pTamx / 2 + r) { 
    if(!pops.isPlaying() && !played)
      {
      pops.play();
        played = true;
      }
    gameState = 2;
 	 
    score[2] = score[0];
  }
}

//Cambios de estado depenediendo del estado y boton oprimidos
function mousePressed() {
  if (gameState == 0) {
    if (dist(mouseX, mouseY, width / 2, height / 1.5) <= (200 * width) / 2000) {
      gameState = 1;
      score[1] = millis() / 100;
      score[0] = 0;
    } else if (dist(mouseX, mouseY, width / 2, height / 1.2) <= (200 * width) / 2000) {
      gameState = 1;
      dific = 1;
      score[1] = millis() / 100;
      score[0] = 0;
    }
  } else if (gameState == 2) {
    if (dist(mouseX, mouseY, width / 2, height / 1.225) <= (200 * width) / 2000) {
      restart();
    }
  }

}

//Movimiento del jugador por medio del dedo
function mouseDragged() {
  if (dist(mouseX, mouseY, x, y) < pTamx / 2 && dific == 0) {
    x = mouseX;
    y = mouseY;
  }
  return false;
}

function restart() {
  dific = 0;
  
  //Reinicio del soundtrack e iniciacion
  if (soundtrack.isPlaying()) {
    soundtrack.jump(0)
  } else {
    soundtrack.play();
  }
  amp = new p5.Amplitude();
  played = false;

  //Iniciar el juego en la introduccion
  gameState = 0;

  //opacidad de los textos para que vayan desapareciendo y apareciedno
  opTexto = 255;
  opTexto2 = 0;

  //Crear las posiciones de los clavos y establecer velocidad
  for (var s = 0; s < 9; s++) {
    clavos[s] = new nails((s + 1) * width / 10, 0);
  }
  velCla = 5;

  //Posiciones balas y velocidades
  tamBx = (75 * width) / 2000;
  tamBy = (50 * height) / 2000;
  for (var b = 0; b < 9; b++) {
    balas[b] = new bullets(width, (b + 1) * height / 10);
  }

  r = (100 * width) / 2000;
  velBal =5;

  //Posicion y tamano inicial del jugador
  x = width / 2;
  y = height / 2;
  pTamx = (100 * width) / 2000;
  pTamy = (100 * width) / 2000;

  xR = width / 2;
  xY = height / 2;
}

//esta función activa el tracking y encuentra el color seleccionado
function activarTracking() {

  tracking.ColorTracker.registerColor('blue', function(r, g, b) {
			if (r < 50 && g < 50 && b < 200) {
				return true;
			}
				return false;
	});
  
  //crea un tracker de color
  tracker = new tracking.ColorTracker(['blue']);

  //hace el tracking en la captura de la camara
  tracking.track('video', tracker);

  /*
  / Esta es la parte importante!!!!
  / cada vez que se encuentre un grupo de pixeles del
  / color seleccionado
  / se lanza un evento
  / y se devuele un objeto con las dimensiones
  / del grupo de pixeles
  */
  tracker.on('track', function (event) {

    //esta funcion se ejecutacada vez que encuentra un grupo de pixeles del color seleccionado
    event.data.forEach(function (r) { //recorre la lista de grupos encontrados

      if(dific == 1)
      {
       //calcula el centro del cuadro
        x = r.x + (r.width/2);
        y = r.y + (r.height/2);
      }

    })
  });
}