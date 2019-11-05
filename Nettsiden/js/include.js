/*
FILE NAME: include.js
WRITTEN BY: Lars Lien Ankile
WHEN: October/Novemvber 2017
PURPOSE: Insert the navbar and footer into every page on the site, in
accordance with the DRY principle. */

/* Save the navbar markup in a constant */
const navbar_content = "<div class='navbar'>\
  <ul id='navbar'>\
    <li class='dropdown'>\
      <a href='javascript:void(0)' class='dropbtn'>Kamper</a>\
      <div class='dropdown-content'>\
        <a href='kalender.html'>Kalender</a>\
        <a href='kampreferat.html'>Referater</a>\
      </div>\
    </li>\
    <li><a href='tabell.html'>Tabell</a></li>\
    <li class='dropdown'>\
      <a href='javascript:void(0)' class='dropbtn'>Kamper</a>\
      <div class='dropdown-content'>\
        <a href='spillere.html'>Spillere</a>\
        <a href='stab.html'>Stab</a>\
      </div>\
    </li>\
    <li><a href='sosialt.html'>Sosialt</a></li>\
    <li><a href='kontakt.html'>Kontakt</a></li>\
    <li><a href='om.html'>Om oss</a></li>\
  </ul>\
</div>";

/* Save the footer content in a constant */
const footer_content = '<footer id="footer">\
  <div class="auto-margin" id="footer-container">\
    <div class="row">\
        <div class="col-3"><p>Realkameratene FK</p></div>\
        <div class="col-3"><p><a target="_blank" href="">Tempe Arena</a></p></div>\
        <div class="col-3"><p>Telefonnummer: <br>+47 472 56 744</p></div>\
        <div class="col-3"><p><a target="_top" href="mailto:johannes.padel@gmail.com">johannes.padel@gmail.com</a></p></div>\
    </div>\
  </div>\
  <div class="auto-margin" id="footer-container-liten-skrift">\
    <hr>\
    <p id="liten-skrift">This site is constantly reviewed to avoid errors, but we cannot warrant full correctness of all content and/or pricing. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 2017-2017 by Trondheim Hostel Holding AS &copy;&reg;. All Rights Reserved. This webspace is created by Martin Egeli, Mathias Skotnes, Mats Kvelland, Anders Bergesen og Lars Lien Ankile.</p>\
  </div>\
</footer>';


/* Get the div where the navbar should be placed and set it's innerHTML to
the contents of the navbar constant above. */
document.getElementById('navbar_content').innerHTML = navbar_content;

/* Same here except with the footer */
document.getElementById('footer_content').innerHTML = footer_content;
