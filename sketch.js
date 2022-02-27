var box

function setup() {
  createCanvas(500,500);
  box = createSprite(250,250,50,50)
}

function draw() 
{
  background(90);
  drawSprites()
  if(keyDown("W")){
    box.y -= 10
  }
  if(keyDown("S")){
    box.y += 10
  }
  if(keyDown("A")){
    box.x -= 10
  }
  if (keyDown("D")){
    box.x += 10
  }

}




