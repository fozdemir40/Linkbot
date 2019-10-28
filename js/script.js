
// Blinking 'PUSH START BUTTON' text
window.addEventListener("load", function() {
    let f = document.getElementById('start-button');
    setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? 'visible' : 'hidden');
    }, 1000);

}, false);


// Event with function, initiating audio, text fade animation and windowScroll function
let eventButton = document.getElementById('story-button');
let storyAudio = document.getElementById('theme-song');

eventButton.addEventListener("click", function(){
    storyAudio.play();
    storyAudio.volume = 1;
    
    textFading();
    windowScroll();
    

})

// Checks position of scrollbar to stop audio after getting to 4200px
function windowScroll(){
    window.onscroll = function(){
        if(window.pageYOffset < 4200 || document.documentElement.scrollTop < 4200){
            audioFade()
            resetFading()
        }
    }
}

// Fading the text out
function textFading(){
    document.getElementById('triforce').classList.add('triforce-fade');
    document.getElementById('robot-text').classList.add('robot-text-fade');
    document.getElementById('start-button').classList.add('start-button-fade');
    document.getElementById('story-button').style.cursor = 'default';
}

// Resetting the text to visibile
function resetFading(){
    document.getElementById('triforce').classList.remove('triforce-fade');
    document.getElementById('robot-text').classList.remove('robot-text-fade');
    document.getElementById('start-button').classList.remove('start-button-fade');
    document.getElementById('story-button').style.cursor = 'pointer';
}

// Function to fade audio out.
function audioFade(){
        let interval = setInterval(fade, 200)
    
        //Fade out for audio
        function fade(){
            let newVolume = storyAudio.volume - 0.1
    
            if(newVolume >= 0){
                storyAudio.volume = newVolume
            }else{
                clearInterval(interval);
                storyAudio.volume = 0;
                storyAudio.pause();
                storyAudio.src = storyAudio.src
            }
        } 
}