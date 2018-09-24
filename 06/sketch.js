var deva;
var duracion;
var amp;
var ang = 0;
var colPet = 0;
var colPet2 = 0;
var colPet3 = 0;
var colPet4 = 0;
var colPet5 = 0;
var colPet6 = 0;
var filLetra = 255;
var diametro;
var colFlor = 255;
var colFlor2 = 255;
var colFlor3 = 255;
var colFlor4 = 255;
var colFlor5 = 255;
var colFlor6 = 255;
var colFlor7 = 255;
var colFlor8 = 255;
var colFlor9 = 255;
var colFlor10 = 255;
var colFlor11 = 255;
var colFlor12 = 255;
var colFlor13 = 255;
var colFlor14 = 255;
var colFlor15 = 255;
var colFlor16 = 255;
var colFlor17 = 255;
var colFlor18 = 255;
var vel = 10000;
var estrellas = [];
var r = 0;
var g = 0;
var b = 0;
var sol = 0;

function preload() {
  deva = loadSound('assets/Deva.mp3');
}

//Se carga la cancion junto con las caracteristicas de volumen y se crean las coordenadas de las estrellas.
function setup() {
  createCanvas(2000, 2000);
  angleMode(DEGREES);
  duracion = deva.currentTime();
  amp = new p5.Amplitude();
  deva.play();
  for (var s = 0; s < 200; s++) {
    estrellas.push({
      x: random(2000),
      y: random(2000)
    });
  }


}

