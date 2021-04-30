(function () {

    'use strict';

    // (1) users select their options and submit the form
    const myForm = document.querySelector("#myform");

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