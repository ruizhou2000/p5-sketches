const sketchNumber = "22";
let bigT;

let img;
function preload() {
    bigT = loadImage('assets/bigT.png');
}

function setup()  {
    createCanvas(1000,1000);
    image(bigT,0,0)

}


function mousePressed() {
	saveCanvas("sketch-14","png")
}