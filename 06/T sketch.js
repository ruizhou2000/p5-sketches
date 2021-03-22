function setup() {
  createCanvas(400, 400);
}

rect(0,0,1000,1000)

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function mousePressed() {
    saveCanvas("sketch-06","png")
}