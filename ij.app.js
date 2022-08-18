img="";
Status = "";
objects = [];



function preload(){
  img = loadImage('ij.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 200);
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
  }
  
function modalLoaded()
{
  console.log("Modal Loaded");
  Status = true;
  objectDetector.detect(img , gotResult);
}

function gotResult(error,results)
{
  if (error)
  {
    console.log(error);
  }
   console.log(results);
   objects = results;
}

  function draw(){
  image(img, 0,0, 300, 300);
  if(Status != "")
  {
    for(i = 0; i < objects.length ; i++)
    {
    
      document.getElementById("status").innerHTML = "Objects Detected";
      fill("#FF0000");
      percent = floor(objects[i].confidence*100);
      text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);


    }
   }
  }
   
  
  
  