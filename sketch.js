let distmouse = 20;  // this is a global variable and can be used anywhere 
let cols; let rows; let size = 10; let offset = 4;
let blocks = [];  // this is an array 

function setup() {
  createCanvas(1900, 400);
  rectMode(CENTER) // THIS FUCTION CENTERS THE RECTANNGLE
  angleMode(DEGREES)
  cols = width/size;
  rows = height/size;
  

 // 2darray with a nested for loop
   for  (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for ( let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size/2 + i * size, size/2 + j * size) // this is a block object
    }
   }
}

function draw() {
  background(0); 
  for  (let i = 0; i < cols; i++) {
    for ( let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
   }   
}
