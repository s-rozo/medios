var posy= 40;
var posx=40;
var fila=0
function setup() {
  createCanvas(720, 720);
	background(255);
	
	noStroke();
	fill(0);
	//Repite la primera fila en la tercera posicion
	for(var a = 0; a<2;a++)
	{
		// Crea los cuadrados de la esquina superior izquierda y lo repite horizontal.
		for (var c = 0; c<2; c++)
		{
					if(c==1 && a==1)
			{
				fill(255,255,0);
			}
			else
			{
				fill(0);
			}
			//Repite las cuatro columnas para crear el cuadrado 1
			for(var l = 0; l<2; l++)
			{
				//Primera columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
				//segunda columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx+20,posy+40 );
					triangle (posx,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
				//tercera columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					triangle (posx,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
				//cuarta columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
			}
			posx=360;
		}
		posx = 200;
		//Crea el cuadrado 2 y su copia
		for (var p = 0; p<2; p++)
		{
			if(p==0 && a==1)
			{
				fill(255,255,0);
			}
			else
			{
				fill(0);
			}
			//Repite las cuatro columnas para crear el cuadrado 2
			for(var n = 0; n<2; n++){
				//Primera columna 2
				for (var i = 0; i<2; i++)
				{
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx,posy+40 );
					triangle (posx+20,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
				//segunda columna 2
				for (var i = 0; i<2; i++)
				{
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
				//tercera columna 2
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					posy = posy+20;
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx+20,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
				//Cuarta columna 2
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					triangle (posx+20,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx+20,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 40+fila;
				posx = posx+20;
		}
		posx = posx+160
		}
			fila = 320;
	}
	posy = 200;
	fila = 0;
	posx = 40;
	//Repite la segunda fila en la cuarta fila
		for( b = 0; b<2;b++)
	{
		// Crea el primer y tercer cuadrado de la segunda fila
		for ( x = 0; x<2; x++)
		{
			if(x==1 && b==0)
			{
				fill(255,255,0);
			}
			else
			{
			fill(0);
			}
			//Repite las cuatro columnas para crear el cuadrado 3
			for( y = 0; y<2; y++){
				//Primera columna 3
				for (var h = 0; h<2; h++)
				{
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					triangle (posx+20,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx+20,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 200 + fila;
				posx = posx+20;
				//segunda columna 3
				for (var j = 0; j<2; j++)
				{
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx,posy+40 );
					triangle (posx+20,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 200 + fila;
				posx = posx+20;
				//tercera columna 3
				for (var k = 0; k<2; k++)
				{
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx,posy+60);
					posy = posy+60;
				}
				posy = 200 +fila;
				posx = posx+20;
				//cuarta columna 3
				for (var w = 0; w<2; w++)
				{
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					posy = posy+20;
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx+20,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx,posy+60);
					posy = posy+60;
				}
				posy = 200+fila;
				posx = posx+20;
		}
			posx = 360;
		}
	posx = 200;
	//Crea el segundo y cuarto cuadrado de la segunda fila
	for (var p = 0; p<2; p++)
	{
		if(p==0 && b==0)
		{
			fill(255,255,0);
		}
		else
		{
			fill(0);
		}
		//Repite las cuatro columnas para crear el cuadrado 4
		for(var n = 0; n<2; n++){
				//Primera columna 4
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx+20,posy+40 );
					triangle (posx,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 200+fila;
				posx = posx+20;
				//segunda columna 4
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					triangle (posx,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 200+fila;
				posx = posx+20;
				//tercera columna 4
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 200+fila;
				posx = posx+20;
				//Cuarta columna 4
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 200+fila;
				posx = posx+20;
		}
		posx = posx+160
	}
		fila =320;
	}
  
  fila = 0;
  posy = 360;
  posx=40;
  //Crea el cuadrado faltante de la tercera fila
  	for(var l = 0; l<2; l++)
			{
				//Primera columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 360+fila;
				posx = posx+20;
				//segunda columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx+20,posy+40 );
					triangle (posx,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 360+fila;
				posx = posx+20;
				//tercera columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					triangle (posx,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 360+fila;
				posx = posx+20;
				//cuarta columna 1
				for (var i = 0; i<2; i++)
				{
					triangle (posx,posy,posx+20,posy,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 360+fila;
				posx = posx+20;
			}
  posy = 520;
  posx = 40;
    //Crea el cuadrado faltante de la cuarta fila
  for( y = 0; y<2; y++){
				//Primera columna 3
				for (var h = 0; h<2; h++)
				{
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					triangle (posx+20,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx+20,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 520 + fila;
				posx = posx+20;
				//segunda columna 3
				for (var j = 0; j<2; j++)
				{
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx,posy+40 );
					triangle (posx+20,posy+40,posx,posy+60,posx+20,posy+60);
					posy = posy+60;
				}
				posy = 520 + fila;
				posx = posx+20;
				//tercera columna 3
				for (var k = 0; k<2; k++)
				{
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					posy = posy+20;
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx,posy+20,posx+20,posy+20,posx,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx,posy+60);
					posy = posy+60;
				}
				posy = 520 +fila;
				posx = posx+20;
				//cuarta columna 3
				for (var w = 0; w<2; w++)
				{
					triangle (posx,posy,posx+20,posy,posx,posy+20);
					posy = posy+20;
					triangle (posx+20,posy,posx,posy+20,posx+20,posy+20);
					triangle (posx+20,posy+20,posx,posy+40,posx+20,posy+40 );
					triangle (posx,posy+40,posx+20,posy+40,posx,posy+60);
					posy = posy+60;
				}
				posy = 520+fila;
				posx = posx+20;
  }
}
