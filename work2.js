var pipe;
var cup;
var cup1;
var letter;
var button;
var mod;

function preload(){
pipe = loadImage('pipe.svg');
cup = loadImage('cup.svg');
cup1 = loadImage('cup1.svg');


letter = loadImage('letter.png');
mod = loadImage('mod.png');

}

function setup(){
  createCanvas(1000,1000);
  background(255);
  
  image(pipe,0,-50,600,400);



 image(letter,50,300,500,90);
 line(280,440,570,440);
    textStyle(BOLD);
    textSize(40);
  text("This is..",120,430);
  
  image(mod,320,390,150,40);
  
  
}

function draw() {
  
}



function mousePressed(){

if(mouseX>320 && mouseX <470 &&mouseY>390 && mouseY<430){
  push();
 background(255);
 image(letter,50,300,500,90);
 line(280,440,570,440);
    textStyle(BOLD);
    textSize(40);
    fill(0);
  text("This is..",120,430);
  

  

  
  image(cup1,0,-50,600,400);
  fill(255,205,5);
  text("A Tea Cup",311,424);
 
 
  pop();
 
 image(mod,345,450,120,40);
 push();
 fill(0);
 textSize(40);
 text("with",211,484);
 
 line(320,500,500,500);
 pop();
 }
 
else if(mouseX>345 && mouseX <460 &&mouseY<475 && mouseY<520){

 background(255);
  
 image(letter,50,300,500,90);
 line(280,440,570,440);
    textStyle(BOLD);
    textSize(40);
    fill(0);
  text("This is..",120,430);
  

   image(cup,0,-50,600,400);
     fill(255,205,5);
    textSize(30);
  text("HOLDER",331,484);

   fill(0);
   push();
    textSize(40);
 text("with",211,484);
 pop();
 push();
   fill(255,205,5);
   
    textSize(40);
  text("A Tea Cup",311,424);
  pop();
   line(320,500,500,500);
   fill(255,205,5);
   textSize(100);
      text("<<<<",350,174);
 }

}
