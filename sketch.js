var r,g,b 
function setup() {
  createCanvas(400,400);
  console.log(r)
}

function draw() 
{
  r = Math.round(random(0,255))
  g = Math.round(random(0,255))
  b = Math.round(random(0,255))
  background(r,g,b);
  
}




