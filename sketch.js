const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;


var ball;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11;
var ground;

var chain;

function preload()
{

}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ball=new Ball(450,300,20);

  ground=new Ground(400,390);
  box1=new Box(600,350,40,40); 
  box2=new Box(600,330,40,40);
  box3=new Box(600,310,40,40)
  box4=new Box(600,290,40,40)
  box5=new Box(600,270,40,40)
  box6=new Box(600,250,40,40)
  box7=new Box(600,230,40,40);

  box8=new Box(700,350,40,40);
  box9=new Box(700,330,40,40);
  box10=new Box(700,310,40,40);
  box11=new Box(700,290,40,40);
  // box8=new Box(700,350,40,40);
  
  chain=new Sling(ball.body,{x:450,y:30})


}

function draw() {
  background(0);
  
  Engine.update(engine);

  ball.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
 // box12.display();

 chain.display();
  
}

function mouseDragged()
{
  Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:100})
}