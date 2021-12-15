difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(500,500);
    canvas.position(500,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet model loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("#736CED");
    document.getElementById("font_size").innerHTML = "Font size of the text will be "+difference+" px";
    textSize(difference);
    fill("#061826");
    text("Sai",50,200);
}