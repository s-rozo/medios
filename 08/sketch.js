var red = [];
var neutr = [];
var vir = [];
var can = [];
var par = [];
var eos = [];
var bac = [];
var canL = 0;
var redL = 0;
var virL = 0;
var virC = 0;
var sonido;
var vel;
var w, h, area;
var anch1, anch2;
var anch3, anch4;
var tipos = [];
var veces = 0;


function preload() {
  sonido = loadSound('assets/heart.mp3');
}


// Se crean las ubicaciones y objetos de cada especie del cuerpo.
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  area = w * h
  sonido.play();
  anch1 = 280;
  anch2 = 580;
  anch3 = 880;
  anch4 = 1280;

  for (var e = 0; e < 100; e++) {
    var x = random(0, width);
    var y = random((anch1 * width) / 1500, (anch2 * height) / 1500);
    tipos[e] = 0;
    red[e] = new redBlood(x, y, tipos[e]);
    redL++;
  }

  for (var m = 100; m < 200; m++) {
    var x = random(0, width);
    var y = random((anch3 * width) / 1500, (anch4 * height) / 1500);
    tipos[m] = 1;
    red[m] = new redBlood(x, y, tipos[m]);
    redL++;
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
    var y = (420 * height) / 1500;
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
  if (sonido.currentTime() >= 7) {
    sonido.jump(0);
  }

  var difX = abs(mouseX - pmouseX);

  //difY es la resta de la posicion y del mouse actual con la posicion del mouse anterior
  var difY = abs(mouseY - pmouseY);

  //con floor() se redondea la velocidad a un numero entero
  //para simplificar, se puede tomar la velocidad como la suma de las diferencias en posicion en x y en y
  vel = floor(difX + difY);


  // Cada ciclo coge cada arreglo y dibuja y pone en movimiento cada celula del cuerpo.
  for (var i = 0; i < redL; i++) {
    red[i].exist();
    if (vel > 80) {
      red[i].acelerar();
    } else {
      red[i].move();
    }
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
  if (mouseIsPressed) {
    push();
    fill(255);
    noStroke();
    arc(mouseX, mouseY, (30 * width) / 1500, (30 * height) / 1500, 0, PI + QUARTER_PI, OPEN);
    pop();

    push();
    fill(255, 0, 0);
    noStroke();
    arc(mouseX + 5, mouseY - 13, (30 * width) / 1500, (30 * height) / 1500, PI, TWO_PI + QUARTER_PI, OPEN);
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
      ellipse(this.x, this.y, (50 * width) / 1500, (50 * height) / 1500);
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

  this.acelerar = function() {
    if (this.tipo == 0) {
      if (this.x < 0) {
        this.x = width;
      }
      this.x -= vel / 5;
    }
    if (this.tipo == 3) {
      if (this.x < 0) {
        this.x = width;
      }
      this.x -= vel / 5;
    }
    if (this.tipo == 1) {
      if (this.x > width) {
        this.x = 0;
      }
      this.x += vel / 5;
    }
    if (this.tipo == 4) {
      if (this.x > width) {
        this.x = 0;
      }
      this.x += vel / 5;
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
      ellipse(this.x, this.y, (50 * width) / 1500, (50 * height) / 1500);
      ellipse(this.x - 20, this.y - 10, (50 * width) / 1500, (50 * height) / 1500);
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
      rect(this.x, this.y, (50 * width) / 1500, (50 * height) / 1500);
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
      ellipse(this.x, this.y, (50 * width) / 1500, (50 * height) / 1500);
      push();
      translate(this.x, this.y);
      for (var r = 0; r < 10; r++) {
        rotate(30);
        ellipse(10, 10, (10 * width) / 1500, (10 * height) / 1500);
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
      rect(this.x, this.y, (500 * width) / 1500, (30 * height) / 1500);
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
      ellipse(this.x, this.y, (50 * width) / 1500, (50 * height) / 1500);
      ellipse(this.x - 20, this.y, (50 * width) / 1500, (50 * height) / 1500);
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
      ellipse(this.x, this.y, (100 * width) / 1500, (40 * height) / 1500);
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
          tipos[r] = 3;
          red[r] = new redBlood(random(0, width), random((anch1 * width) / 1500, (anch2 * height) / 1500), tipos[r]);
          virC++;
        }
      }
      if (dvr < 20) {
        if (red[r].type() == 1) {
          tipos[r] = 4;
          red[r] = new redBlood(random(0, width), random((anch3 * width) / 1500, (anch4 * height) / 1500), tipos[r]);
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
          tipos[r] = 0;
          red[r] = new redBlood(random(0, width), random((anch1 * width) / 1500, (anch2 * height) / 1500), tipos[r]);
          virC--;
        }
      }
      if (dvr < 20) {
        if (red[r].type() == 4) {
          tipo[r] = 1;
          red[r] = new redBlood(random(0, width), random((anch3 * width) / 1500, (anch4 * height) / 1500), tipos[r]);
          virC--;
        }

      }
    }
  }
}

function windowResized() {

  //si la ventana es agrandada
  if (windowWidth * windowHeight > area) {


    //la venas se contraen
    anch2 += 50;
    anch4 += 50;
    redL += 50;
    veces += 50;



  } else { //si la ventana se hace más pequeña
    //la venas se expanden y disminuyen los globulos rojos

    anch2 -= 50;
    anch4 -= 50;
    redL -= 50;
    veces -= 50;
  }

  for (var e = 0; e < redL; e++) {
    var x = random(0, width);
    var y = random((anch1 * width) / 1500, (anch2 * height) / 1500);
    red[e] = new redBlood(x, y, 0);
  }

  for (var m = redL / 2; m < redL; m++) {
    var x = random(0, width);
    var y = random((anch3 * width) / 1500, (anch4 * height) / 1500);
    red[m] = new redBlood(x, y, 1);
  }

  for (var w = 0; w < 10; w++) {
    var x = random(0, width);
    var y = random(0, height);
    if (!neutr[w].muerto) {
      neutr[w] = new neutrophiles(x, y);
    }
  }

  for (var v = 0; v < 2; v++) {
    var x = random(0, width);
    var y = random(0, height);
    if (!vir[v].muerto) {
      vir[v] = new virus(x, y);
    }
  }

  for (var c = 0; c < 3; c++) {
    var x = random(0, width);
    var y = random(0, height);
    if (!can[c].muerto) {
      can[c] = new cancer(x, y);
    }
  }

  for (var pa = 0; pa < 1; pa++) {
    var x = random(0, width);
    var y = ((anch1 + (anch2 - anch1) / 2) * height) / 1500;
    if (!par[pa].muerto) {
      par[pa] = new parasite(x, y);
    }
  }

  for (var eo = 0; eo < 7; eo++) {
    var x = random(0, width);
    var y = random(0, height);
    if (!eos[eo].muerto) {
      eos[eo] = new eosinophile(x, y);
    }
  }

  for (var b = 0; b < 4; b++) {
    var x = random(0, width);
    var y = random(0, height);
    if (!bac[b].muerto) {
      bac[b] = new bacteria(x, y);
    }
  }

  //se actualiza el nuevo tamano de la pantalla  en las variables w y h
  w = windowWidth;
  h = windowHeight;
  area = w * h; //se recalcula el area de la pantalla

  //se cambia el tamano del canvas para que sea del nuevo tamano de la pantalla
  resizeCanvas(w, h);

}