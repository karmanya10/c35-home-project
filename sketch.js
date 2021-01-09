//Create variables here
var dog, dog_position , dog_img;
var mydatabase;
var foodstack;

function preload()
{

  dog_img = loadImage("images/doglmg.png");

	//load images here
}

function setup() {
  createCanvas(500,500);

  dog = createSprites(300 , 200 , 10, 10 );
  dog.addImage(dog_img);
  mydatabase=firebase.database();

  dog_position = mydatabase.ref('food');
  dog_position.on("value",redstock);

}


function draw() {  

  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}

else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
}

else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
}

else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
}

  drawSprites();
  //add styles here

}



function redstock(){}