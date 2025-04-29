let forest,water; //Audio

let bg, bgGlw, lft, rgh, lftSel, rghSel,paw,pawSel,walkingR,walkingL,stand,lake,nxt,nxtSel; //images

let x, y,pawX,pawY; //paw int
let volume; // volume control for water
let speed = 4; // speed of fox walking


let walkR = false; //walking right
let walkL = false; //walking left
let pawSelect = false; //mouse Function
let Scene1 = true; //walking scene
let Scene2 = false; //the scene with lake
let nextScene = false; //transition for lake scene
let link = false; //boolean for moving to next group

function preload(){
  //loading all images and sound
  bg = loadImage("Fox Background.png");
  bgGlw = loadImage("Glowing Lake.png");
  lft = loadImage("left button.png");
  rgh = loadImage("right button.png");
  lftSel = loadImage("left button select.png");
  rghSel = loadImage("right button select.png");
  paw = loadImage("Fox Paw.png");
  pawSel = loadImage("PawSelect.png");
  walkingR = loadImage("Fox Walk Image.png");
  walkingL = loadImage("Fox Walk ImageL.png");
  stand = loadImage("Fox Standing.png");
  lake = loadImage("Fox Backview.png");
  nxt = loadImage("Next Button.png");
  nxtSel = loadImage("Next Button Select.png");

  forest = loadSound ('forest.mp3');
  water = loadSound('water.mp3');
}

function setup(){
  //canvas setup and integer setup and audio activation
  createCanvas (800,800);
  x = 0;
  y = 0;
  //water.loop();
  //forest.loop();
}


function draw(){
  //cursor controls
  noCursor();
  pawX = mouseX;
  pawY = mouseY;
  //control lake getting louder
  volume = (x/400);
  water.amp(volume/15);

  if (Scene1) {
    // Green background for Scene 1 (fox walking)
    document.body.style.backgroundColor = 'rgb(35, 60, 39)';
    walkScene();
  } else if (Scene2) {
    // Blue background for Scene 2 (fox looking at lake)
    document.body.style.backgroundColor = 'rgb(34, 157, 179)';
    lakeScene();
  }

  //the walking scene
if (Scene1 == true){
    walkScene();}
    
  //the fox looking at the lake scene
if (Scene2 == true){
    lakeScene();}
      
  // the paw changing when mouse is pressed
if(pawSelect == true){
   image(pawSel,pawX,pawY,150,100);}
else
  {image(paw,pawX,pawY,150,100);}
}

function walkScene(){

  // background moving right (the else statement is it stoping)
 if ((walkR == true) && (x>-3900)) {
        image(bg, x, y);
        x -= speed;} 
     else {
        image(bg, x, y);}
        
  //background moving left (the else statment is it stopping)
     if ((walkL == true) && (x<1)) {
        image(bg, x, y);
        x += speed;} 
     else {
        image(bg, x, y);}
        
  //the arrow buttons
  image(rgh,675,675,100,100);
  image(lft,550,675,100,100);
  
  //shows the fox walking in either direction and also gets rid of paw
     if (walkL == true){
         image(lftSel,550,675,100,100);
         image(walkingL,140,460,-420,-280);
         pawX = -1000;
         pawY = -1000;}
     if (walkR == true){
         image(rghSel,675,675,100,100);
         image(walkingR,150,460,420,280);
         pawX = -1000;
         pawY = -1000;}
         
  //fox just standing
      if((walkR == false) && (walkL == false)){
          image(stand,150,470,400,267);}
          
  //the lake glowing when mouse is hovering
      if((mouseX>400) &&(mouseY>550) && (x<-3899)){
          image(bgGlw,-3900,0);
          image(stand,150,470,400,267);
          nextScene = true;
          }
  
  //pressing the moving button with the mouse instead of keys
      if((mouseIsPressed == true) && (mouseX >480 && mouseX <560) && (mouseY > 675 && mouseY< 750)){
           walkL = true;}
      if((mouseIsPressed == true) && (mouseX >600 && mouseX <680) && (mouseY > 675 && mouseY< 750)){
           walkR = true;}
        
}

//key function
function keyPressed() {

    if(!forest.isPlaying()){
        forest.loop();
      }
      if(!water.loop()){
        water.loop();}

  if (keyCode === RIGHT_ARROW) {
    walkR = true;}
  if (keyCode === LEFT_ARROW){
    walkL = true;}
}

//key function
function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    walkR = false;}
  if (keyCode === LEFT_ARROW){
     walkL = false;}
}

function mousePressed(){
      pawSelect = true; // changes mouse

      if(!forest.isPlaying()){
        forest.loop();
      }
      if(!water.loop()){
        water.loop();
      }
  
  //chnages to the Scene 2
      if(nextScene == true){
          Scene2 = true;
          Scene1 = false;}
  
  //Switches to the next groups link
      if(link == true){
        window.location.href = 'https://estefaniacervantes332.github.io/finding-fishey'}};
//mouse function
function mouseReleased(){
      pawSelect = false;
      walkL = false;
      walkR = false;}
      
//the last scene with fox looking at lake
function lakeScene(){
  image (lake,-200,0);
  image (nxt,550,650,214,110);
  
  //the next button functions
  if((mouseX >470 & mouseX <680) && (mouseY > 600 & mouseY< 750)){
             image (nxtSel,550,650,214,110);
             link = true;}
}