function draw() {
  //Se sube el color del fondo de acuerdo a la duracion de la cancion y se cambia el color al final de la misma.
  background(r, g, b);
  if (duracion <= 12) {
    r = int(duracion) - 8;
    g = int(duracion) + 3;
    b = int(duracion * 6) + 8;
  }
  if (duracion >= 275 && r <= 15 && g <= 65 && b <= 255) {
    r += 0.6;
    g += 2.6;
    b += 8.8;
  }

  //Duracion actual de la cancion
  duracion = deva.currentTime();
  //Para motivos de calculo y debugging
  console.log(r + ' ' + g + ' ' + b + ' ' + duracion);
  //diametro de los petalos al centro de la flor dependiendo del volumen;
  diametro = amp.getLevel() * 150 + 40;

  if (mouseIsPressed) {
    mousePressed();
    vel = map(mouseX, 0,width, 19200,800);
  }
  //titulo de la cancion
  if (duracion <= 25.5) {
    fill(255, 255, 255, filLetra);
    textSize(200);
    textFont('Parisienne');
    textAlign(CENTER);
    text('Deva Mahal ' + 'Down to You', width / 8, height / 2.5, 1500, 2000);
    filLetra -= 1;

  }
  //aparece la flor central y las estrellas cuyo tamano depende del volumen tambien
  if (duracion >= 5) {
    push();
    fill(colFlor, colFlor2 - 102, colFlor3 - 100, colPet)
    stroke(255, 100, 255, colPet);
    strokeWeight(5);

      for (var e = 0; e < estrellas.length; e++) {
        push();
        fill(255,255,255,255-sol);
        noStroke();
        var n = estrellas[e];
        ellipse(n.x, n.y, amp.getLevel() * 55, amp.getLevel() * 55);
        pop();
      }

    for (var i = 0; i < 12; i++) {
      push();
      translate(width / 2, height / 2);
      translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

      beginShape();
      bezier(0, 0, 30, -10, 30, -50, 0, -110);
      bezier(0, 0, -30, -10, -30, -50, 0, -110);
      ang += 0.5;
      endShape();
      pop();
    }

    if (colPet <= 190 && duracion < 235) {
      colPet++;
    }
    if (duracion >= 235) {
      colPet -= 2;
    }

    pop();
  }


  //Aparece el segundo anillo de flores
  if (duracion >= 26) {

    fill(colFlor4, colFlor5 - 102, colFlor6 - 100, colPet2)
    stroke(255, 100, 255, colPet2);
    strokeWeight(5);

    for (var p = 0; p < 6; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 200) - millis() / vel, 200)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }

    if (colPet2 <= 190 && duracion < 245) {
      colPet2++;
    }
    if (duracion >= 245) {
      colPet2 -= 2;
    }
  }

  //Tercer anillo de flores
  if (duracion >= 39) {

    fill(colFlor7, colFlor8 - 102, colFlor9 - 100, colPet3)
    stroke(255, 100, 255, colPet3);
    strokeWeight(5);

    for (var p = 0; p < 12; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 100) - millis() / vel, 400)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }
    if (colPet3 <= 190 && duracion < 250) {
      colPet3++;
    }
    if (duracion >= 250) {
      colPet3 -= 2;
    }
  }

  //Cuarto anillo de flores
  if (duracion >= 50.9) {

    fill(colFlor10, colFlor11 - 102, colFlor12 - 100, colPet4)
    stroke(255, 100, 255, colPet4);
    strokeWeight(5);


    for (var p = 0; p < 16; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 75) - millis() / vel, 600)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }

    if (colPet4 <= 190 && duracion < 260) {
      colPet4++;
    }
    if (duracion >= 260) {
      colPet4 -= 2;
    }
  }


  //Quinto anillo de flores
  if (duracion >= 57.7) {

    fill(colFlor13, colFlor14 - 102, colFlor15 - 100, colPet5)
    stroke(255, 100, 255, colPet5);
    strokeWeight(5);

    for (var p = 0; p < 24; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 50) - millis() / vel, 800)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }
    if (colPet5 <= 190 && duracion < 275) {
      colPet5 += 2;
    }
    if (duracion >= 270) {
      colPet5 -= 2;
    }
  }

  //Ultimos tres anillos de flores
  if (duracion >= 64.4) {

    fill(colFlor16, colFlor17 - 102, colFlor18 - 100, colPet6)
    stroke(255, 100, 255, colPet6);
    strokeWeight(5);

    for (var p = 0; p < 27; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 50.5) - millis() / vel, 1000)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }
    for (var p = 0; p < 27; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 50.5) - millis() / vel, 1200)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }
    for (var p = 0; p < 27; p++) {
      for (var i = 0; i < 12; i++) {
        push();
        translate(width / 2, height / 2);
        v = p5.Vector.fromAngle((p * 50.5) - millis() / vel, 1400)
        translate(v.x, v.y);
        translate(p5.Vector.fromAngle((i * 100) - millis() / (vel/4), diametro));

        beginShape();
        bezier(0, 0, 30, -10, 30, -50, 0, -110);
        bezier(0, 0, -30, -10, -30, -50, 0, -110);
        ang += 0.5;
        endShape();
        pop();
      }
    }

    if (colPet6 <= 190 && duracion < 280) {
      colPet6 += 5;
    }
    if (duracion >= 280) {
      colPet6 -= 3;
    }

  }

	if(duracion >= 275) 
  {
    push();
   fill(255,255,0,sol);
    noStroke();
  	ellipse(1000,1000, amp.getLevel()+500,amp.getLevel()+500);
    pop();
    sol++;
  }
}

 //Metodo que cambia el color del anillo dependiendo del que se haga click.
  function mousePressed() {
    var d = dist(mouseX, mouseY, 1000, 1000);
    if (d < 100) {
      colFlor = random(255);
      colFlor2 = random(255);
      colFlor3 = random(255);
    } else if (d > 100 && d < 300) {
      colFlor4 = random(255);
      colFlor5 = random(255);
      colFlor6 = random(255);
    } else if (d > 300 && d < 500) {
      colFlor7 = random(255);
      colFlor8 = random(255);
      colFlor9 = random(255);
    } else if (d > 500 && d < 700) {
      colFlor10 = random(255);
      colFlor11 = random(255);
      colFlor12 = random(255);
    } else if (d > 700 && d < 900) {
      colFlor13 = random(255);
      colFlor14 = random(255);
      colFlor15 = random(255);
    } else if (d > 900) {
      colFlor16 = random(255);
      colFlor17 = random(255);
      colFlor18 = random(255);
    }

  }