(function(){
    "use strict";

    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){

        event.preventDefault();
        let noun1 = document.querySelector("#noun1").value;
        let noun2 = document.querySelector("#noun2").value;
        let adj1 = document.querySelector("#adj1").value;
        let verb1 = document.querySelector("#verb1").value;

        let myText;

        if (noun1 && noun2 && adj1 && verb1) {
            myText = `Here are the words: ${noun1}, ${noun2}, ${adj1}, ${verb1}`;
        } else {
            myText = "Please give me words so I can make your Mad Lib!";
        }

        // let myText = `Here are the words: ${noun1}, ${noun2}, ${adj1}, ${verb1}`;

        madlib.innerHTML = myText;

    });
    
}())