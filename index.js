alert("You can either press keys on keyboard or you can press keys on screen");
var numofbut=document.querySelectorAll(".drum").length;
for(var i=0;i<numofbut;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var letter=this.innerHTML;
        maker(letter);
        buttonAnimation(letter);
    })
}

document.addEventListener("keypress",function(event){
    maker(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentkey){
    var activekey=document.querySelector("."+ currentkey);
    activekey.classList.add("pressed");
    setTimeout(function() {
        activekey.classList.remove("pressed");
    },300);
}
function maker(key)
{
    switch(key)
        {
            case "w":
                var tom1=new Audio("tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("tom3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash=new Audio("crash.mp3");
                crash.play();
                break;
            case "k":
                var kick=new Audio("kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var kick=new Audio("kick-bass.mp3");
                kick.play();
                break;
            default:console.log("letter");  
        }
}


