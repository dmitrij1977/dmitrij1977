window.onscroll = function() {
	docScroll ();
	scrollFunction();
}

function docScroll () {

let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
	documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
	scrolled = (windowScroll / documentHeight) * 100;
	document.getElementById('myBar').style.width = scrolled + '%';
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("buttonUP").style.display = "block";
    } else {
        document.getElementById("buttonUP").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}