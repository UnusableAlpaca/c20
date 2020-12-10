var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200,200,50,50);
  a.shapeColor = ("blue");
  b.shapeColor = ("blue");
  
}

function draw() {
  background(255,255,255);  
  a.x = mouseX;
  a.y = mouseY;
  if (a.x-b.x<50 & b.x-a.x<50 & a.y-b.y<50 & b.y-a.y<50){
    a.shapeColor = ("orange");
    b.shapeColor = ("orange");
  }
  else {
    a.shapeColor = ("blue");
  b.shapeColor = ("blue");
  }
  drawSprites();
}