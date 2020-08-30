function buttonClick(e){
    //console.log("yes");
    //document.querySelector('body').style.backgroundColor = 'red';
    //document.querySelector('header').textContent = "Nu! Iepurasul de Paste!";
    //var output= document.getElementById('output');
    //output.innerHTML ='<h3>'+e.target+'</h3>';
    //console.log(e.type);
    //console.log(e.clientY);
    //console.log(e.clientX);
    //console.log(e.offsetY);
    //console.log(e.offsetX);
    //console.log(e.altKey);
    //console.log(e.shiftKey);
    //console.log(e.ctrlKey);
    //console.log("Event type " + e.type);
}


var button = document.querySelector('button');
var box = document.querySelector('#box');
//button.addEventListener('click',buttonClick);
//button.addEventListener('dblclick',buttonClick);
//button.addEventListener('mousedown',buttonClick);
//button.addEventListener('mouseup',buttonClick);
//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);
//box.addEventListener('mouseout',runEvent);
//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mousemove',runEvent);
var inputted = document.querySelector("input[type='text']");
inputted.addEventListener('keydown',runEvent);
inputted.addEventListener('focus',runEvent);
inputted.addEventListener('blur',runEvent);
inputted.addEventListener('cut',runEvent);
inputted.addEventListener('paste',runEvent);


function runEvent(e){
    console.log("Event type " + e.type);
    //var output= document.getElementById('output');
    //output.innerHTML ='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY;
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",105)";
    var output= document.querySelector("#output")
    output.innerHTML ='<h3>'+e.target.value+'</h3>';
}