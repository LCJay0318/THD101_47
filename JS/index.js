let slide_wrapper = document.getElementsByClassName("wrapper")[0]; // slider外包裝
let slide_list = document.getElementsByClassName("slide_list")[0]; // 物件父層
let slide_el = document.getElementsByClassName("slide"); //各物件陣列

//一視窗寬度設定物件寬度
if (window.innerWidth >= 1200 ){
    slide_wrapper.style.width = "1200px" ;
    for( let i = 0 ; i < slide_el.length ; i++){
        slide_el[i].style.width = "1200px";
    }
    slide_list.style.width = slide_el.length*window.innerWidth+"px";
    console.log(slide_wrapper.style.width);
} else if(window.innerWidth <= 500) {
    slide_wrapper.style.width = window.innerWidth-40 + "px";
    for( let i = 0 ; i < slide_el.length ; i++){
        slide_el[i].style.width = (window.innerWidth-40) + "px";
    }
    slide_list.style.width = slide_el.length*window.innerWidth + "px";
    console.log(slide_wrapper.style.width);
} else {
    slide_wrapper.style.width = window.innerWidth + "px";
    for( let i = 0 ; i < slide_el.length ; i++){
        slide_el[i].style.width = (window.innerWidth) + "px";
    }
    slide_list.style.width = slide_el.length*window.innerWidth + "px";
    console.log(slide_wrapper.style.width);
}

let index = 2 ;
let project_next = document.getElementsByClassName("project_slider_next")[0];
let project_prev = document.getElementsByClassName("project_slider_prev")[0];
let dot_list = document.getElementsByClassName("project_slider_dot")[0];
slide_list.style.marginLeft = "calc(" + (-100*(index-1)) + "% - "+ (10*(index-1)) +"px)" ;
console.log(slide_list.style.marginLeft);

project_next.addEventListener("click", function(e){

    e.stopPropagation();
    index += 1 ;
    movelist(index);

    console.log(index);
    if ( index == slide_el.length ){
        index = 2;
        setTimeout( function(){
            slide_list.style.transition = "" ;
            slide_list.style.marginLeft = "calc(" + (-100*(index-1)) + "% - "+ (10*(index-1)) +"px)" ;
        },300)
    }

    for( let j = 0 ; j < dot_list.querySelectorAll("span").length ; j++ ){
        dot_list.querySelectorAll("span")[j].classList.remove("on");
        if (dot_list.querySelectorAll("span")[j].getAttribute("data-index") == index){
            dot_list.querySelectorAll("span")[j].classList.add("on")
        }
    }

})

project_prev.addEventListener("click", function(e){

    e.stopPropagation();
    index -= 1 ;
    movelist(index);
    console.log(index);
    if ( index == 1 ){
        index = 4;
        setTimeout( function(){
            slide_list.style.transition = "" ;
            slide_list.style.marginLeft = "calc(" + (-100*(index-1)) + "% - "+ (10*(index-1)) +"px)" ;
        },300)
    }

    for( let j = 0 ; j < dot_list.querySelectorAll("span").length ; j++ ){
        dot_list.querySelectorAll("span")[j].classList.remove("on");
        if (dot_list.querySelectorAll("span")[j].getAttribute("data-index") == index){
            dot_list.querySelectorAll("span")[j].classList.add("on")
        }
    }
})

for( let i = 0 ; i < dot_list.querySelectorAll("span").length ; i++ ){
    dot_list.querySelectorAll("span")[i].addEventListener("click", function(e){
        e.stopPropagation(e);
        for( let j = 0 ; j < dot_list.querySelectorAll("span").length ; j++ ){
            dot_list.querySelectorAll("span")[j].classList.remove("on");
        }

        e.target.classList.add("on");
        index = +e.target.getAttribute("data-index");
        movelist( index );

    })
}



function movelist( i ) {
    let num_index = i-1 ;
    slide_list.style.transition = ".3s ease-in-out" ;
    slide_list.style.marginLeft = "calc(" + (-100*num_index) + "% - "+ (10*num_index) +"px)" ;
}

// let project_wrapper = document.getElementsByClassName('wrapper')[0];
// let isDown = false;
// let startX;
// let endX;
// let scrollLeft;

// project_wrapper.addEventListener('mousedown', function(e) {
//     isDown = true;
//     startX = e.pageX;
//     scrollLeft = project_wrapper.scrollLeft;
// });

// project_wrapper.addEventListener('mouseleave', function() {
//     isDown = false;
// });

// project_wrapper.addEventListener('mouseup', function(e) {
//     e.stopPropagation(e);
//     if (isDown) {
//         e.preventDefault();
//         if( endX > 0 ){
//             index -= 1;
//             movelist(index) ;
//             if ( index == 1 ){
//                 index = 4;
//                 setTimeout( function(){
//                     slide_list.style.transition = "" ;
//                     slide_list.style.marginLeft = "calc(" + (-100*(index-1)) + "% - "+ (10*(index-1)) +"px)" ;
//                 },300)
//             }

//             for( let j = 0 ; j < dot_list.querySelectorAll("span").length ; j++ ){
//                 dot_list.querySelectorAll("span")[j].classList.remove("on");
//                 if (dot_list.querySelectorAll("span")[j].getAttribute("data-index") == index){
//                     dot_list.querySelectorAll("span")[j].classList.add("on")
//                 }
//             }

//         } else if( endX < 0){
//             index += 1;
//             movelist(index) ;
//             if ( index == slide_el.length ){
//                 index = 2;
//                 setTimeout( function(){
//                     slide_list.style.transition = "" ;
//                     slide_list.style.marginLeft = "calc(" + (-100*(index-1)) + "% - "+ (10*(index-1)) +"px)" ;
//                 },300)
//             }

//             for( let j = 0 ; j < dot_list.querySelectorAll("span").length ; j++ ){
//                 dot_list.querySelectorAll("span")[j].classList.remove("on");
//                 if (dot_list.querySelectorAll("span")[j].getAttribute("data-index") == index){
//                     dot_list.querySelectorAll("span")[j].classList.add("on")
//                 }
//             }
//         }
//     }

//     isDown = false;
// });

// project_wrapper.addEventListener('mousemove', function(e) {

//     if (!isDown) return;
//     e.preventDefault();
//     endX = e.pageX - startX;
//     project_wrapper.scrollLeft = endX + scrollLeft;
//     console.log(scrollLeft);
//     console.log(project_wrapper.scrollLeft);
// });