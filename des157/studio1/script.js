(function () {

    'use strict';

    // (1) users select their options and submit the form
    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");
    const tryagain = document.querySelector("#tryagain");
    const defaultCharacter = document.querySelector("#defaultCharacter");
    const defaultBalloon = document.querySelector("#defaultBalloon");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();

        const mean = document.querySelector("#mean").value;
        if (mean === "nightmares. It is so vulnerable that could scare me at any time with loud bursting sound.") {
            document.getElementById("madlib").style.color = "black";
        }

        const want = document.querySelector("#want").value;
        if (want === "I've been asking God to keep me away from balloons"){
            defaultBalloon.className = "hidden";
        }

        const balloon = document.querySelector("#balloon").value;
        if (balloon === "ice-a passion fruit flavored ice-cream"){
            const icecream = document.querySelector("#blIcecream");

            icecream.className = "";
        } else if (balloon === "my favorite Starbucks frappuccino") {
            const starbucks = document.querySelector("#blStarbucks");

            starbucks.className = "";
        } else if (balloon === "a cup of milktea with boba") {
            const milktea = document.querySelector("#blMilktea");

            milktea.className = "";
        }

        const like = document.querySelector("#like").value;
        if (like === "I loved so much."){
            const smile = document.querySelector("#characterSmile");
            defaultCharacter.className = "hidden";
            smile.className = "";
        } else if (like === "I hated so bad.") {
            const sad = document.querySelector("#characterSad");
            defaultCharacter.className = "hidden";
            sad.className = "";
        }
        
        const act = document.querySelector("#act").value;
        if (act === "blow them up?"){
            defaultBalloon.className = "hidden";
            const blowup = document.querySelector("#blowup");
            blowup.className = "";
        } else if (act === "sned them to who I love?") {
            const gift = document.querySelector("#gift");
            defaultBalloon.className = "hidden";
            gift.className = "";
        }

        // alert if there is empty selection
        // if (mean || want || balloon || like || act === "empty") {
        //     alert("You have an empty selection. Please try again :)");
        // }

        const myText = `Balloon means a lot to different people. For me, balloon is a symbol of ${mean} ${want} since I was little. I asked my mom to buy one for me. The style was like ${balloon}, which ${like} If I could have one more balloon, could I ${act}`;

        myForm.className = "hidden";
        madlib.innerHTML = myText;

        tryagain.className = "";

    });

})();