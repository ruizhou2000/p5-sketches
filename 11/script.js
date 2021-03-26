const NUM_POINTS_IN_SPRAY = 3;
const LIFE_DECAY_RATE = 2;
const STARTING_LIFE_VAL = 255;
let pointsArr = [];

//////////////
//  SETUP
/////////////
function setup() {
  var c = createCanvas(1000, 1000);


}

//////////////
//  DRAW
/////////////
function draw() {
  background(map(mouseX, 0, windowWidth, 150, 255));

  // text('pointsArr.length:  ' + pointsArr.length, 10, 90);

  // add new points if user is moving mouse
  if (pmouseY !== mouseX && pmouseY !== mouseY) {
    for (let i = 0; i < NUM_POINTS_IN_SPRAY; i++) {
      pointsArr.push(new Point(mouseX, mouseY));
    }
  }

  beginShape(TRIANGLE_STRIP);
  for (let i = pointsArr.length - 1; i >= 0; i--) {
    pointsArr[i].update();
    pointsArr[i].display();

    if (pointsArr[i].isDead()) {
      // this point is dead - cut off the other points since they are already dead as well
      pointsArr = pointsArr.slice(i, pointsArr.length);

      break;
    }
  }
  endShape();

}

//////////////
//  Point
/////////////
class Point {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.acceleration = createVector(0, 0);
    this.life = STARTING_LIFE_VAL;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.life -= LIFE_DECAY_RATE;
  }

  isDead() {
    if (this.life <= 0) {
      return true;
    } else {
      return false;
    }
  }

  applyForce(force) {
    let f = force.copy();
    this.acceleration.add(f);
  }

  display() {
    push();
    stroke('rgba(0, 0, 0, ' + this.life / STARTING_LIFE_VAL + ')');
    vertex(this.position.x, this.position.y);
    pop();
  }}

  function mousePressed() {
  saveCanvas("sketch-11","png")
}