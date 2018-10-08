var red = [];
var neutr = [];
var vir = [];
var can = [];
var par = [];
var eos = [];
var bac = [];
var canL = 0;
var virL = 0;
var virC = 0;
var sonido


function preload()
{
  sonido = loadSound('assets/heart.mp3');
}


// Se crean las ubicaciones y objetos de cada especie del cuerpo.
function setup() {
  createCanvas(1500, 1500);
	sonido.play();
  
  for (var e = 0; e < 100; e++) {
    var x = random(0, width);
    var y = random(280, 580);
    red[e] = new redBlood(x, y, 0);
  }

  for (var m = 100; m < 200; m++) {
    var x = random(0, width);
    var y = random(1218, 1518);
    red[m] = new redBlood(x, y, 1);
  }

  for (var w = 0; w < 10; w++) {
    var x = random(0, width);
    var y = random(0, height);
    neutr[w] = new neutrophiles(x, y);
  }

  for (var v = 0; v < 2; v++) {
    var x = random(0, width);
    var y = random(0, height);
    vir[v] = new virus(x, y);
    virL++;
  }

  for (var c = 0; c < 3; c++) {
    var x = random(0, width);
    var y = random(0, height);
    can[c] = new cancer(x, y);
    canL++;
  }

  for (var pa = 0; pa < 1; pa++) {
    var x = random(0, width);
    var y = 420;
    par[pa] = new parasite(x, y);
  }

  for (var eo = 0; eo < 7; eo++) {
    var x = random(0, width);
    var y = random(0, height);
    eos[eo] = new eosinophile(x, y);
  }

  for (var b = 0; b < 4; b++) {
    var x = random(0, width);
    var y = random(0, height);
    bac[b] = new bacteria(x, y);
  }
}

function draw() {
  background(241, 174, 105);
  if(sonido.currentTime() >= 7)
  {
    sonido.jump(0);
  }

  // Cada ciclo coge cada arreglo y dibuja y pone en movimiento cada celula del cuerpo.
  for (var i = 0; i < 200; i++) {
    red[i].exist();
    red[i].move();
  }

  for (var p = 0; p < 10; p++) {
    neutr[p].exist();
    neutr[p].move();
  }

  for (var o = 0; o < virL; o++) {
    vir[o].exist();
    vir[o].move();
  }

  for (var l = 0; l < canL; l++) {
    can[l].exist();
    can[l].move();
  }
  for (var k = 0; k < 1; k++) {
    par[k].exist();
    par[k].move();
  }
  for (var j = 0; j < 7; j++) {
    eos[j].exist();
    eos[j].move();
  }
  for (var t = 0; t < 4; t++) {
    bac[t].exist();
    bac[t].move();
  }

  fagocitosis();
  virosis();
  metastasis();

  //Crea el icono de "medicina" al lado del mouse.
 if(mouseIsPressed)
 {
  push();
  fill(255);
  noStroke();
  arc(mouseX, mouseY, 30, 30, 0, PI + QUARTER_PI, OPEN);
  pop();

  push();
  fill(255, 0, 0);
  noStroke();
  arc(mouseX + 5, mouseY - 13, 30, 30, PI, TWO_PI + QUARTER_PI, OPEN);
  pop();
 }


}

// Crea la clase de los globulos rojos. Se dividen en los rojos con oxigeno y los morados sin oxigeno. Se ven distintos si estan contagiaados por un virus
function redBlood(rX, rY, tipo) {
  this.x = rX;
  this.y = rY;
  this.tipo = tipo;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {

    if (!this.muerto) {
      strokeWeight(8);
      if (tipo == 0) {
        fill(128, 0, 0);
        stroke(171, 0, 0);
      } else if (tipo == 1) {
        fill(150, 0, 90);
        stroke(128, 0, 90);
      } else {
        fill(0, 170, 0);
        stroke(0, 120, 0);
      }
      ellipse(this.x, this.y, 50, 50);
    }
  }

  this.move = function() {
    if (this.tipo == 0) {
      if (this.x < 0) {
        this.x = width;
      }
      this.x -= 10;
    }
    if (this.tipo == 3) {
      if (this.x < 0) {
        this.x = width;
      }
      this.x -= 10;
    }
    if (this.tipo == 1) {
      if (this.x > width) {
        this.x = 0;
      }
      this.x += 10;
    }
    if (this.tipo == 4) {
      if (this.x > width) {
        this.x = 0;
      }
      this.x += 10;
    }

  }

  this.morir = function() {
    this.muerto = true;
  }

  this.type = function() {
    return this.tipo;
  }
}

