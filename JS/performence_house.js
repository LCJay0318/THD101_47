
let window_width = window.innerWidth ;

window.addEventListener("resize", function(){
    window_width = window.innerWidth ;
})

if (window_width >= "500") {
    let pic = document.getElementById("pic");
    let text = document.getElementById("text");
    
    pic.addEventListener("click", function(e){
        this.classList.remove("moving-right");
        text.classList.remove("moving-left");
    
        this.setAttribute("style","z-index: 2 ;");
        this.classList.add("moving-right");
        text.setAttribute("style","z-index: 1 ;");
    })
    
    text.addEventListener("click", function(e){
        this.classList.remove("moving-left");
        pic.classList.remove("moving-right");
    
        this.setAttribute("style","z-index: 2 ;");
        this.classList.add("moving-left");
        pic.setAttribute("style","z-index: 1 ;");
    })
}
