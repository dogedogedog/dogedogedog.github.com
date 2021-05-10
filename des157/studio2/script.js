(function () {
    "use strict";

    // try to learn from the mouse over zoom in exercise
    const container = document.querySelector("#bg");
    const hotSpots = document.querySelectorAll("#bg div");
    const theImg = document.querySelector("div img");

    hotSpots.forEach(function(eachSpot){
        eachSpot.addEventListener("mouseover", square);
        eachSpot.addEventListener("mouseout", function(){
            theImg.className="start";
        })
    })

    function square(event){
        const thisCorner = event.target.id;
        switch (thisCorner) {
            case "topOne" : theImg.className = "topOne"; break;
            case "topTwo" : theImg.className = "topTwo"; break;
            case "topThree" : theImg.className = "topThree"; break;
            case "topFour" : theImg.className = "topFour"; break;
            case "topFive" : theImg.className = "topFive"; break;
            case "bottomOne" : theImg.className = "bottomOne"; break;
            case "bottomTwo" : theImg.className = "bottomTwo"; break;
            case "bottomThree" : theImg.className = "bottomThree"; break;
            case "bottomFour" : theImg.className = "bottomFour"; break;
            case "bottomFive" : theImg.className = "bottomFive"; break;
            case "bottomSix" : theImg.className = "bottomSix"; break;
            case "bottomSeven" : theImg.className = "bottomSeven"; break;
        }
    }

    // try to do open overlay exercise
    const openBtns = document.querySelectorAll(".open");
    const closeBtns = document.querySelectorAll(".close");

    for (const eachBtn of openBtns){
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            // alert(thisBtn);
            document.getElementById(`ol-${thisBtn}`).className = "overlay showing";
        });
    }

    for (const eachBtn of closeBtns){
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(".showing").className = "overlay hidden";
        });
    }

    document.addEventListener("keydown", function(event){
        if(event.key === "Escape"){
            document.querySelector(".showing").className = "overlay hidden";
        }
    });

})();