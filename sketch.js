const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const mConstraint = Matter.MouseConstraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var shelf1, shelf1;
var ball1;
var rope1;
var mc;
var boxes = [];
var score;

var textState = "notshown";

function setup(){
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  var options = {
    body: ball1
  }
  mC = mConstraint.create(engine, options);

  var score = 0;

  for(var i = 360; i <= 720; i += 40){
    block1 = new block(i,460,40,40,false,80);   
    boxes.push(block1);
  }

  for(var i = 380; i <= 700; i += 40){
    block1 = new block(i,415,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 400; i <= 680; i += 40){
    block1 = new block(i,360,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 420; i <= 660; i += 40){
    block1 = new block(i,315,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 440; i <= 640; i += 40){
    block1 = new block(i,260,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 460; i <= 620; i += 40){
    block1 = new block(i,215,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 480; i <= 600; i += 40){
    block1 = new block(i,160,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 500; i <= 580; i += 40){
    block1 = new block(i,115,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 520; i <= 560; i += 40){
    block1 = new block(i,60,40,40,false,80);   
    boxes.push(block1);
  }
  for(var i = 540; i <= 540; i += 40){
    block1 = new block(i,15,40,40,false,80);   
    boxes.push(block1);
  }
  shelf1 = new block(540,500,440,20,true,100);

  ball1 = new ball(120, 400, 20, 100, false);
  rope1 = new rope(ball1.body, {x: 120, y: 400});


  Engine.run(engine);
}

function draw() {
  background(170);  
  //Engine.update(engine);
  block1.display();
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
    if (boxes[i].isOffScreen()){
      boxes[i].removeFromWorld();
      boxes.splice(i, 1); 
      i--;
  }
  }
  textSize(30);
  text("Score: " + score, 100, 250);
  score = 55 - boxes.length;
  if(score === 55){
    textSize(35);
    text("Congratulations, You Knocked Off Every Block", 50, 400);
  }
  shelf1.display();
  
  if(mouseX < 120){
    World.add(world, mC);
  }else{
    World.remove(world, mC);
  }

  ball1.display();
  rope1.display();

  if(textState === "shown"){
    textSize(20);
    text("Press Space for Another Shot", 100, 200);
  }
  if(ball1.body.position.x > 130){
    rope1.fly();
    textState = "shown";
  }
}

function keyPressed(){
  if(keyCode === 32){
  rope1.attach(ball1.body);
  Matter.Body.setVelocity(ball1.body, {x: 0, y: 0});
  textState = "nonshown";
  }
}
