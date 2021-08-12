
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1000,500,20,120)

	var ball_options={
     isStatic: false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  function keyPressed() {
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05});  
  }
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}

//Dear, teacher. I tried different ways to fix the game but Im kinda confused. What did I do wrong? And also thank you.



