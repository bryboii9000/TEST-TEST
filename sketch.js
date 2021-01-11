
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var floor,bintrash;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(250,width/2,12);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);
  
  drawSprites();
 
}



