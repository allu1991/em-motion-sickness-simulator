window.addEventListener("load", function() {

    const enterFullscreen = () => {
        // Check for browser fullscreen support
        if (typeof(document.body.requestFullscreen) !== 'undefined') {
            if (!document.fullscreenElement || !document.webkitFullscreenElement) {
                document.body.requestFullscreen();
            }
        } else {
            console.error("Your browser does not support full screen mode")
        }
    };

    setTimeout ( function() {

        // Define DOM elements
        const theCanvas = document.querySelector("#the-canvas")
        const startButton = document.querySelector("#start-button")
        const disclaimer = document.querySelector("#screen-disclaimer")

        // Start the app
        startButton.addEventListener("click", function() {
            enterFullscreen();
            setTimeout ( function() {
                startButton.classList.add("hidden")
                theCanvas.classList.remove("hidden");
                disclaimer.classList.add("hidden");
            }, 100);
        })

        // Parallax
        var scene = document.getElementById('root');
        var parallax = new Parallax(scene, {
            selector: '.parallax-element'
        });

    }, 100);
})
