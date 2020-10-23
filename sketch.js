const Bodies = Matter.Bodies;
const World = Matter.World;
const Matter = Matter.Matter;


var obj1;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  obj1 = new Ground(800,300,60,70)

}

function draw() {
  background(255,255,255);  
  drawSprites();

    obj1.display();
}

