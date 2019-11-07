var i = 0;
	var lastScrollTop = 0;

	var runOnScroll =  function() {
	  i+=1;console.log(i);
  	  var picture = document.getElementById('logo');
	  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	   	if (st > lastScrollTop){
	    	picture.src="img/reka2.png"

	    } else {
	      picture.src="img/reka.png"
	    }
	    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   

	};


window.addEventListener("scroll", runOnScroll);