//Los neutrofilos son las celulas que protegen al cuerpo de viruses y celulas cancerigenas, sin embargo se enuentran vulnerables a un ataque bacterial.
function neutrophiles(wX, wY) {
  this.x = wX;
  this.y = wY;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {

    if (!this.muerto) {
      fill(150);
      stroke(170);
      ellipse(this.x, this.y, 50, 50);
      ellipse(this.x - 20, this.y - 10, 50, 50);
    }
  }


  this.move = function() {

    if (this.x < 0 || this.x > width || this.y > height || this.y < 0) {
      this.x = random(0, width);
      this.y = random(0, height);
    }

    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1);

  }

  this.morir = function() {
    this.muerto = true;
  }

}


//Los virus contagian a las celulas rojas y se reproducen dependiendo de cuantas celulas contagian. Mueren en cercania a los neutrofilos.
function virus(vX, vY) {
  this.x = vX;
  this.y = vY;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {
    if (!this.muerto) {
      fill(0, 170, 0);
      stroke(0, 120, 0);
      strokeWeight(5);
      rect(this.x, this.y, 50, 50);
    }
  }

  this.move = function() {
    if (this.x < 0 || this.x > width || this.y > height || this.y < 0) {
      this.x = random(0, width);
      this.y = random(0, height);
    }
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.morir = function() {
    this.muerto = true;
  }
}

// Las celulas cancerigenas solo se reproducen rapidamente, sin embargo pueden morir por cercania a los neutrofilos.
function cancer(cX, cY) {
  this.x = cX;
  this.y = cY;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {
    if (!this.muerto) {
      fill(170, 90, 170);
      stroke(100, 20, 100);
      strokeWeight(5);
      ellipse(this.x, this.y, 50, 50);
      push();
      translate(this.x, this.y);
      for (var r = 0; r < 10; r++) {
        rotate(30);
        ellipse(10, 10, 10, 10);
      }
      pop();
    }
  }

  this.move = function() {
    if (this.x < 0 || this.x > width || this.y > height || this.y < 0) {
      this.x = random(0, width);
      this.y = random(0, height);
    }
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.morir = function() {
    this.muerto = true;
  }
}


// Los parasitos se mantienen en la via sanguinea pero mueren por cercania con los eosinofilos.
function parasite(pX, pY) {
  this.x = pX;
  this.y = pY;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {
    if (!this.muerto) {
      fill(210, 105, 30);
      stroke(110, 5, 0);
      strokeWeight(5);
      rect(this.x, this.y, 500, 30);
    }
  }

  this.move = function() {
    if (this.x < -200) {
      this.x = width;
    }
    this.x -= random(10, 20);
  }

  this.morir = function() {
    this.muerto = true;
  }
}


//Los eosinofilos no funcionan con los viruses o celulas cancerigenas, sin embargo son efectivos con los parasitos.
function eosinophile(eX, eY) {
  this.x = eX;
  this.y = eY;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {
    if (!this.muerto) {
      fill(255, 200, 200);
      stroke(255);
      strokeWeight(5);
      ellipse(this.x, this.y, 50, 50);
      ellipse(this.x - 20, this.y, 50, 50);
    }
  }

  this.move = function() {
    if (this.x < 0 || this.x > width || this.y > height || this.y < 0) {
      this.x = random(0, width);
      this.y = random(0, height);
    }
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  this.morir = function() {
    this.muerto = true;
  }
}

//Las bacterias mueren con administrar una medicina pero destruyen a los neutrofilos.
function bacteria(bX, bY) {
  this.x = bX;
  this.y = bY;
  this.muerto = false;
  this.crecimiento = millis();

  this.exist = function() {
    if (!this.muerto) {
      fill(153, 153, 30);
      stroke(80, 80, 0);
      strokeWeight(5);
      ellipse(this.x, this.y, 100, 40);
    }
  }

  this.move = function() {
    if (this.x < 0 || this.x > width || this.y > height || this.y < 0) {
      this.x = random(0, width);
      this.y = random(0, height);
    }
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.morir = function() {
    this.muerto = true;
  }
}

//Esta funci[on sirve para representar la forma en que las bacterias y los neutrofilos se alimentan de otras celulas.
function fagocitosis() {
  for (var t = 0; t < 10; t++) {
    for (var v = 0; v < virL; v++) {
      var dvnx = dist(neutr[t].x, neutr[t].y, vir[v].x, vir[v].y);
      if (dvnx < 50) {
        vir[v].morir();
        virL--;
      }
    }

    for (var c = 0; c < canL; c++) {
      var dcn = dist(neutr[t].x, neutr[t].y, can[c].x, can[c].y);
      if (dcn < 50) {
        can[c].morir();
        canL--;
      }
    }
  }

  for (var e = 0; e < 7; e++) {
    var dpe = dist(eos[e].x, eos[e].y, par[0].x, par[0].y);
    if (dpe < 50) {
      par[0].morir();
    }
  }
  
for (var b = 0; b < 4; b++) {
      for (var t = 0; t < 10; t++) {
  var dbn = dist(neutr[t].x, neutr[t].y, bac[b].x, bac[b].y);
      if (dbn < 50) {
        neutr[t].morir();
      }
      }
}
}

//Est funci[on representa la manera en que los viruses contagian  y se alimentan de las otras celulas.
function virosis() {
  for (var v = 0; v < virL; v++) {
    for (var r = 0; r < 200; r++) {
      var dvr = dist(vir[v].x, vir[v].y, red[r].x, red[r].y);
      if (dvr < 20) {
        if (red[r].type() == 0) {
          red[r] = new redBlood(random(0, width), random(280, 580), 3);
          virC++;
        }
      }
      if (dvr < 20) {
        if (red[r].type() == 1) {
          red[r] = new redBlood(random(0, width), random(1218, 1518), 4);
          virC++;
        }
      }
    }

  }
  
  


}


//Esta funcion representa la propagacion tanto del cancer como de los virusesdentro del cuerpo.
function metastasis() {
  if (frameCount % 100 == 0 && canL > 0); {
    var cel = int(random(0, canL - 1));
    can.push(new cancer(can[cel].x, can[cel].y));
    canL++;
  }


  if (virC > 5 && millis() > 1000 && virL > 0 && frameCount % 50 == 0) {
    var viru = int(random(0, virL - 1));
    vir.push(new virus(vir[viru].x, vir[viru].y));
    virL++;
  }

}


//El mouse toma rol de medicina donde puede destruir cualquier celula danina, y puede restaurar cualquier celula contagiada.
function mousePressed() {
  if (mouseIsPressed) {
    for (var v = 0; v < virL; v++) {
      var dvnx = dist(mouseX, mouseY, vir[v].x, vir[v].y);
      if (dvnx < 10) {
        vir[v].morir();
        virL--;
      }
    }

    for (var b = 0; b < 4; b++) {
      var dbn = dist(mouseX, mouseY, bac[b].x, bac[b].y);
      if (dbn < 10) {
        bac[b].morir();
      }
    }

    for (var c = 0; c < canL; c++) {
      var dcn = dist(mouseX, mouseY, can[c].x, can[c].y);
      if (dcn < 10) {
        can[c].morir();
        canL--;
      }
    }


    for (var e = 0; e < 7; e++) {
      var dpe = dist(mouseX, mouseY, par[0].x, par[0].y);
      if (dpe < 10) {
        par[0].morir();
      }
    }

    for (var r = 0; r < 200; r++) {
      var dvr = dist(mouseX, mouseY, red[r].x, red[r].y);
      if (dvr < 20) {
        if (red[r].type() == 3) {
          red[r] = new redBlood(random(0, width), random(280, 580), 0);
          virC--;
        }
      }
      if (dvr < 20) {
        if (red[r].type() == 4) {
          red[r] = new redBlood(random(0, width), random(1218, 1518), 1);
          virC--;
        }

      }


    }
  }
}
