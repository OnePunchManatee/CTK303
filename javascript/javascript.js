let guf = [];
let state = 0;
let toggle=false;
let rei;
let f1;
let tally = 0;


function setup() {
  var canvas = createCanvas(1200, 900);
  canvas.parent('EOECanvas');
  noStroke();
  textFont(f1);
  textAlign(CENTER);
}

function preload() {
  rei = loadImage("reihands.png");
  f1 = loadFont("tf2build.ttf");
}

function draw() {
  background(24, 25, 61);
  image(rei, 0, 0);
  tally++;
  if(toggle == true){
  guf.push(new Soul());
  for (let i = 0; i < guf.length; i++) {
    guf[i].display();
    guf[i].move();
    if (guf[i].time < 0) {
      guf.splice(i, 1);
    }
  }
  fill('white');
  text("This will definitely hurt the economy ", width/2, height-140);
      push();
      textSize(20);
      text("Meatbags tanged: " + tally, width/2, height-30);
      pop();
  }

      if(!toggle){
      background(24, 25, 61);
      fill("white");
      textSize(40);
      push();
      stroke(1);
      text("Enter Gendo's Paradise?", width/2, height/2);
      pop();
      }
}

class Soul {
  // constructor
  constructor() {
    this.startX = 100
    this.startY = height/2;
    this.pos = createVector(width / 7.5, height/2-60);
    this.o = 0;
    this.r = random(220, 255);
    this.g = random(0, 20);
    this.b = random(60, 80);
    this.size = 6;
    this.duration = 295;
    this.time = 290;
    this.derivative = random(-4, 4);
    this.accel = this.derivative;
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.o);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.x+=3;
    this.o+=40;
    this.time -=1;
    this.pos.y-=this.derivative;
    this.derivative-=(this.accel/(this.duration/2));
  }
}

function mouseReleased() {
  state = 1;
  toggle = true;
}