(function () {
    "use strict";

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

    // slide images
    const myImages = [
        "slide1.jpg",
        "slide2.jpg",
        "slide3.jpg",
        "slide4.jpg",
        "slide5.jpg",
        "slide6.jpg",
        "slide7.jpg",
        "slide8.jpg"
    ];

        let currentImage = 0;

        const slide = document.getElementById("myimage");

        document.getElementById("next").addEventListener("click", nextPhoto);

        function nextPhoto (){
            currentImage++;

            if (currentImage > myImages.length - 1) {
                currentImage = 0;
            }

            slide.src = `images/${myImages[currentImage]}`;
        }

        document.getElementById("previous").addEventListener("click", previousPhoto);

        function previousPhoto (){
            currentImage--;

            if (currentImage < 0){
                currentImage = myImages.length-1;
            }

            slide.src = `images/${myImages[currentImage]}`;
        }

})();