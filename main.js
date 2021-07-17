img = "";
status = "";

function preload() {
    img = loadImage('hallroom.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00008B");
    text("Room", 15, 30);
    noFill();
    stroke("#00008B");
    rect(10, 10, 640, 420);

    fill("#00008B");
    text("Window", 245, 135);
    noFill();
    stroke("#00008B");
    rect(240, 120, 150, 130);
}

function Kchat() {
    window.location.href = "";
}