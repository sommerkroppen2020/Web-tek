function les_mer(dotsid, moreid, buttonid) {
  var dots = document.getElementById(dotsid);
  var moreText = document.getElementById(moreid);
  var btnText = document.getElementById(buttonid);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Les mer";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Les mindre";
    moreText.style.display = "inline";
  }
}

//Code from https://www.w3schools.com/howto/howto_js_read_more.asp
