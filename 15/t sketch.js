const sketchNumber = "22";
let T2;

let img;
function preload() {
    T2 = loadImage('assets/T2.png');
}

function setup()  {
    createCanvas(1000,1000);
    image(T2,0,0)

}


function mousePressed() {
	saveCanvas("sketch-15","png")
}