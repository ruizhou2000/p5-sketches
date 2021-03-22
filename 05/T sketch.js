function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    
    rect(0,0,1000,1000)
	
	fill(255)
	//stroke(225)
	noStroke(255)

    ellipse(550,400,500,100)
    rect(500,400,100,500)

    var i = 0;
    stroke(0)
    while(i<100) {
    	//add our code here

    	ellipse(i*10,200,250,250)
    	i=i+1;

    	rect(400,330,200,600)


    }

    
}

function mousePressed() {
	saveCanvas("sketch-05","png")
}