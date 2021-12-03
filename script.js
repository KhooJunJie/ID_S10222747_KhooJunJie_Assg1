window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function getInputValue() {
    let inputFname = document.getElementById("fname").value;
    let inputLname = document.getElementById("lname").value;
    let inputEmail = document.getElementById("email").value;
    let inputSubject = document.getElementById("subject").value;
    let inputMessage = document.getElementById("message").value;
    alert("Successfully submitted! Thanks!")
}