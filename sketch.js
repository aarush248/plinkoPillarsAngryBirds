const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var  horizBorderRight;

var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight = 300;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
  //createCanvas(800,400);

  ground = new Ground(240, 805, 800, 20)
  
  borderRight=new Border(480, 400, 20, 800)
  
  
  BorderLeft=new Border(-5, 400, 20, 800)
  

  
  
}

function draw() {
  //background(255,255,255);  
  push();
  stroke("brown")
  background("black")
  pop();
  
  borderRight.display()
  BorderLeft.display();

  ground.display();

  Pillars();
  
  drawSprites();
}

function Pillars(){
  for (var k = 0; k<= width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }
}