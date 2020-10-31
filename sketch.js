
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld
var box1,box2;
var ground;


function setup() {
  createCanvas(400,400);
  
  myengine=Engine.create();
  myworld=myengine.world;


box1 = new Box(200,100,30,25);
box2 = new Box(210,200,25,30);

ground= new Ground(200,300,400,5);

}

function draw() {

  Engine.update(myengine);

  background(0); 

  box1.display();
  box2.display();

ground.display();

}