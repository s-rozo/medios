var secs;
var mins;
var hours;
var tiempo;
var despierto;
var movTemp;

var tempDor;
var dormido;

var descarga;
var carga;

var colback = 0;

var posXB = 0;
  var posXR = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(colback);
  
  //Variables de hora
  secs = second();
  mins = minute();
  hours = hour();
  
  //Movimiento de los rect rojos por segundo en el canvas
  movTemp = map(secs,0,59,(-200*width)/400,width );
  
  //Calculos de cuanto tiene que estar cargada la pila dependiendo del porcentaje y la hora del dia.
  //Si estoy despierto o dormido.
  tiempo = hours + mins/60 + secs/3600+3;
  despierto = tiempo-4.5
  descarga = (despierto/18)*100;
  carga= -height/4+(descarga*height)/400; 
  if(tiempo >=22.5 || tiempo <= 4.5)
  {
    if(tiempo >=22.5 || tiempo <= 23.999999)
    {
    tempDor = tiempo - 22.5;
    }  
    if(tiempo <= 4.5)
    {
      tempDor = 2+tiempo;
    }
    
    descarga = (tempDor/6)*100;
    carga = -((descarga*height)/400);
  }
  
  
  

  //rectangulos azules y rojos junto con su movimiento que muestra el estres de ida y vuelta a casa.
  push();
  noStroke();
  fill(0,0,255,171);
  rect(posXB, height/8, (200*width)/400,(50*height)/400);
  if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
  	posXB = ((width) - millis()%1000)*20;
  }
  else
  {
   posXB = (width) - ((millis()%1000)*width/400);
  }
  
  push();
  noStroke();
  fill(0,0,255,171);
  rect(posXB, height/2.3, (200*width)/400,(50*height)/400);
  if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
  	posXB = ((width) - millis()%1000)*20;
  }
  else
  {
   posXB = (width) - ((millis()%1000)*width/400);
  }
  pop();
  
    push();
  noStroke();
  fill(0,0,255,171);
  rect(posXB, height/1.3, (200*width)/400,(50*height)/400);
  if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
  	posXB = ((width) - millis()%1000)*20;
  }
  else
  {
   posXB = (width) - ((millis()%1000)*width/400);
  }
  pop();
  
  push();
  noStroke();
  fill(255,0,0,171);
  rect(posXR, height/1.65, (200*width)/400,(50*height)/400);
 if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
    if(posXR > width)
    {
  	posXR++;
    }
  }
  else
  {
   posXR = movTemp; 
  }
  pop();
  
  push();
  noStroke();
  fill(255,0,0,171);
  rect(posXR, height/1.07, (200*width)/400,(50*height)/400);
  if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
    if(posXR > width)
    {
  	posXR++;
    }
  }
  else
  {
   posXR = movTemp; 
  }
  pop();
  
    push();
  noStroke();
  fill(255,0,0,171);
  rect(posXR, height/3.6, (200*width)/400,(50*height)/400);
  if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
    if(posXR > width)
    {
  	posXR++;
    }
  }
  else
  {
   posXR = movTemp; 
  }
  pop();
  
   
    push();
  noStroke();
  fill(255,0,0,171);
  rect(posXR, -height/25, (200*width)/400,(50*height)/400);
  if((tiempo > 17.5 && tiempo <20.5)||(tiempo > 6 && tiempo < 8.5))
  {
    if(posXR > width)
    {
  	posXR=-200;
    }
    posXR = posXR +((100*width)/400);
  }
  else
  {
   posXR = movTemp; 
  }
  pop();
  
  //Construccion de la pila con su establecimiento de carga.
  
  stroke(255) 
	fill(0);
  strokeWeight(15);
  rect(width/2.4,height/2.7,width/5,height/3);
  rect(width/2.2,height/3,width/7.8,height/27);
  
  push();
  noStroke();
  if(carga < -20)
  {
  	fill(0,255,0);
  }
  else
  {
    fill(255,0,0);
  }
  rect(width/2.37,height/1.43,width/5.2,carga);
  pop();
  
  //Aparicion del rayo de carga dependiendo de la carga y la hora.
  push();
  fill(255);
  if(carga >= -20 || (tiempo > 22.5 || tiempo < 4.5))
  {
    beginShape(CLOSE)
    vertex(width/1.9,height/2.1);
  	vertex(width/1.98,height/1.9);
  	vertex(width/1.9,height/1.9);
  	vertex(width/1.9,height/1.8);
  	vertex(width/1.85,height/1.93);
  	vertex(width/1.9,height/1.93);
    endShape()
  }
  pop();
}