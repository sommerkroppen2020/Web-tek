



const navbar_content = "<div class='nav'>\
          <nav>\
            <ul style='list-style: none;'>\
            <li class='dropdown'>\
              <a href='javascript:void(0)' class='dropdown-button' onclick='myFunction()'>Kamper</a>\
              <div class='dropdown-content card'>\
                <a href='kalender.html'>Kalender</a>\
                <a href='kampreferat.html'>Referater</a>\
              </div>\
            </li>\
              <li><a href='tabell.html'>Tabell</a></li>\
              <li class='dropdown'>\
                <a href='javascript:void(0)' class='dropdown-button' onclick='myFunction()'>Laget</a>\
                <div class='dropdown-content card'>\
                  <a href='spillere.html'>Spillere</a>\
                  <a href='stab.html'>Stab</a>\
                </div>\
              </li>\
              <li><a href='Sosialt.html'>Sosialt</a></li>\
              <li onclick='openForm()'>Kontakt\
                <div class='form-popup' id='myForm'>\
                  <form class='form-container' action='javascript:void(0);'>\
                    <p onclick='closeForm()' class='close-btn'>&times;</p>\
                    <h1>Send mail!</h1>\

                    <label><b>Email</b></label>\
                    <input type='email' placeholder='Skriv Email' name='email' required>\
                    <br>\

                    <label><b>Navn</b></label>\
                    <input type='text' placeholder='Skriv navn' name='text' required>\
                    <br>\

                    <label><b>Hvem er du?</b></label>\
                    <input type='text' placeholder='Skriv litt om hvorfor du tar kontakt...' name='tekst'>\
                    <br>\

                    <button type='submit' class='btn'>Send inn</button>\
                  </form>\
                </div>\
              </li>\
              <li><a href='om.html'>Om oss</a></li>\
            </ul>\
          </nav>\
        </div>";


/* Save the footer content in a constant */
const footer_content = '<footer id='footer'>\

</footer>';


/* Get the div where the navbar should be placed and set it's innerHTML to
the contents of the navbar constant above. */
document.getElementById('navbar_content').innerHTML = navbar_content;

/* Same here except with the footer */
/*document.getElementById('footer_content').innerHTML = footer_content;*/
