let hamburger_el = document.getElementsByClassName("hamburger")[0] ;

hamburger_el.addEventListener("click", function(){

    if ( document.getElementsByClassName("header")[0].classList.contains("slide") ) {
        document.getElementsByClassName("header")[0].classList.toggle("slide");
    } else {
        document.getElementsByClassName("header")[0].classList.toggle("slide");
    }
})