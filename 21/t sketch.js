const sketchNumber = "21";
let bigT;

function preload() {
    bigT = loadImage('assets/bigT.png');
}

function setup()  {
    createCanvas(1000,1000);
    background(255)
    //image(bigT,0,0)

    for (i=0;i<height;i=i+50) {
    	for (j=0;j<width;j=j+50) {
    		pixelColor = bigT.get(j, i);
			
			fill(pixelColor);
            randomSize = random(20,50)
			ellipse(j,i,randomSize,randomSize)
        }
    }

}





function mousePressed() {
	saveCanvas("sketch-21","png")

}