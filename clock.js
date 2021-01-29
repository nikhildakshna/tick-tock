class clock{
constructor(){};

createClock(){
var secAngle = map(sec,0,60,0,360);
var minAngle = map(min,0,60,0,360);
var hourAngle = map(hour,0,24,0,360);
console.log(secAngle + ":" + minAngle + ":" + hourAngle);
var sechand = createSprite(400,200,20,200);
sechand.rotation = secAngle;
sechand.shapeColor = "red";
var minhand = createSprite(400,200,20,100);
minhand.rotation = minAngle;
minhand.shapeColor = "yellow";
var hourhand = createSprite(400,200,20,50);
hourhand.rotation = hourAngle;
hourhand.shapeColor = "green"; 
drawSprites(); 
}

}