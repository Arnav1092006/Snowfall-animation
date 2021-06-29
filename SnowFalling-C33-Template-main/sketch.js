// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var snowImg ="snow1.jpg";

function preload()
{
   getBackgroundImg();

}

function setup() {
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
}



function draw() {
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<=18){
    snowImg = "snow1.jpg";
}

else if(hour>18 && hour<=22)
{
  snowImg = "snow3.jpg";
}
else  {
    snowImg = "snow2.jpg";
}

backgroundImg = loadImage(snowImg);
console.log(backgroundImg);
}