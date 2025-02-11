// JavaScript to handle form submission
document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Display form data in an alert
        alert(
            "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
        );
    });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};