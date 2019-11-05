



const Navbar_Content = '<div class="nav">\
          <nav>\
            <ul style="list-style: none;">\
            <li class="dropdown">\
              <a href="javascript:void(0)" class="dropdown-button">Kamper</a>\
              <div class="dropdown-content card">\
                <a href="kalender.html">Kalender</a>\
                <a href="kampreferat.html">Referater</a>\
              </div>\
            </li>\
              <li><a href="tabell.html">Tabell</a></li>\
              <li class="dropdown">\
                <a href="javascript:void(0)" class="dropdown-button">Laget</a>\
                <div class="dropdown-content card">\
                  <a href="spillere.html">Spillere</a>\
                  <a href="stab.html">Stab</a>\
                </div>\
              </li>\
              <li><a href="Sosialt.html">Sosialt</a></li>\
              <li><a href="om.html">Om oss</a></li>\
            </ul>\
          </nav>\
        </div>';


/* Save the footer content in a constant */
const footer_content = "<footer id="footer">\

</footer>";


/* Get the div where the navbar should be placed and set it"s innerHTML to
the contents of the navbar constant above. */
function my_function(){
  document.getElementById("navbar_content").innerHTML = "endret";
}


/* Same here except with the footer */
/*document.getElementById("footer_content").innerHTML = footer_content;*/
