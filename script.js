class ball {
  constructor(x, y, h, w, vx, vy){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
  }
}

drawball(){
  ellipse(this.x, this.y, this.w, this.y);
  this.x = this.x + this.x;
  this.y = this.y + this.y;

  if(this.x <= 0 || this.x > 500){
    this.vx = this.vx * -1;
  }

  if(this.y <= 0 || this.y > 400){
    this.vy = this.vy * -1;
  }
}

function setup() {
	createCanvas(500, 400);
  background(250,0,0);

  ball1 = new ball(0, 300, 50, 50, 5, 5)
}






 