var fairy, fairyI, fairySound;
var star, starI;
var backgroundI;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
fairyI = loadAnimation("fairyImage1.png", "fairyImage2.png");  
starI = loadImage("star.png");
backgroundI = loadImage("starNight.png");
fairySound = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);
  fairySound.play();

  fairy = createSprite(130,525);
  fairy.addAnimation("fairyflying",fairyI);  
  fairy.scale =0.25;

  star = createSprite(650,30);
  star.addImage(starI);
  star.scale = 0.2;
  
  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  World.add(world, starBody);
  
  Engine.run(engine);
}


function draw() {
  background(backgroundI);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
    Matter.Body.setStatic(starBody,true);
  }

drawSprites();

}

function keyPressed() {

  if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
  }
  
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
  }

  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(starBody,false); 
  }
}
