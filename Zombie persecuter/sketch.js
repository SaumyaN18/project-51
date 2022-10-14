var player , playerAnimation , playerReverseAnimation;
var playerDieAnimation;
var  playerShootingAnimation, playerShootingReverseAnimation
var zombie, zombieAnimation1, zombieAnimation1Reverse;
var zombieAnimation2, zombieAnimation2Reverse;
var zombieDieAnimation1, zombieDieAnimation1Reverse;
var zombieDieAnimation2, zombieDieAnimation2Reverse;


function preload(){
  playerAnimation = loadAnimation ("assets/p1.png");
  playerReverseAnimation = loadAnimation ("assets/pr1.png");
  playerShootingAnimation = loadAnimation("assets/playerShoot.png");
  playerShootingReverseAnimation = loadAnimation("assets/shooterR1.png");
zombieAnimation1 = loadAnimation("assets/z1.png","assets/z2.png","assets/z3.png","assets/z4.png");
zombieAnimation1Reverse = loadAnimation("assets/z1R.png","assets/z2R.png","assets/z3R.png","assets/z4R.png");
zombieAnimation2 = loadAnimation("assets/z11.png","assets/z12.png","assets/z13.png");
zombieAnimation2Reverse = loadAnimation("assets/z11R.png","assets/z12R.png","assets/z13R.png");
zombieDieAnimation1 = loadAnimation("assets/zdie.png");
zombieDieAnimation1Reverse = loadAnimation("assets/zdieR.png");
zombieDieAnimation2 = loadAnimation("assets/z2die.png");
zombieDieAnimation2Reverse = loadAnimation("assets/z2dieR.png");
}


function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.addAnimation ("player",playerAnimation);
  player.addAnimation ("playerR",playerReverseAnimation);
  player.addAnimation ("playerS",playerShootingAnimation);
  player.addAnimation ("playerSR",playerShootingReverseAnimation);

}

function draw() {
  background(0);  
  if (keyDown("RIGHT")){
    player.changeAnimation ("playerR",playerReverseAnimation);
    player.x+=2;
  }
  if (keyDown("LEFT")){
    player.changeAnimation ("player",playerAnimation);
    player.x-=2;
  }
  if (keyWentDown("SPACE")&&player.x<=400){
    player.changeAnimation ("playerS",playerShootingAnimation);
  }
  if (keyWentUp("SPACE")&&player.x<=400){
    player.changeAnimation ("player",playerAnimation);
  }
  if (keyWentDown("SPACE")&&player.x>=400){
    player.changeAnimation ("playerSR",playerShootingReverseAnimation);
  }
  if (keyWentUp("SPACE")&&player.x>=400){
    player.changeAnimation ("playerR",playerReverseAnimation);
  }
spawnz1(); 
  drawSprites();

}
function spawnz1() {
  //write code here to spawn the zombie1s
  if (frameCount % 60 === 0) {
    var zombie1 = createSprite(600,120,40,10);
    zombie1.y = Math.round(random(80,120));
    zombie1.addAnimation(zombieAnimation1);
    zombie1.scale = 1.5;
    zombie1.velocityX = -3;
    
     //assign lifetime to the variable
    zombie1.lifetime = 200;
    
    //adjust the depth
    
    
    //add each zombie1 to the group
   // zombie1sGroup.add(zombie1);
  }
  
}








































