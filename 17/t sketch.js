const sketchNumber = "17";
let bigT;

function preload() {
    bigT = loadImage('assets/bigT.png');
}

function setup()  {
    noStroke();
    createCanvas(1000,1000);
    background(255)
///    image(bigT,0,0)

    unitSize = 20;
    for (i=0;i<height;i=i+unitSize) {
    	for (j=0;j<width;j=j+unitSize) {
    		pixelColor = bigT.get(j, i);
			
			fill(pixelColor);
            randomSize = random(10,15)
			ellipse(j,i,randomSize,randomSize)
        }
    }

}

function draw() {
    background(255)
        
        unitSize = 5;
        for (i=0;i<height;i=i+unitSize) {
            for (j=0;j<width;j=j+unitSize) {
                pixelColor = bigT.get(j, i);
                
                fill(pixelColor);
                randomSize = random(1,4)
                ellipse(j,i,randomSize,randomSize)
            }
        }
}


function mousePressed() {
	saveCanvas("sketch-17","png")

}