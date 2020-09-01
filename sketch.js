
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	





	
	//Create the Bodies Here.
	
	Engine.run(engine);
	box1= new Box (1200,640,150,20);
	box2= new Box (1125,575,20,150);
	box3= new Box (1280,575,20,150);

	ground = new Ground(700,670,1400,10)
ball =new Ball(100,300,70)




}


function draw() {
  rectMode(CENTER);
  background(255,255,255);


  
  
  
  ground.display()
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:1000,y:-1000});


}


}


