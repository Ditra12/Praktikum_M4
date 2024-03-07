let walkers = [];

class Walker{
  constructor(posisiX, posisiY){
    this.x = posisiX;
    this.y = posisiY;
  }

  visual() {
    noStroke();
    let c = color(random(50), random(50), random(50));
    fill (c);
    ellipse(this.x, this.y, 10, 10);
  }
  jalan(){
    var stepX = int(random(-50,5));
    var stepY = int(random(-50,5));

    this.x = this.x + stepX;
    this.y = this.y + stepY;
  }
}
function setup() {
 createCanvas(400, 400);

 for (let i=0; i<1000;i++){
  walkers[i] = new Walker(random(400), random(400))
 }
}

function draw() {
  background(220);
  for (let i=0; i<1000;i++){
    walkers[i].visual();
    walkers[i].jalan();
  }
}
