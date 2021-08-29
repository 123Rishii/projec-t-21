var bullet,wall;
var speed,weight,thickness,hasCollided;


function setup() {
  createCanvas(1600,400);

  thickness=random(25,83);

  bullet=createSprite(50,200,100,10);
  wall=createSprite(1000,200,thickness,200);

  speed=round(random(65,125));
  weight=random(195,847);

  bullet.velocityX=speed;
  bullet.shapeColor="white";
  bullet.debug=true;

  wall.shapeColor=(rgb(80,80,80));
  wall.debug=true;
}

function draw() {
  background("black");
  drawSprites();
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed/(thickness*thickness*thickness));

    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<=10){
      wall.shapeColor="green";
    }
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      bullet.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor="yellow";
    }
    if(deformation<100){
      bullet.shapeColor="green";
    }
  }
}

function hasCollided(lbullet,lwall){
      bulletRightEdge=lbullet.x + lbullet.width;
      wallLeftEdge=lwall.x;
      // text("lbullet.x:"+lbullet.x,100,300);
      // text("lbullet.velocityX:"+lbullet.velocityX,350,300);
      // text("lbullet.width:"+lbullet.width,550,300);
      // text("bulletRightEdge:"+bulletRightEdge,100,100);
      // text("wallLeftEdge:"+wallLeftEdge,400,100);
//     if(bulletRightEdge>=wallLeftEdge) {
     if(lwall.x-lbullet.x<=((lwall.width/2)+(lbullet.width/2))){
        return true;
    }
     return false;
  }
 
