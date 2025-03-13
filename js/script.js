document.addEventListener("DOMContentLoaded", function () {
    // Scroll to Top Function
    function scrollToTop() {
        let sound = document.getElementById("soundEffect");
        if (sound) {
            sound.volume = 0.15;
            sound.play();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Replace Name Function
    function replaceName() {
        let name = prompt("May I know your name?", "");
        if (name && name.trim() !== "") {
            document.getElementById("name").innerHTML = name;
        }
    }

    // Form Validation for Message Us
    function validateForm(event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name-input").value.trim();
        let birthday = document.getElementById("birthday-input").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let contact = document.getElementById("contact-input").value.trim();
        let message = document.getElementById("message-input").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (birthday === "") {
            alert("Please select your date of birth.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (contact === "" || !/^[0-9]{10,15}$/.test(contact)) {
            alert("Enter a valid Contact Number (10-15 digits).");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        // Show popup output after successful submission
        alert(
            `Form Submitted Successfully!\n\nName: ${name}\nDate of Birth: ${birthday}\nGender: ${gender.value}\nContact: ${contact}\nMessage: ${message}`
        );

        // Reset form after submission
        document.getElementById("messageForm").reset();
    }

    // Attach Form Validation to Submit Button
    let form = document.getElementById("messageForm");
    if (form) {
        form.addEventListener("submit", validateForm);
    }

    // Autoslide Banner Functionality
    let bannerIndex = 0;

    function showBanner() {
        const banners = document.getElementsByClassName("banner-img");

        console.log("Total banners found:", banners.length);

        if (bannerIndex >= banners.length) {
            bannerIndex = 0;
        }

        for (let i = 0; i < banners.length; i++) {
            banners[i].style.display = "none";
        }

        banners[bannerIndex].style.display = "block";
    }

    function nextBanner() {
        bannerIndex++;
        showBanner();
    }

    // Start Autoslide
    showBanner();
    setInterval(nextBanner, 3000);

    // Initialize
    replaceName();

    let buttonReplaceName = document.getElementById("button");
    if (buttonReplaceName) {
        buttonReplaceName.addEventListener("click", replaceName);
    }

    let backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
        backToTopButton.addEventListener("click", scrollToTop);
    }

    window.onscroll = function () {
        let button = document.getElementById("backToTop");
        if (button) {
            button.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
        }
    };
});
