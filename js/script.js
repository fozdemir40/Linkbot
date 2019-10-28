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

    windowScroll();
    

})

function windowScroll(){
    window.onscroll = function(){
        if(window.pageYOffset < 4200 || document.documentElement.scrollTop < 4200){
            scrollFade()
        }
    }
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