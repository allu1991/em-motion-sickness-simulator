window.addEventListener("load", function() {
    setTimeout ( function() {

        // Define DOM elements
        const theRoot = document.querySelector("#root")

        // Reveal root when window fully loaded
        theRoot.classList.remove("hidden")

        // Parallax
        var scene = document.getElementById('root');
        var parallax = new Parallax(scene, {
            selector: '.parallax-element'
        });

    }, 100)
})
