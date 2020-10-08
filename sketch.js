var movingRect, fixedRect, box1,box2;

function setup() {
  createCanvas(800,400);
 movingRect =  createSprite(100, 200, 50, 50);
 fixedRect = createSprite(700, 200, 50, 50);
 box1 = createSprite(200, 200, 50, 50);
  box2 = createSprite(400,200,50,50)
  
  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  box1.shapeColor = "green";
  box2.shapeColor = "green";


 movingRect.velocityX = 3;
 fixedRect.velocityX = -3;
 box1.velocityX=3;
 box2.velocityX=-3;
}

function draw() {
  background(220);  
  //obj1.x =mouseX;
  //box1.y=mouseY; 



  if(isTouching(box1,box2)){
    box1.shapeColor = "red";
    box2.shapeColor = "red";

  }else{
    box2.shapeColor = "green";
  }
 
  console.log(movingRect.x-fixedRect.x );
  console.log(movingRect.width/2+fixedRect.width/2);
  bounceOff(box1,box2);
  bounceOff(fixedRect,)
    

  drawSprites();
}

