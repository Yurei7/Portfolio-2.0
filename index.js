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


}, 1000);

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