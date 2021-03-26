const sketchNumber = "13";
let bigT;

function preload() {
    bigT = loadImage('assets/bigT2.png');
}

function setup()  {
    noStroke();
    createCanvas(1000,1000);
    background(255)
///    image(bigT,0,0)

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

function draw() {
    
}


function mousePressed() {
	saveCanvas("sketch-13","png")

}