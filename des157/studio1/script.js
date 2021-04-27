(function () {

    'use strict';

    // open and close buttons
    document.querySelector(".open").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("overlay").className = "showing";
    });
    
    // document.querySelector(".close").addEventListener("click", function(event){
    //     event.preventDefault();
    //     document.getElementById("overlay").className = "hidden";
    // });

    document.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            document.getElementById("overlay").className = "hidden";
        }
    });

    // (1) users select their options and submit the form
    const myForm = document.querySelector("#myform");

    // (2) after users finish their selections and press submit, madlib section will put into action
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        const mean = document.querySelector("#mean").value;
        const want = document.querySelector("#want").value;
        const balloon = document.querySelector("#balloon").value;
        const like = document.querySelector("#like").value;
        const act = document.querySelector("#act").value;

        const myText = `Balloons are the symbol of ${mean} to me. ${want} since when I was 8 years old. When I was in primary school, many classmates had balloons, and I was very envious. I asked my mom to buy one for me. The color was like  ${balloon}, which ${like} If I could have one more balloon, could I ${act}?`;

        madlib.innerHTML = myText;
    });

})();