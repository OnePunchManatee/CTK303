let pyLines = [];
let henreeLines = [];
let fortyLines = [];
let nikoLines = [];
let carterLines = [];
let fountainLines = [];
let pancakeLines = [];
let manateeLines = [];
let ziixxLines = [];
let pyTemp = -1;
let henreeTemp = -1;
let fortyTemp = -1;
let fountainTemp = -1;
let nikoTemp = -1;
let carterTemp = -1;
let pancakeTemp = -1;
let manateeTemp = -1;
let ziixxTemp = -1;

document.addEventListener("DOMContentLoaded", function () {
    let py = document.getElementById("pycard"); 
    py.addEventListener("click", function(){
        pyPlaySoundOnClick(pyLines)
    });

    let henree = document.getElementById("henreecard"); 
    henree.addEventListener("click", function(){
        henreePlaySoundOnClick(henreeLines)
    });

    let carter = document.getElementById("cartercard"); 
    carter.addEventListener("click", function(){
        carterPlaySoundOnClick(carterLines)
    });

    let niko = document.getElementById("nikocard"); 
    niko.addEventListener("click", function(){
        nikoPlaySoundOnClick(nikoLines)
    });

    let fountain = document.getElementById("fountaincard"); 
    fountain.addEventListener("click", function(){
        fountainPlaySoundOnClick(fountainLines)
    });

    let forty = document.getElementById("fortycard"); 
    forty.addEventListener("click", function(){
        fortyPlaySoundOnClick(fortyLines)
    });

    let pancake = document.getElementById("pancakecard"); 
    pancake.addEventListener("click", function(){
        pancakePlaySoundOnClick(pancakeLines)
    });

    let manatee = document.getElementById("manateecard"); 
    manatee.addEventListener("click", function(){
        manateePlaySoundOnClick(manateeLines)
    });

    let ziixx = document.getElementById("ziixxcard"); 
    ziixx.addEventListener("click", function(){
        ziixxPlaySoundOnClick(ziixxLines)
    });

    manatee1 = document.getElementById("manatee1");
    manateeLines = [manatee1];

    ziixx1 = document.getElementById("ziixx1");
    ziixxLines = [ziixx1];

    py1 = document.getElementById("py1");
    pyLines = [py1];

    henree1 = document.getElementById("henree1");
    henree2 = document.getElementById("henree2");
    henree3 = document.getElementById("henree3");
    henree4 = document.getElementById("henree4");
    henree5 = document.getElementById("henree5");
    henree6 = document.getElementById("henree6");
    henree7 = document.getElementById("henree7");
    henree8 = document.getElementById("henree8");
    henree9 = document.getElementById("henree9");
    henree10 = document.getElementById("henree10");
    henree11 = document.getElementById("henree11");
    henree12 = document.getElementById("henree12");
    henree13 = document.getElementById("henree13");
    henree14 = document.getElementById("henree14");
    henree15 = document.getElementById("henree15");

    henreeLines = [
        henree1,
        henree2,
        henree3,
        henree4,
        henree5,
        henree6,
        henree7,
        henree8,
        henree9,
        henree10,
        henree11,
        henree12,
        henree13,
        henree14,
        henree15
    ];

    forty1 = document.getElementById("forty1");
    forty2 = document.getElementById("forty2");
    forty3 = document.getElementById("forty3");
    forty4 = document.getElementById("forty4");
    forty5 = document.getElementById("forty5");

    fortyLines = [forty1, forty2, forty3, forty4, forty5];

    carter1 = document.getElementById("carter1");
    carter2 = document.getElementById("carter2");
    carter3 = document.getElementById("carter3");
    carter4 = document.getElementById("carter4");
    carter5 = document.getElementById("carter5");

    carterLines = [carter2, carter3, carter4, carter5, carter1];

    pancake1 = document.getElementById("pancake1");
    pancake2 = document.getElementById("pancake2");
    pancake3 = document.getElementById("pancake3");
    pancake4 = document.getElementById("pancake4");
    pancake5 = document.getElementById("pancake5");

    pancakeLines = [pancake1, pancake2, pancake3, pancake4, pancake5];

    fountain1 = document.getElementById("fountain1");
    fountain2 = document.getElementById("fountain2");
    fountain3 = document.getElementById("fountain3");

    fountainLines = [fountain1, fountain2, fountain3];
    
    niko1 = document.getElementById("niko1");
    niko2 = document.getElementById("niko2");

    nikoLines = [niko1, niko2];


    function henreePlaySoundOnClick(array) {
        console.log(henreeTemp);
        console.log(henreeTemp%array.length-1);
        if(henreeTemp != -1){
            array[henreeTemp].pause();
            array[henreeTemp].currentTime = 0;
        }
        henreeTemp++;
        array[henreeTemp].play();
        henreeTemp%=array.length-1;
    }

function pyPlaySoundOnClick(array) {
    pyTemp = 0;
    if(pyTemp != -1){
        array[pyTemp].pause();
        array[pyTemp].currentTime = 0;
        array[pyTemp].play();
    }
    if(pyLines.length>1){
    pyTemp++;
    pyTemp%=array.length-1;
    }
}

function fountainPlaySoundOnClick(array) {
    if(fountainTemp != -1){
        array[fountainTemp].pause();
        array[fountainTemp].currentTime = 0;
    }
    fountainTemp++;
    array[fountainTemp].play();
    fountainTemp%=array.length-1;
}

function nikoPlaySoundOnClick(array) {
    if(nikoTemp != -1){
        array[nikoTemp].pause();
        array[nikoTemp].currentTime = 0;
    }
    nikoTemp++;
    array[nikoTemp].play();
    nikoTemp%=array.length-1;
}

function fortyPlaySoundOnClick(array) {
    console.log(fortyLines.length, fortyTemp);
    if(fortyTemp != -1){
        array[fortyTemp].pause();
        array[fortyTemp].currentTime = 0;
    }
    fortyTemp++;
    array[fortyTemp].play();
    fortyTemp%=array.length-1;
}

function carterPlaySoundOnClick(array) {
    if(carterTemp != -1){
        array[carterTemp].pause();
        array[carterTemp].currentTime = 0;
    }
    carterTemp++;
    array[carterTemp].play();
    carterTemp%=array.length-1;
}

function pancakePlaySoundOnClick(array) {
    if(pancakeTemp != -1){
        array[pancakeTemp].pause();
        array[pancakeTemp].currentTime = 0;
    }
    pancakeTemp++;
    array[pancakeTemp].play();
    pancakeTemp%=array.length-1;
}

function manateePlaySoundOnClick(array) {
    manateeTemp = 0;
    if(manateeTemp != -1){
        array[manateeTemp].pause();
        array[manateeTemp].currentTime = 0;
        array[manateeTemp].play();
    }
    if(manateeLines.length > 1){
    manateeTemp++;
    manateeTemp%=array.length-1;
    }
}

function ziixxPlaySoundOnClick(array) {
    ziixxTemp = 0;
    if(ziixxTemp != -1){
        array[ziixxTemp].pause();
        array[ziixxTemp].currentTime = 0;
        array[ziixxTemp].play();
    }
    if(manateeLines.length > 1){
    ziixxTemp++;
    ziixxTemp%=array.length-1;
    }
}


});
