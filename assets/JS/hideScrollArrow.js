function hideArrow(){
  // Get the navbar
  this.arrow = document.getElementById("mobileArrow");

// Get the offset position of the navbar
  this.hideArrow = arrow.offsetTop;



}


var hideArrow;
var arrow;
document.addEventListener("scroll", hideWithScroll);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function hideWithScroll() {
  if (window.pageYOffset  >= hideArrow -60 ) {
    arrow.classList.add("invisible")
  } else {
    arrow.classList.remove("invisible");
  }
}
