
var bananaImage, bananaSprite, obstacleImage

var obstacleGroup, foodGroup
var ground
var score = 0
var Monkey, monkeyImage

function preload(){
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  obstacleImage = loadImage("stone.png");
  bananaImage = loadImage("banana.png")
}

function setup() {
  createCanvas(400, 400);
  ground = createSprite(200, 200);
  ground.addImage("backgroundImage", loadImage("jungle.jpg"));
  ground.velocityX = -5;
  ground.scale = 0.5;
  Monkey = createSprite(104, 334);
  Monkey.addAnimation("Monkey", monkeyImage);
  Monkey.scale = 0.125
  ground2 = createSprite(200, 374, 400, 10);
  Monkey.collide(ground2);
  ground2.visible = false;
}
function draw() {
  if(ground.x<120){
    ground.x = 200;
  }
  if(foodGroup.isTouching(Monkey)){
    foodGroup.destroy();
    score = score+2;
  }
  if(obstacleGroup.isTouching(Monkey)){
    Monkey.scale = 0.125
  }
  background(220);
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+score, 270, 35);
}