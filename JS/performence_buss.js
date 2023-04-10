
let window_width = window.innerWidth ;
window.addEventListener("resize", function(){
    window_width = window.innerWidth ;
})

if (window_width >= "500") {
    let pic = document.getElementById("pic");
    let text = document.getElementById("text");
    
    pic.addEventListener("click", function(e){
        this.classList.remove("moving-left");
        text.classList.remove("moving-right");
    
        this.setAttribute("style","z-index: 2 ;");
        this.classList.add("moving-left");
        text.setAttribute("style","z-index: 1 ;");
    })
    
    text.addEventListener("click", function(e){
        this.classList.remove("moving-right");
        pic.classList.remove("moving-left");
    
        this.setAttribute("style","z-index: 2 ;");
        this.classList.add("moving-right");
        pic.setAttribute("style","z-index: 1 ;");
    })
}
