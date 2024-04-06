var color_name=document.getElementById('rgb-name');
var box1=document.getElementById('box1')
var box2=document.getElementById('box2')
var box3=document.getElementById('box3')
var a=document.getElementById('first')
var b=document.getElementById('second')
var c=document.getElementById('third')
var result= document.getElementById('result')

//Created a function named random()
//Each time function random is called, each time it will generate different random colors
function randomColor() {
    var r= Math.floor(Math.random()*256)
    var g= Math.floor(Math.random()*256)
    var b= Math.floor(Math.random()*256)
    return "rgb(" + r +", " + g +", " + b +")";
}

//Created a function fillColor()
function fillColor() {
        var x=box1.style.backgroundColor= randomColor()  //it will fill random color to box1
        a.innerHTML=x  //it will insert value of first box color
        var y=box2.style.backgroundColor= randomColor()  //it will fill random color to box2
        b.innerHTML=y  //it will insert value of second box color
        var z=box3.style.backgroundColor= randomColor()  //it will fill random color to box3
        c.innerHTML=z  //it will insert value of third box color
        var colors=[x,y,z]
        var pickColor= Math.floor(Math.random()* colors.length);  //it will pick any color among three random colors
        color_name.innerHTML= colors[pickColor]    // picked color will be inserted to Id selector of 'rgb-name'

}

//Created a function fillColor()
function colorResult() {
    // Whichever box color is matched to picked color will be display as the correct answer in Id selector of 'result' after clicking any of three boxes
    if (color_name.textContent==a.textContent){
        result.innerHTML="A is the right answer"
    }
    else if (color_name.textContent==b.textContent){
        result.innerHTML="B is the right answer"
    }
    else if (color_name.textContent==c.textContent){
        result.innerHTML="C is the right answer"
    }  
}

//Created a function fillColor()
//To clear the result for next round, we use just ""
function clear() {
    result.innerHTML=""
}

//Created a function game()
//Inside function game(), it contains three function that is randomColor(), fillColor, space
//This function used for to play next round of the game
function game() {
    randomColor();  
    fillColor();
    space()
}