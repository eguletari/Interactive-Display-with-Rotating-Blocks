 // we create a class so we can create multiple objects of it.
 
 class Block {
    // these are functions
    // all classes must have constructor functions
    //It is executed automatically when a new object is created
    //It is used to initialize object properties
    constructor ( x, y) {
        // variables 
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c=0;
    } 

// these are functions
// this is the display for drawing the rectanglle
display () {
  noFill();
  stroke(this.c);
  push(); // this saves the data in translate and rotate
  translate(this.x, this.y, ); // this fuction translate the origin point  
  rotate(this.angle);
  if (this.angle > 0 && this.angle < 45) {
    this.drawRect();
  } else if (this.angle >= 45 && this.angle < 60) {
    this.drawTriangle();
  } else if (this.angle >= 60 && this.angle < 70) {
    this.drawCircle();}
    else {
    this.drawx();
  }
  pop();
 }


drawx(){
    let margin = -size/2 
    line(margin + offset/2, margin + offset/2, margin + size - offset/2, margin + size - offset/2); // this takes a totall of 4 arguments x & y cordinates of the two points that would connect and become a line
    line(margin + size - offset/2, margin + offset/2, margin + offset/2, margin + size - offset/2,); // this takes a totall of 4 arguments x & y cordinates of the two points that would connect and become a line
   }


drawRect(){
    stroke(46, 109, 180); // Optional: blue outline
    fill( 0, 111, 205); // blue color for the fill
    rect( 0, 0, size - offset, size - offset);  // this function takes a total of 4 arguments: x & y cordinates width & height
     }

drawTriangle() {
    let margin = -size / 2; // Define the starting margin
    // Set the color for the triangle
    fill(0, 172, 159); // green color for the fill
    stroke(0, 172, 159); // Optional: green outline
    strokeWeight(2); // Optional: line thickness
  
    // Draw the triangle using relative coordinates
    triangle(
      margin + offset / 2, margin + offset / 2,             // Vertex 1
      margin + size - offset / 2, margin + offset / 2,     // Vertex 2
      margin + size / 2, margin + size - offset / 2        // Vertex 3
    );
  }

drawCircle() {
    // Set the color for the circle
    fill(223, 0, 36); // red color for the fill
    stroke(223, 0, 36);       // Optional: red outline
    strokeWeight(2);   // Optional: line thickness
  
    // Draw the circle at the center of the block
    ellipse(0, 0, size - offset, size - offset); // x, y, width, height
  }
  
  


move (){
    // if mouse is moving check distance between mouse location and ceter of square
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0){
        let distance = dist(mouseX, mouseY, this.x, this.y );
        if ( distance < distmouse){
          this. angle += 2 ; 
          this.c =255;
          }   
    }
  // we use this if else statement to make the rotation comes to 90 even after we've removed the mouse
    if(this.angle > 0 && this.angle < 90) {
        this.angle += 2;
        if (this.c > 70) {
            this.c -= 3;
        }       
    } else {
        this.angle=0;
        this.c=70;
    }
   } 
 }