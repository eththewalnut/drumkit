let numberOfDrumButtons = document.querySelectorAll(".drum").length;
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');




for (let i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {  
        makeSound(this.innerHTML);
    })
} 

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
})


function makeSound(key) {
    switch (key) {
            case "w":
                tom1.play();
                    break;
            
            case "a":
                tom2.play();
                    break;
                
            case "s":
                tom3.play();
                    break;
            
            case "d":
                tom4.play();
                    break;
            
            case "j":
                snare.play();
                    break;

            case "k":
                crash.play();
                    break;
            
            case "l":
                kickBass.play();
                    break;
            default: console.log();
                break;
    }
}
