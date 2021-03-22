function setup() {
    var c = createCanvas(1000, 1000); //WIDTH AND HEIGHT IN PIXELS
    background(255);

    stroke(120)
    strokeWeight(50)
    rect(100,100,800,300)

   
    rect(350,400,300,400)
}
 
	function mousePressed() {
	saveCanvas("sketch-03","png")
}