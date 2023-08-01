document.addEventListener("DOMContentLoaded", function () {
    const gif = document.getElementById("gif");

    gif.addEventListener("animationend", function () {
        gif.src = "waving.gif";
        //setTimeout(function () {
            //gif.style.display = "none"; // Hide the GIF after 0.5 seconds
       // }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const gif = document.getElementById("gif");
    const welcomeText = document.getElementById("welcome-text");

    gif.addEventListener("animationend", function () {
        if (gif.classList.contains("walking-animation")) {
            gif.src = "waving.gif";
            gif.classList.remove("walking-animation");
            gif.classList.add("waving-animation");
        }
    });

    // Display the welcome text after 5 seconds
    setTimeout(function () {
        welcomeText.style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
});
