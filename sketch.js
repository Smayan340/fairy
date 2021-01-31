var fairyI, fairy, star, starI;



function preload(){
fairyI = loadImage(images/fairy.png)  
starI = loadImage(images/star.png)
}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(200,325,100,100);
  star = createSprite(600,325,30,30);
  
}


function draw() {
  background("black");
fairyI.addImage(fairy);
starI.addImage(star);

if (keyPressed("left")) {
  fairy.velocityX = -4
}
if (keyPressed("right")) {
  fairy.velocityX = 4
}
if (keyDown("down")) {
  star.velocityY = 6
}
drawSprites();

}
