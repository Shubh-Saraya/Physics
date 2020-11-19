// namspqacing 
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

// creating variable 
var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  // creating engine
  engine=Engine.create();
  // aading world 
  world=engine.world;
  //passing extra property 
   var option={
     isStatic:true
   }
  // creating object or bodies 
  ground=Bodies.rectangle(200,390,50,50,option);
  //attaching body and world
  World.add(world,ground);
  
  var option1={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,option1);
  World.add(world,ball);



}

function draw() {
  background("pink"); 
  // updating engine
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}