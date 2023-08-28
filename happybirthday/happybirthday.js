let state = 0;
let temp = -1;
let solly1;
let solly2;
let solly3;
let solly4;
let sollyLines = [];

//p5.js stuff doesn't seem to work here

// function preload() {
//   s1 = loadSound("soldier1.mp3");
//   img = loadImage("sollyangle.png"); // Replace with the path to your image
// }

// function setup() {
//   createCanvas(400, 400); // Adjust the canvas size as needed
//   img.resize(200, 0); // Adjust the image size as needed
//   image(img, 0, 0);
// }

// function draw(){

// }

// function touchStarted() {
//   getAudioContext().resume();
// }

// function mouseReleased() {
//   if (mouseX >= 0 && mouseX <= img.width && mouseY >= 0 && mouseY <= img.height) {
//     // Check if the mouse click is within the image boundaries
//     s1.play(); // Play the sound when the image is clicked
//   }
// }

// makes sure all the elements are loaded before running click behavior, advised by Chat for the stuff we didn't cover in class (e.g. DOM)
document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById("soldierfromtitanfall2"); 
    image.addEventListener("click", playSoundOnClick);
    solly1 = document.getElementById("audio1");
    solly2 = document.getElementById("audio2");
    solly3 = document.getElementById("audio3");
    solly4 = document.getElementById("audio4");
    sollyLines = [solly1, solly2, solly3, solly4];

    function playSoundOnClick() {
    // console.log(solly1);
    if(temp != -1){
        sollyLines[temp].pause();
        sollyLines[temp].currentTime = 0;
    }
    //Idk why but the forEach loop isn't working for me
    // sollyLines.forEach(???{
    //     console.log("sus");
    //     audio.pause();
    //     audio.currentTime = 0;
    // });
    
    console.log(state);
    console.log(sollyLines[state]);
    sollyLines[state].play();
    //console.log(sollyLines[state]);
    //let testaudio = new Audio("soldier1.mp3");
    //testaudio.play();

    temp++;
    state++;
    state%=sollyLines.length;
    temp%=sollyLines.length;
    // console.log(sollyLines.length);
}
});
