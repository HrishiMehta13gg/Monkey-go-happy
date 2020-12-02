
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey=createSprite(100,550,20,20)
  monkey.addAnimation("running",monkey_running)
monkey.scale= 0.1
  
  
  ground=createSprite(300,580,16000000,20);
  ground.x=ground.width/2;
  ground.velocityX=-1;
}


function draw() {
background("white");
 if(keyDown("space")&&monkey.y>539){
    monkey.velocityY=-15;
    }
  
  monkey.velocityY=monkey.velocityY+0.5;
  console.log(monkey.y)
  
  
  monkey.collide(ground);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
  
  fruits();
  stones();
  drawSprites(); 
  

}
function fruits(){
  if(World.frameCount%60===0){
  var banana=createSprite(600,150,20,20)   
  banana.addImage(bananaImage);   
  banana.scale=0.1
  banana.y=random(200,500)
 banana.velocityX=-3
  }
}
function stones(){
  if(World.frameCount%60===0){
  var stone=createSprite(600,560,20,20)   
  stone.addImage(obstacleImage);   
  stone.scale=0.1
  //stone.y=random(200,500)
 stone.velocityX=-3}
}






