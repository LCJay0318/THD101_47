
let tab_title = document.getElementsByClassName("tab-title")[0].querySelectorAll("span");
let tab_container = document.getElementsByClassName("tab_container");

tab_title[0].classList.add("on");
tab_container[0].style.display = "block" ;
for( let i = 0 ; i < tab_title.length ; i++ ){

    tab_title[i].addEventListener("click", function(){
        for( let j = 0 ; j < tab_title.length ; j++){
            tab_title[j].classList.remove("on");
        }

        for( let j = 0 ; j < tab_container.length ; j++){
            tab_container[j].style.display = "none";
        }

        if ( tab_title[i].id == "company" ){
            tab_title[i].classList.add("on");
            for( let j = 0 ; j < tab_container.length ; j++){
                if (tab_container[j].id == "company") {
                    tab_container[j].style.display = "block";
                }
            }
        } else if ( tab_title[i].id == "project" ){
            tab_title[i].classList.add("on");
            for( let j = 0 ; j < tab_container.length ; j++){
                if (tab_container[j].id == "project") {
                    tab_container[j].style.display = "block";
                }
            }
        } else if ( tab_title[i].id == "honor" ) {
            tab_title[i].classList.add("on");
            for( let j = 0 ; j < tab_container.length ; j++){
                if (tab_container[j].id == "honor") {
                    tab_container[j].style.display = "block";
                }
            }
        }
    })
}
