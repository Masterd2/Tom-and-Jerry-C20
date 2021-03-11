
var backgroundB, bImage
var cat, catI1, cateRun, catI2
var mouse, mouseI1, mouseI2, mouseAni

function preload() {
    //load the images here
    bImage = loadImage("garden.png")
    catI1 = loadImage ("cat1.png")
    catI2 = loadImage ("cat4.png")
    catRun = loadAnimation ("cat2.png", "cat3.png")
    mouseI1 = loadImage ("mouse1.png")
    mouseI2 = loadImage ("mouse4.png")
    mouseAni = loadAnimation ("mouse2.png", "mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backgroundB = createSprite (500, 400, 2000, 1600)
    backgroundB.addImage(bImage)
  
    cat = createSprite (800, 600, 75, 25)
    cat.addImage("start", catI1)
    cat.addImage("finish", catI2)
    cat.addAnimation("run", catRun)
    cat.scale=0.1
    cat.debug=false
    cat.setCollider("circle",0,0,500);
  
    mouse = createSprite (200, 600, 25, 75)
    mouse.addImage("start", mouseI1)
    mouse.addImage("finish", mouseI2)
    mouse.addAnimation("Animation", mouseAni)
    mouse.scale=0.1
    mouse.debug=false
    mouse.setCollider("circle",0,0,200);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.isTouching(mouse))
      {
        cat.velocityX=0
        cat.changeAnimation("finish")
        mouse.changeAnimation("finish")
      }
    keyPressed()
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyDown("space"))
  {
    mouse.changeAnimation("Animation")
    cat.changeAnimation("run")
    cat.velocityX=-5
  }

}

function isTouching (obj1, obj2)
{
  if(obj1.x-obj2.x < obj1.width/2+obj2.width/2 && obj2.x-obj1.x  < obj1.width/2+obj2.width/2 &&obj1.y-obj2.y < obj1.height/2+obj2.height/2 && obj2.y-obj1.y < obj1.height/2+obj2.height/2)
    {
      return true;
    }
  else
  {
    return false;
  }
}