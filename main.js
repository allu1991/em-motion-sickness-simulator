window.addEventListener("load", function() {
    setTimeout ( function() {

        // Define DOM elements
        const theCanvas = document.querySelector("#the-canvas")
        const startButton = document.querySelector("#start-button")

        // Start the app
        startButton.addEventListener("click", function() {
            startButton.classList.add("hidden")
            theCanvas.classList.remove("hidden");
        })

        // Parallax
        var scene = document.getElementById('root');
        var parallax = new Parallax(scene, {
            selector: '.parallax-element'
        });

    }, 100)
})
