// this is javascript file
document.addEventListener("DOMContentLoaded", function () {
    function scrollToTop() {
        let sound = document.getElementById('soundEffect');
        sound.volume = 0.15; // Adjust volume (0.0 = mute, 1.0 = full volume)
        sound.play();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Assign scrollToTop function to button click
    document.getElementById("backToTop").addEventListener("click", scrollToTop);

    // Show or hide the button based on scroll position
    window.onscroll = function () {
        var button = document.getElementById("backToTop");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };
});
