

const numOfLoadingScreenElements= document.querySelectorAll(".loadingscreen").length;
const numOfHomepageElements= document.querySelectorAll(".homepage").length;
const numOfelementsToTurnOffOn=document.querySelectorAll(".turnoff").length;

setTimeout(() => {

for (i=0;i<numOfLoadingScreenElements;i++){
    document.querySelectorAll(".loadingscreen")[i].style.visibility="hidden";
}
document.querySelector("body").style.backgroundColor="black";

for (i=0;i<numOfHomepageElements;i++){
    document.querySelectorAll(".homepage")[i].style.visibility="visible";
}

}, 0);

document.querySelector(".poweroffbtn").addEventListener("click",powerOff)

function powerOff(){
  document.querySelector(".poweroff").style.visibility="visible";
    setTimeout(() => {
        document.querySelector(".poweroff").style.visibility="hidden";
       
    }, 600);
for (i=0;i<numOfelementsToTurnOffOn;i++){
    document.querySelectorAll(".turnoff")[i].style.visibility="hidden";
}

  document.querySelector(".ermia").style.visibility="hidden";
    document.querySelector(".playbtn").style.visibility="hidden";
    document.querySelector(".tvscreen").style.visibility="hidden";
    document.querySelector(".poweroffbtn").style.visibility="hidden";
    document.querySelector(".poweronbtn").style.visibility="visible";




}

document.querySelector(".poweronbtn").addEventListener("click",powerOn)

function powerOn (){
    document.querySelector(".poweroff").style.visibility="hidden";

document.querySelector(".poweron").style.visibility="visible";
setTimeout(() => {
    document.querySelector(".poweron").style.visibility="hidden";

for (i=0;i<numOfHomepageElements;i++){
    document.querySelectorAll(".homepage")[i].style.visibility="visible";
}
document.querySelector(".poweroffbtn").style.visibility="visible";
document.querySelector(".poweronbtn").style.visibility="hidden";
}, 600);

}

document.querySelector(".playbtn").addEventListener("click",enterMenu)

function enterMenu (){
    document.querySelector(".static").style.visibility="visible";
    document.querySelector(".playbtn").style.visibility="hidden";
    document.querySelector(".tvscreen").style.visibility="hidden";
    document.querySelector(".ermia").style.visibility="hidden";

    setTimeout(() => {
        document.querySelector(".static").style.visibility="hidden";
        document.querySelector(".tvscreen").style.visibility="visible";
        document.querySelector(".skills").style.visibility="visible";
        document.querySelector(".links").style.visibility="visible";
        document.querySelector(".projects").style.visibility="visible";
    }, 700);
 
}


/*
setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".loadingBar").style.visibility = "hidden";
    document.querySelector(".loadingText").style.visibility = "hidden";
    document.querySelector(".loadingAvatar").style.visibility = "hidden";
    document.querySelector(".name").style.visibility = "visible";
    document.querySelector(".portfolio").style.visibility = "visible";
    document.querySelector(".frame").style.visibility = "visible";
    document.querySelector(".playbtn").style.visibility = "visible";
    document.querySelector(".tvscreen").style.visibility = "visible";


}, 9300);

document.querySelector(".playbtn").addEventListener("click", enter);
function enter() {
    document.querySelector(".name").style.visibility = "hidden";
    document.querySelector(".portfolio").style.visibility = "hidden";
    document.querySelector(".frame").style.visibility = "visible";
    document.querySelector(".playbtn").style.visibility = "hidden";
    document.querySelector(".tvscreen").style.visibility = "hidden";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".loadingBar").style.visibility = "hidden";
    document.querySelector(".loadingText").style.visibility = "hidden";
    document.querySelector(".loadingAvatar").style.visibility = "hidden";
    document.querySelector(".static").style.visibility = "visible"
    setTimeout(() => {
        document.querySelector(".skills").style.visibility = "visible";
        document.querySelector(".projects").style.visibility = "visible";
        document.querySelector(".links").style.visibility = "visible";
        document.querySelector(".static").style.visibility = "hidden";
        document.querySelector(".tvscreen").style.visibility = "visible";

    }, 1000);

}
*/
