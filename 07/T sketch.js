function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255);
	
	fill(255,0,0)
	noStroke();
	//stroke(225)

    // 75% opacity.
    fill(255,0,0,191);
    rect(50,100,800,150)
    
    //55% opacity.
    fill(255,0,0,127);
    rect(100,150,800,150);

    //25% opacity.
    fill(255,0,0,63);
    rect(200,200,800,150)

    fill(160,0,0)
    rect(400,300,200,600)

    // 75% opacity.
    fill(255,0,0,191);
    rect(500,300,200,600)


}

function mousePressed() {
	saveCanvas("sketch-07","png")
}