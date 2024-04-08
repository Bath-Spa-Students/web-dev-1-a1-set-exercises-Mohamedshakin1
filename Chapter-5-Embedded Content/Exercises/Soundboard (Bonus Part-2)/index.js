//Created a function named aha()
function aha () {
    var audio=document.getElementById("sound1")  //audio of sound1 will be retrieve by getting their respective Id and will be stored in variable audio
    sound1.play();  //It will play audio of sound1 once the button is clicked
}

//Created a function named dan()
function dan () {
    var audio=document.getElementById("sound2") //audio of sound2 will be retrieve by getting their respective Id and will be stored in variable audio
    sound2.play();  //It will play audio of sound2 once the button is clicked
}

//Created a function named back()
function back() {
    var audio=document.getElementById("sound3") //audio of sound3 will be retrieve by getting their respective Id and will be stored in variable audio
    sound3.play();   //It will play audio of sound3 once the button is clicked
}

//Created a function named bang()
function bang() {
    var audio=document.getElementById("sound4") //audio of sound4 will be retrieve by getting their respective Id and will be stored in variable audio
    sound4.play();  //It will play audio of sound4 once the button is clicked
}

//Created a function named email()
function email() {
    var audio=document.getElementById("sound5") //audio of sound5 will be retrieve by getting their respective Id and will be stored in variable audio
    sound5.play();  //It will play audio of sound5 once the button is clicked
}

//Created a function named egg()
function egg() {
    var audio=document.getElementById("sound6") //audio of sound6 will be retrieve by getting their respective Id and will be stored in variable audio
    sound6.play();  //It will play audio of sound6 once the button is clicked
}

//Created a function named confused()
function confused() {
    var audio=document.getElementById("sound7") //audio of sound7 will be retrieve by getting their respective Id and will be stored in variable audio
    sound7.play();  //It will play audio of sound7 once the button is clicked
}

//Created a function named hello()
function hello() {
    var audio=document.getElementById("sound8") //audio of sound8 will be retrieve by getting their respective Id and will be stored in variable audio
    sound8.play();   //It will play audio of sound8 once the button is clicked
}

//Created a function named mystery()
function mystery() {
    var audio=document.getElementById("sound9") //audio of sound9 will be retrieve by getting their respective Id and will be stored in variable audio
    sound9.play();   //It will play audio of sound9 once the button is clicked
}

//Created a function named textToAudio()
function textToAudio () {
    let msg= document.getElementById("text-to-speech").value; //value will be retrieve by getting their respective Id and will be stored in variable msg
    let speech= new SpeechSynthesisUtterance();  // SpeechSynthesisUtterance() is a function, it converts text into epeech 
    speech.lang= "en-US";  //language is English
    speech.text= msg;      // it converts text written in msg variable to speech
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);


}