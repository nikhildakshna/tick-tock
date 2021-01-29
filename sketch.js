var hour,min,sec;
var Clock;

function setup() {
  createCanvas(800,400);


Clock = new clock();
hour = hour();
min = minute();
sec = second();

console.log(hour + ":" + min + ":" + sec );
}

function draw() {
  background(255,255,255);  
  drawSprites();
 
  
  Clock.createClock();


}

