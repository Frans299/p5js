var x, y;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 200;
  v = 5;
}

function draw() {
	background(250,0,0);
  
  ellipse(x,y,50,50);
  x = x + v;

  if(x > 500){
    v = -5;
  }

  if(x < 0){
    v = 5;
  }
}