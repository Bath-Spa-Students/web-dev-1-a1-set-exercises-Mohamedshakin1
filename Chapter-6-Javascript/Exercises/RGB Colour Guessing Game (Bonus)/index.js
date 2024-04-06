var color_name=document.getElementById('rgb-name');
var box1=document.getElementById('box1')
var box2=document.getElementById('box2')
var box3=document.getElementById('box3')
var a=document.getElementById('first')
var b=document.getElementById('second')
var c=document.getElementById('third')
var result= document.getElementById('result')


function randomColor() {
    var r= Math.floor(Math.random()*256)
    var g= Math.floor(Math.random()*256)
    var b= Math.floor(Math.random()*256)
    return "rgb(" + r +", " + g +", " + b +")";
}


function fillColor() {
        var x=box1.style.backgroundColor= randomColor()
        a.innerHTML=x
        var y=box2.style.backgroundColor= randomColor()
        b.innerHTML=y
        var z=box3.style.backgroundColor= randomColor()
        c.innerHTML=z
        var colors=[x,y,z]
        var pickColor= Math.floor(Math.random()* colors.length);
        color_name.innerHTML= colors[pickColor]

}


function colorResult() {
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

function game() {
    randomColor();
    fillColor();
}