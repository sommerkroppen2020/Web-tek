function darkColor(){
	document.getElementById('stylingsheet').setAttribute('href', 'css/dark.css')	
	var dark = document.getElementById('swap');
	dark.innerText='Normal mode';
	dark.setAttribute('onclick', 'normalColor()')


}

function normalColor(){
	document.getElementById('stylingsheet').setAttribute('href', 'css/style.css')	
	var normal = document.getElementById('swap');
	normal.innerText='Dark mode';
	normal.setAttribute('onclick', 'darkColor()')	




}

