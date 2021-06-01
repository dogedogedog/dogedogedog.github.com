(function () {
    "use strict";

    alert("Hello, and welcome. Here are a few tasks I would like you to do: 1. trigger the overlay boxes of the years; 2. read to the end of the page; 3. describe what you think the page is about before reading the footer of the page. Thank you!");

    const openBtns = document.querySelectorAll(".open");
    const closeBtns = document.querySelectorAll(".close");

    for (const eachBtn of openBtns) {
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = "overlay showing";
        });
    }

    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(".showing").className = "overlay hidden";
        });
    }

    document.addEventListener("keydown", function(event){
        if(event.key === "Escape") {
            document.querySelector(".showing").className = "overlay hidden";
        }
    });

    // submit form and take user's text into original space
    const form = document.querySelector("#myform")
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const letter = document.getElementById('user-letter').value;
        let myText = `${letter}`;

        form.className = "hidden";
        document.getElementById('submit-letter').innerHTML = myText;
    });
})();