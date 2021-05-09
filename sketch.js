var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	rect1=createSprite(width/2, height-55,200,10);
	rect1.shapeColor=color(255,0,0)


	rect2=createSprite(width/2-100, height-85,10,100);
	rect2.shapeColor=color(255,0,0)


	rect3=createSprite(width/2+100, height-85, 10,100);
	rect3.shapeColor=color(255,0,0)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 35 , {restitution:0.8, friction:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 ground1 = Bodies.rectangle(width/2, height-55,200,10 , {isStatic:true} );
 	World.add(world, ground1);

	 ground2 = Bodies.rectangle(width/2-100, height-85,10,100 , {isStatic:true} );
 	World.add(world, ground2);

	 ground3 = Bodies.rectangle(width/2+100, height-85,10,100 , {isStatic:true} );
 	World.add(world, ground3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



