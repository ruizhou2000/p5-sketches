function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    //rect(0,0,1000,1000)
   



    var i = 0;
    stroke(0)
    //nofill();	
    while(i<100){
    	//add our code here

    	ellipse(random(1000),random(1000),250,250)
    	i=i+1;
    }

	fill(0)
	noStroke();
	//stroke(225)
	noStroke(255)

    rect(315,300,500,100)
    rect(500,300,100,500)

    
}

function mousePressed() {
	saveCanvas("sketch-02","png")
}