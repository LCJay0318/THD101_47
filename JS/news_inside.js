let big_img_list = document.getElementsByClassName("img_el");
let select_img = document.getElementsByClassName("select_img")[0].querySelectorAll("div");

for( let i = 0 ; i < big_img_list.length ; i++ ){
    big_img_list[i].addEventListener("click", function(e){
      
        for ( let j = 0 ; j < select_img.length ; j++ ) {
            if ( big_img_list[i].classList.contains(select_img[j].className) ) {
                select_img[j].style.display = "block" ;
            } else {
                select_img[j].style.display = "none" ;
            }
        }
    })
}

let select_img_block = document.getElementsByClassName("select_img")[0];
let cover;

select_img_block.addEventListener("mouseenter", function(){
    for ( let i = 0 ; i < select_img.length ; i++) {
        if ( select_img[i].style.display == "block") {
            cover = select_img[i].querySelector(".cover") ;
            cover.style.display = "block" ;
        }
    }
})

select_img_block.addEventListener("mouseleave", function(){
    for ( let i = 0 ; i < select_img.length ; i++) {
        if ( select_img[i].style.display == "block") {
            cover = select_img[i].querySelector(".cover") ;
            cover.style.display = "none" ;
        }
    }
})

select_img_block.addEventListener("mousemove", function(e){

    for ( let i = 0 ; i < select_img.length ; i++) {
        if ( select_img[i].style.display == "block") {
            cover = select_img[i].querySelector(".cover") ;
        }
    }
    let rect = select_img_block.getBoundingClientRect();
    cover.style.clipPath = "circle(20% at "+ ((e.clientX- select_img_block.offsetLeft)/rect.width*100) +"% "+((e.clientY + window.pageYOffset - select_img_block.offsetTop)/rect.height*100)+"%)" ;

});
