// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal content, close the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}