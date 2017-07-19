var padOne = document.getElementById("one");
var padTwo = document.getElementById("two");
var padThree = document.getElementById("three");
var padFour = document.getElementById("four");
var padFive = document.getElementById("five");
var padSix = document.getElementById("six");
var padSeven = document.getElementById("seven");
var padEight = document.getElementById("eight");
var padNine = document.getElementById("nine");
var padTen = document.getElementById("ten");
var padEleven = document.getElementById("eleven");
var padTwelwe = document.getElementById("twelwe");
var padThirteen = document.getElementById("thirteen");
var padFourteen = document.getElementById("fourteen");
var padFifteen = document.getElementById("fifteen");
var padSixteen = document.getElementById("sixteen");

var screen = document.getElementById("screen");
screen.innerHTML = "PRESS KEY";

document.onkeydown = function (e) {
    var pressedKey = e.which || e.keyCode;

    //If user pressed 1, 2, 3, 4 key
    if (pressedKey === 49) {
        padOne.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Kick.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "KICK";
    } else if (pressedKey === 50) {
        padTwo.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Snare.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "SNARE";
    } else if (pressedKey === 51) {
        padThree.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Clap.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "CLAP";
    } else if (pressedKey === 52) {
        padFour.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Rim.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "RIM";
    }
    //If user pressed Q, W, E, R key
    else if (pressedKey === 81) {
        padFive.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Closedhat.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "CLOSED HAT";
    } else if (pressedKey === 87) {
        padSix.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Openhat.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "OPEN HAT";
    } else if (pressedKey === 69) {
        padSeven.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/OPhat.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "OPEN HAT 2";
    } else if (pressedKey === 82) {
        padEight.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/HiConga.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "HIGH CONGA";
    }
    //If user pressed A, S, D, F key
    else if (pressedKey === 65) {
        padNine.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Cowbell.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "COWBELL";
    } else if (pressedKey === 83) {
        padTen.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/HiTom.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "HIGH TOM";
    } else if (pressedKey === 68) {
        padEleven.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/LoTom.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "LOW TOM";
    } else if (pressedKey === 70) {
        padTwelwe.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/LoConga.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "LOW CONGA";
    }
    //If user pressed Z, X, C, V key
    else if (pressedKey === 90) {
        padThirteen.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Cabasa.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "CABASA";
    } else if (pressedKey === 88) {
        padFourteen.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Ride.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "RIDE";
    } else if (pressedKey === 67) {
        padFifteen.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Crash.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "CRASH";
    } else if (pressedKey === 86) {
        padSixteen.style.backgroundColor = "white";
        var audioEl = document.createElement("audio");
            audioEl.src = "drum/Tambourine.wav";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        screen.innerHTML = "TAMBOURINE";
    }
};

document.onkeyup = function (e) {
    var pressedKey = e.which || e.keyCode;
    screen.innerHTML = "";
    
    //If user pressed 1, 2, 3, 4 key
    if (pressedKey === 49) {
        padOne.style.backgroundColor = "darkgray";
    } else if (pressedKey === 50) {
        padTwo.style.backgroundColor = "darkgray";
    } else if (pressedKey === 51) {
        padThree.style.backgroundColor = "darkgray";
    } else if (pressedKey === 52) {
        padFour.style.backgroundColor = "darkgray";
    }
    //If user pressed Q, W, E, R key
    else if (pressedKey === 81) {
        padFive.style.backgroundColor = "darkgray";
    } else if (pressedKey === 87) {
        padSix.style.backgroundColor = "darkgray";
    } else if (pressedKey === 69) {
        padSeven.style.backgroundColor = "darkgray";
    } else if (pressedKey === 82) {
        padEight.style.backgroundColor = "darkgray";
    }
    //If user pressed A, S, D, F key
    else if (pressedKey === 65) {
        padNine.style.backgroundColor = "darkgray";
    } else if (pressedKey === 83) {
        padTen.style.backgroundColor = "darkgray";
    } else if (pressedKey === 68) {
        padEleven.style.backgroundColor = "darkgray";
    } else if (pressedKey === 70) {
        padTwelwe.style.backgroundColor = "darkgray";
    }
    //If user pressed Z, X, C, V key
    else if (pressedKey === 90) {
        padThirteen.style.backgroundColor = "darkgray";
    } else if (pressedKey === 88) {
        padFourteen.style.backgroundColor = "darkgray";
    } else if (pressedKey === 67) {
        padFifteen.style.backgroundColor = "darkgray";
    } else if (pressedKey === 86) {
        padSixteen.style.backgroundColor = "darkgray";
    }
};
