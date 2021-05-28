var hero,heroImg,villian,villianImg;
var dragon,dragonImg,fire,fireImg;
var bgImg;

function preload()
{
  heroImg=loadAnimation("h1.png","h2.png","h3.png","h4.png","h5.png","h6.png","h7.png","h8.png","h9.png","h10.png","h11.png","h12.png")
  fireImg=loadAnimation("f1.png","f2.png","f3.png","f4.png","f5.png","f6.png","f7.png","f8.png")
  dragonImg=loadImage("drago2.png");
  bgImg=loadImage("bgImg.jpg");
  villianImg=loadAnimation("vPIC1.jpg","vPIC2.jpg","vPIC3.jpg","vPIC4.jpg","vPIC5.jpg",)
}
function setup() {
  createCanvas(1200,900);
  hero=createSprite(200, 800,50,100);
  hero.addAnimation("hero",heroImg)
  hero.scale=0.5;

  
  ground = createSprite(200,900,900,10);
  ground.x = ground.width /2;
  ground.visible=false;
  
}

function draw() {
  background(bgImg);  
  drawSprites();
  ground.velocityX=-3;

   if (ground.x < 0){
    ground.x = ground.width/2;
  }
  enemies();
}
function enemies()
{
  if(frameCount%100===0)
  {
    var Obstacle = createSprite(1000,850,50,50);
    Obstacle.velocityX=-8;
    Obstacle.scale=0.5;
    var Ran=Math.round(random(1,3));
    switch(Ran)
    {
      case 1:Obstacle.addAnimation("fire",fireImg)
      break;

      case 2:Obstacle.addImage("dragon",dragonImg)
      break;
   
      case 3:Obstacle.addAnimation("vamp",villianImg)
      break;
    }
  }
}
