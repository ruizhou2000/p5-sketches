//drag the mouse to look around!
//there's no vanishing point
function setup() {
  createCanvas(1000, 1000, WEBGL);
  ortho(-width / 10, width / 10, height / 10, -height / 10, 0, 500);
  ortho(-width / 10, width / 10, height / 10, -height / 10, 100, 100);
}
function draw() {
  background(200);
  orbitControl();
  normalMaterial();

  rotateX(0.2);
  rotateY(-0.2);
  push();
  translate(-15, 0, sin(frameCount / 30) * 65);
  box(30);
  pop();
  push();
  translate(15, 0, sin(frameCount / 30 + PI) * 65);
  box(30);
  pop();
}
  


    

function mousePressed() {
	saveCanvas("sketch-04","png")
}