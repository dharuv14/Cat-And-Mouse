var cat,catImg,cat1,cat2,cat3,garden,gardenImg,mouse,mouseImg,mouse1,mouse2,mouse3;
function preload() {
catImg = loadImage("images/cat1.png");
cat1 = loadImage("images/cat2.png");
cat2 = loadImage("images/cat3.png");
cat3 = loadImage("images/cat4.png");
gardenImg = loadImg("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addImage(catImg);
    mouse = createSprite(200,600);
mouse.addImage(mouseImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   createEdgeSprites();
   cat.bounceOff(edges);
   mouse.bounceOff(edges);
    if(keyDown("Space")){
      cat.velocityY = 2;
      cat.velocityX = 2;
    }
    mouse.x = World.catY;
    mouse.Y = World.cat.X;
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
