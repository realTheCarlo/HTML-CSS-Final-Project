var inputElements = document.querySelectorAll('write');
const hamburgerIcon = document.querySelector('.ham-image');
const hamburgerMenu = document.querySelector('.ham-menu');
const crossIcon = document.querySelector('.cross-icon');

hamburgerIcon.addEventListener('click', function () {
  hamburgerMenu.classList.add('show-hamburger');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-hamburger');
});

function writing(element) {
    element.classList.add("typing");
    setTimeout(function() {
        element.classList.remove("typing");
    }, 2000);
}
inputElements.forEach(function(element) {
    element.addEventListener("keyup", function() {
        writing(this);
    });
});