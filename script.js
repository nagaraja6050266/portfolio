var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("scrollup").style.marginTop = "90vh";
    } else {
        document.getElementById("nav").style.top = "-100px";
        document.getElementById("scrollup").style.marginTop = "100vh";
    }
    prevScrollpos = currentScrollPos;
}
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }  
  
