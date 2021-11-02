function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", event => {
        paragraph.innerHTML = "Houston, we have liftoff!"
    });
    
    /*missionAbort.addEventListenever("mouseover", event => {
        missionAbort.style.backgroundColor = "red";
    });*/

window.addEventListener("load", init);