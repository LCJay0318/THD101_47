window.addEventListener("load", function(){
    document.getElementById("loading").setAttribute("style","opacity : 0; transition: opacity .8s")
    setTimeout(() => {
        document.getElementById("loading").remove();
    }, 800);
})