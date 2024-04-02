function aha () {
    var audio=document.getElementById("sound1")
    sound1.play();
}

function dan () {
    var audio=document.getElementById("sound2")
    sound2.play();
}

function back() {
    var audio=document.getElementById("sound3")
    sound3.play();
}

function bang() {
    var audio=document.getElementById("sound4")
    sound4.play();
}

function email() {
    var audio=document.getElementById("sound5")
    sound5.play();
}


function egg() {
    var audio=document.getElementById("sound6")
    sound6.play();
}

function confused() {
    var audio=document.getElementById("sound7")
    sound7.play();
}

function hello() {
    var audio=document.getElementById("sound8")
    sound8.play();
}

function mystery() {
    var audio=document.getElementById("sound9")
    sound9.play();
}

function textToAudio () {
    let msg= document.getElementById("text-to-speech").value;
    let speech= new SpeechSynthesisUtterance();
    speech.lang= "en-US";
    speech.text= msg;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);


}