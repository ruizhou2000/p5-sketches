function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255);
	
	fill(255,0,0)
	noStroke();
	//stroke(225)

    fill(255,200,200)
    rect(100,100,800,200)
    
    // 75% opacity.
    fill(255,0,0,191);
    rect(200,200,800,200);

    fill(160,0,0)
    rect(400,300,200,600)
}

function mousePressed() {
	saveCanvas("sketch-04","png")
}