function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255,200,200);
	
	fill(255,0,0)
	noStroke();
	//stroke(225)

    
    fill(255)
    rect(80,100,850,10)

    fill(255)
    rect(80,150,850,10)

    fill(255)
    rect(80,200,850,10)

    fill(255)
    rect(80,250,850,10)

    fill(255)
    rect(80,300,850,10)

    fill(255)
    rect(80,350,850,10)

    fill(255)
    rect(330,400,350,400)
}

function mousePressed() {
	saveCanvas("sketch-09","png")
}