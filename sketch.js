
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1
var leftSide, rightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options = {
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(100,100,20, ball_options)
	World.add(world, ball)

	ground1 = new ground(width/2,670,width,20)
	leftSide = new ground(100,600,20,120)
	rightSide =  new ground(400,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display()
  leftSide.display()
  rightSide.display()

  ellipse(ball.position.x, ball.position.y, 20, 20)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:100, y:-100})
	}
}



