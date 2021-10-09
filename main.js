noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log("poseNet is initialised");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.y;
    difference = floor(leftWristX - rightWristX);
    console.log("noseX=" + noseX + "noseY=" + noseY);
    console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference =" + difference);
  }
}

function draw() {
  background('#FF0000');
  document.getElementById("square_side").innerHTML= "width and height of the square= " + difference + "px";
  fill('#003697');
  stroke('#ADD8E6');
  square(noseX,noseY,difference);
}