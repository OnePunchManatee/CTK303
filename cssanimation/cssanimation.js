let state = 0;
let temp = -1;
let solly1;
let solly2;
let solly3;
let solly4;
let sollyLines = [];

let scout1;
let scout2;
let scout3;
let scout4;
let scoutLines = [];

let hypnodrone;

let confirm;

// makes sure all the elements are loaded before running click behavior, advised by Chat for the stuff we didn't cover in class (e.g. DOM)
document.addEventListener("DOMContentLoaded", function () {
    let manatee = document.getElementById("soldierfromtitanfall2"); 
    let forty = document.getElementById("fortyone");
    let henree = document.getElementById("harrycap");
    hypnodrone = document.getElementById("THEHORRORMP3");
    confirm = document.getElementById("autoplaybaniscringe");
    confirm.addEventListener("click", function(){
        hypnodrone.play();
        
    });
    manatee.addEventListener("click", function(){
        playSoundOnClick(sollyLines)
    });
    henree.addEventListener("click", function(){
        playSoundOnClick(scoutLines)
    });
    forty.addEventListener("click", function(){
        playSoundOnClick(sollyLines)
    });
    solly1 = document.getElementById("audio1");
    solly2 = document.getElementById("audio2");
    solly3 = document.getElementById("audio3");
    solly4 = document.getElementById("audio4");
    scout1 = document.getElementById("sound1");
    scout2 = document.getElementById("sound2");
    scout3 = document.getElementById("sound3");
    scout4 = document.getElementById("sound4");
    sollyLines = [solly1, solly2, solly3, solly4];
    scoutLines = [scout1, scout2, scout3, scout4];

    function playSoundOnClick(array) {
    if(temp != -1){
        array[temp].pause();
        array[temp].currentTime = 0;
    }
    temp++;
    console.log(state);
    console.log(array[state]);
    array[state].play();
    
    state+=1;
    state%=array.length;
    temp%=array.length;
}
});