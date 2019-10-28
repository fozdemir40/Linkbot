window.addEventListener("load", function() {
    let f = document.getElementById('start-button');
    setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? 'visible' : 'hidden');
    }, 1000);

}, false);