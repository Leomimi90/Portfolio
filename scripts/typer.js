

// Preloader
$(document).ready(function () {
    window.onload = function () {
        $('.preload').fadeOut(500, function () { $('.preload').hide(); });
        $('.maincontent').fadeIn(1000);
        // Typer
        const list = ["Developer", "Musician", "Leader", "Mentor", "Teacher", "Advocate"];
        let count = 0;
        let index = 0;
        let currenText = "";
        let letter = "";

        (function type() {
            if (count === list.length) {
                count = 0;
            }
            currenText = list[count];
            letter = currenText.slice(0, ++index);
            content = document.querySelector(".typer1")
            content.style.fontFamily
            document.querySelector(".typer1").textContent = letter;

            if (letter.length === currenText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 250)
            // alert("done")

        })();
    }
});