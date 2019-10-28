window.addEventListener("load", function() {
    let f = document.getElementById('start-button');
    setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? 'visible' : 'hidden');
    }, 1000);

}, false);

let eventButton = document.getElementById('story-button');
let storyAudio = document.getElementById('theme-song');

eventButton.addEventListener("click", function(){
    storyAudio.play();
    storyAudio.volume = 1;
    
    textFading();
    windowScroll();
    

})

function windowScroll(){
    window.onscroll = function(){
        if(window.pageYOffset < 4200 || document.documentElement.scrollTop < 4200){
            scrollFade()
        }
    }
}

function textFading(){
    document.getElementById('triforce').classList.add('triforce-fade');

    document.getElementById('robot-text').classList.add('robot-text-fade');

    document.getElementById('start-button').classList.add('start-button-fade');
}

function scrollFade(){
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