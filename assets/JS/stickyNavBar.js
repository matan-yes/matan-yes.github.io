// When the user scrolls the page, execute myFunction
function sticky(){
  // Get the navbar
  this.navbar = document.getElementById("navbar");

// Get the offset position of the navbar
  this.sticky = navbar.offsetTop;

  //document.onscroll = function() {stickyWithScroll()};
}
var sticky;
var navbar
document.addEventListener("scroll", stickyWithScroll);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyWithScroll() {
  if (window.pageYOffset  >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
