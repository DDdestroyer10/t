
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,ground,t;

function preload()
{
	
}

function setup() {
  createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

    tree = new Tree(300,500);
    ground = new Ground(400,750,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  fill("white");
  ground.display();
  
  
  drawSprites();
 
}



