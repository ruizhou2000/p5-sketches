function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255);
	
	fill(0)
	noStroke();
	//stroke(225)
	noStroke(255)

    ellipse(550,400,500,100)
    rect(500,400,100,500)

    
}

function mousePressed() {
	saveCanvas("sketch-01","jpg")
}