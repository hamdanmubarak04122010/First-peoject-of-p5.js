function preload(){}

function setup() {

canvas = createCanvas(500, 400);

canvas.position(70,200);

video= createCapture (VIDEO);

video.hide();
}
function draw() {

image (video, 100, 80, 300, 250);

stroke (0, 128, 0); fill(0, 128, 0);

circle(40,40,50);

circle(460,40,50);

circle (40, 360,50);

circle(460,360,50);



rect(63, 27, 400, 25); rect(63, 347, 375, 25); rect(25, 63, 25, 275); rect(450, 63, 25, 275);
}

function take_snapshot() {
    save ('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value ;
}



