document.getElementById("addButton").onclick = function () {getGrade(document.getElementById("inputText").value)};

function getGrade(score){
    let letter = "";
    console.log(score);
    if (score > 30){
        letter = "INVALID SCORE!!! >.<";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "red";
        document.querySelector("body").style.backgroundImage = "url(img/error.gif)";
    }
    else if (score > 25){
        letter = "A :DD";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "gold";
        document.querySelector("body").style.backgroundImage = "url(img/C4tj.gif)";
    }
    else if (score > 20){
        letter = "B :D";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "green";
        document.querySelector("body").style.backgroundImage = "url(img/pikachu.gif)";
    }
    else if (score > 15){
        letter = "C :)";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "yellow";
        document.querySelector("body").style.backgroundImage = "url(img/snorlax.gif)";
    }
    else if (score > 10){
        letter = "D :/";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "purple";
        document.querySelector("body").style.backgroundImage = "url(img/chase.gif)";
    }
    else if (score > 5){
        letter = "E :(";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "purple";
        document.querySelector("body").style.backgroundImage = "url(img/chase.gif)";
    }
    else if (score >= 0){
        letter = "F :'(";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "red";
        document.querySelector("body").style.backgroundImage = "url(img/sleeping.gif)";
    }
    else{
        letter = "INVALID SCORE!!! >.<";
        document.getElementById("result").innerHTML = letter;
        document.getElementById("result").style.color = "red";
        document.querySelector("body").style.backgroundImage = "url(img/error.gif)";
    }
}