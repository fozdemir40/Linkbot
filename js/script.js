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
})
