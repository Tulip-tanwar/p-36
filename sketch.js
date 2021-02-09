const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constrain=Matter.Constrain;

var engine,world,
var ground;

var ground;
var dog;

function setup() {
  createCanvas(800,400);
  engine=Engine.create;
  World=engine.world;

  ground=new Ground(600,600,1200,20);
  dog=new Dog(600,600,1200,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  drawSprites();
}