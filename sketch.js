
var monkey , monkey_running
var banana ,bananaImage, rock, rockImage;
var FoodGroup, rockGroup;
var score;
var ground; 
var survivaltime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(400,400);
   monkey= createSprite(60,315,20,20);
 monkey.addAnimation("running", monkey_running);
 monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4; 
  console.log(ground.x);
  ground.visible = false;
  
  
rockGroup = createGroup();
FoodGroup=createGroup();
    
survivaltime = 0;

}


function draw() {
background("white");
  text("survival time: "+ survivaltime, 200,50);
  stroke("black");
  textSize(20);
  fill("black");
   survivaltime = survivaltime + Math.round(getFrameRate()/20);
 
  
  if(keyDown("space") && monkey.y >= 150) {
    monkey.velocityY= -11;
    }
  monkey.velocityY = monkey.velocityY + 0.6;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnRock();
spawnFood();

monkey.collide(ground);
  
drawSprites();
}
function spawnRock() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var Rock = createSprite(400,100,900,10);
    Rock.y = Math.round(random(300,350));
    Rock.addImage(rockImage);
    Rock.scale = 0.1;
    Rock.velocityX = -9;
    Rock.lifetime = 200;
    rockGroup.add(Rock)
  }
  
}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80=== 0) {
    var banana = createSprite(400,20,900,10);
    banana.y = Math.round(random(200,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -9;
    banana.lifetime = 200;
   FoodGroup.add(banana);
    }
  }
