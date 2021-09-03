var player;
var edges;

var barricade1;
var barricade2;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;

var parrot,parrotImg;

function preload(){
parrotImg=loadImage("Parrot.png");
}

function setup() {
  createCanvas(1500,600);
  player=createSprite(40,380,30,30);
  player.shapeColor="green";

  barricade1=createSprite(140,550,30,400);
  barricade1.shapeColor="black";

  barricade2=createSprite(140,50,30,400);
  barricade2.shapeColor="black";

  wall1=createSprite(500,600,20,300);
  wall1.shapeColor="brown";

  wall2=createSprite(1000,590,1000,20);
  wall2.shapeColor="brown";

  wall3=createSprite(1000,10,1000,20);
  wall3.shapeColor="brown";

  wall4=createSprite(1490,100,20,1000);
  wall4.shapeColor="brown";

  wall5=createSprite(540,450,100,20);
  wall5.shapeColor="brown";

  wall6=createSprite(700,90,20,150);
  wall6.shapeColor="brown";

  wall7=createSprite(1005,170,875,20);
  wall7.shapeColor="brown";

  wall8=createSprite(1430,90,20,140);
  wall8.shapeColor="brown";

  wall9=createSprite(560,170,20,300);
  wall9.shapeColor="brown";

  wall10=createSprite(750,540,20,80);
  wall10.shapeColor="brown";

  wall11=createSprite(940,500,400,20);
  wall11.shapeColor="brown";

  wall12=createSprite(800,260,20,200);
  wall12.shapeColor="brown";

  wall13=createSprite(900,350,450,20);
  wall13.shapeColor="brown";

  wall14=createSprite(690,425,20,170);
  wall14.shapeColor="brown";

  wall15=createSprite(1115,300,20,130);
  wall15.shapeColor="brown";

  wall16=createSprite(1400,280,20,250);
  wall16.shapeColor="brown";

  wall17=createSprite(1440,400,100,20);
  wall17.shapeColor="brown";

  wall18=createSprite(1170,260,20,200);
  wall18.shapeColor="brown";

  parrot=createSprite(995,300,30,30);
  parrot.addImage(parrotImg);
  parrot.scale=0.2;



 


  edges=createEdgeSprites();
}

function draw() {
  background("lightBlue");
  playerMove();  

  player.collide(edges);



  drawSprites();
}

function playerMove(){
  if(keyDown("UP")){
    player.y=player.y-5;
  }
  if(keyDown("DOWN")){
    player.y=player.y+5;
  }
  if(keyDown("RIGHT")) {
    player.x=player.x+5;
  }
  if(keyDown("LEFT")){
    player.x=player.x-5;
  }
}