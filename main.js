img = "";
statuss = "";
objects = [];

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}
function modelLoaded()
{
    console.log("Model Loaded");
    statuss=true;
    objectDetector.detect(video,gotResult);
}
function draw()
{

    image(video,0,0,380,380);

    if(statuss != "")
    {
        r=random(250);
        g=random(250);
        b=random(250);

    for(i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML="Status : object dected";
        document.getElementById("number_of_object").innerHTML="Number of objects dected are :  " + objects.length;
        fill(r,g,b);

        percent=floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent + "%" , objects[i].x,objects[i].y);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
}
zzz
    
}
function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    }
        console.log(results);
        objects = results;
}


