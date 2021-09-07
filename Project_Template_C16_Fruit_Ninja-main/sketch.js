//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife,fruit ,monster,fruitGroup,monsterGroup, score,r,randomFruit, position;
var knifeImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage;

function preload(){
  
  knifeImage = loadImage("knife.png");
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  gameOverSound = loadSound("gameOverImage.mp3")
  knifeSwooshSound = loadSound("knifeSwooshSound.mp3")
}

function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  // Score variables and Groups
  score=0;
  fill("black")
  textSize(20)
  stroke(100)

  fruitGroup=createGroup();
  monsterGroup=createGroup();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //Call fruits and Monster function
    fruits();
    Monster();
    
    // Move sword with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if sword touching fruit
    var select_item = Math.round(random(1, 5));
    if (World.frameCount % 100 === 0) {
      if (select_item == 1) {
        Fruit1()
      } else if (select_item == 2) {
        Enemy()
      } else if (select_item == 3) {
        Fruit2()
      } else if (select_item == 4) {
        Fruit3()
      } else {
        Fruit4()
      }
    }

    if (Sword.isTouching(FruitG)) {
      FruitG.destroyEach()
      Score = Score + 1
      KnifeSwordSound.play()

    } else

    if (Sword.isTouching(EnemyG)) {
      EnemyG.destroyEach()
      gameState = END;
      FruitG.destroyEach()
      EnemyG.setVelocityXEach(0)
      FruitG.setVelocityXEach(0)
      Sword.addImage(GameOverImage)
      Sword.scale = 2
      Sword.x = 300
      Sword.y = 200
      GameOverSound.play()

    }
  }
  
  drawSprites();
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}


function Monster(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,550));
    //update below give line of code for increase monsterGroup speed by 10
    monster.velocityX = -(8+(score/10));
    monster.setLifetime=50;
    
    monsterGroup.add(monster);
  }
}
function Fruit1() {
  var Fruit1 = createSprite(600, Math.round(random(30, 400)), 10, 10)

  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit1.x = 600;
    Fruit1.velocityX = -(7 + (Score / 4));
  } else {
    Fruit1.x = 0;
    Fruit1.velocityX = 7 + (Score / 4)
  }

  Fruit1.addImage(F1Image)
  Fruit1.scale = 0.2
  Fruit1.lifetime = 150
  FruitG.add(Fruit1)
}

function Fruit2() {
  var Fruit2 = createSprite(600, Math.round(random(30, 400)), 10, 10)
  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit2.x = 600;
    Fruit2.velocityX = -(7 + (Score / 4));
  } else {
    Fruit2.x = 0;
    Fruit2.velocityX = 7 + (Score / 4)
  }
  Fruit2.addImage(F2Image)
  Fruit2.scale = 0.2
  Fruit2.lifetime = 150
  FruitG.add(Fruit2)
}

function Fruit3() {
  var Fruit3 = createSprite(600, Math.round(random(30, 400)), 10, 10)
  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit3.x = 600;
    Fruit3.velocityX = -(7 + (Score / 4));
  } else {
    Fruit3.x = 0;
    Fruit3.velocityX = 7 + (Score / 4)
  }

  Fruit3.addImage(F3Image)
  Fruit3.scale = 0.2
  Fruit3.lifetime = 150
  FruitG.add(Fruit3)
}

function Fruit4() {
  var Fruit4 = createSprite(600, Math.round(random(30, 400)), 10, 10)

  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit4.x = 600;
    Fruit4.velocityX = -(7 + (Score / 4));
  } else {
    Fruit4.x = 0;
    Fruit4.velocityX = 7 + (Score / 4)
  }

  Fruit4.addImage(F4Image)
  Fruit4.scale = 0.2
  Fruit4.lifetime = 150
  FruitG.add(Fruit4)
}