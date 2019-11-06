
//learned this code from W3schools
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar_content");
var sticky = navbar.offsetTop;
var head = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.style.position="fixed";
    navbar.style.width="100%";
    navbar.style.top="0";
    navbar.style.zIndex="1";
    head.style.marginBottom="105px";
  }
  else {
    navbar.style.position="static";
    navbar.style.width="100%";
    navbar.style.top=sticky;
    head.style.marginBottom="0";
  }
}
