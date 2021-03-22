function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255,200,200);
	
	fill(255,0,0)
	noStroke();
	//stroke(225)

    
    fill(255)
    rect(80,100,300,10)

    fill(255)
    rect(80,130,300,10)

    fill(255)
    rect(80,160,300,10)

    fill(255)
    rect(80,190,300,10)

    fill(255)
    rect(80,220,300,10)

    fill(255)
    rect(80,250,300,10)

    fill(255)
    rect(400,100,200,700)

    fill(255)
    rect(620,100,300,165)
}

function mousePressed() {
	saveCanvas("sketch-10","png")
}