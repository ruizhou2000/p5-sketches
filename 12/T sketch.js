function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255);
	
	fill(255,0,0)
	noStroke();
	//stroke(225)

    fill(255,200,200)
    rect(100,100,800,200)

    fill(127,0,0)
    rect(400,300,10,600)

    fill(127,0,0)
    rect(420,300,10,600)

    fill(127,0,0)
    rect(440,300,10,600)

    fill(127,0,0)
    rect(460,300,10,600)

    fill(127,0,0)
    rect(480,300,10,600)

    fill(127,0,0)
    rect(500,300,10,600)

    fill(127,0,0)
    rect(520,300,10,600)

    fill(127,0,0)
    rect(540,300,10,600)

    fill(127,0,0)
    rect(560,300,10,600)

    fill(127,0,0)
    rect(580,300,10,600)
}

function mousePressed() {
	saveCanvas("sketch-12","png")
}