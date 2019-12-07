// Get the button that opens the modal
var btn = document.getElementById("header-buttons");

// When the user clicks the button, open the modal 
function openSignUpDialog() {
    var signUpModal = document.getElementById("sign-up-modal");
    signUpModal.style.display = "block";
}

function openSignInDialog() {
    document.getElementById("sign-in-modal").style.display = "block";
}

function goToSignUpDialog() {
    document.getElementById("sign-in-modal").style.display = "none";
    openSignUpDialog();
}

function openPostsDialog() {
    document.getElementById("create-post-modal").style.display = "block";
}

function closeSignInDialog() {
    var signInModal = document.getElementById("sign-in-modal");
    signInModal.style.display = "none";
}

function closeSignUpDialog() {
    var signUpModal = document.getElementById("sign-up-modal");
    signUpModal.style.display = "none";
}

function closePostsDialog() {
    var signUpModal = document.getElementById("create-post-modal");
    signUpModal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
    signUpModal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementsByClassName("modal");
    for (var i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
            modal[0].style.display = "none";
            modal[1].style.display = "none";
            modal[2].style.display = "none";
        }
    }
}