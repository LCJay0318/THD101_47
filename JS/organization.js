

let index = 2 ; // 紀錄位置
let character_list = document.getElementsByClassName("intro-list")[0];// 儲存list
let wrapper_el = document.getElementsByClassName("wrapper"); // 儲存外包裝list
let wrapper_el_width = 0 ; // 單個wrapper寬度
if ( window.innerWidth/2 >= 930 ) {
    wrapper_el_width = window.innerWidth/2;
    document.getElementsByClassName("arrow")[0].style.width = wrapper_el_width + 10 + "px" ;
} else if ( window.innerWidth/2 >= 500) {
    wrapper_el_width = 930;
    document.getElementsByClassName("arrow")[0].style.width = wrapper_el_width + 10 + "px" ;
} else {
    wrapper_el_width = 414;
    document.getElementsByClassName("arrow")[0].style.width = "100%" ;
    document.getElementsByClassName("arrow")[0].style.transform = "translateX(-50%)" ;
}

for( let i = 0 ; i < wrapper_el.length ; i ++ ) { // 調整外包裝寬度
    wrapper_el[i].setAttribute("style", "width :" +  wrapper_el_width + "px;")
}

let list_width = character_list.scrollWidth; // list總長
//console.log(character_list.scrollWidth);
let character_el = document.getElementsByClassName("intro");

//初始將人物2移動到中間
moveList( index ); //index=2

let selection_list = document.getElementsByClassName("selection")[0].querySelectorAll("span");
//console.log(selection_list);
selection_list[1].classList.add("choose");

// ======================================================
// 檢查哪一個dot被點擊
for( let i = 0 ; i < selection_list.length ; i++ ){
    //當dot被點擊後改變dot狀態，並移動物件
    selection_list[i].addEventListener("click", function(){
        index = i + 1 ;
        //先將dot class清掉
        changeDot( index );
        //移動list
        moveList( index );
    })
}

let prev_el = document.getElementById("prev"); // 項右箭頭
prev_el.addEventListener("click", function(){

    index -= 1;

    //先將dot class清掉
    changeDot( index );
    //移動list
    moveList( index );

    if( index == 0 ){
        index = 3;
    }
})
let next_el = document.getElementById("next"); // 項右箭頭
next_el.addEventListener("click", function(){
    index += 1;
    //先將dot class清掉
    changeDot( index );
    //移動list
    moveList( index );

    if( index == 4 ){
        index = 1;
    }
})

//改變dot狀態，將被選擇的dot class加上choose
function changeDot( index ){
    //先將dot class清掉

    for( let i = 0 ; i < selection_list.length ; i++){
        selection_list[i].classList.remove("choose");
    }
    //改變被選dot的狀態
    if ( index > 0 && index < 4) {
        selection_list[index-1].classList.add("choose");
    } else if ( index == 0 ) {
        selection_list[2].classList.add("choose");
    } else if ( index == 4 ) {
        selection_list[0].classList.add("choose");
    }

}

//移動list位置
function moveList( index ){

    if( index == 1 ) {
        character_list.style.transition = "all, linear, .3s";
        character_list.style.marginLeft = ( -wrapper_el_width*2.5+window.innerWidth/2 )+"px";
    } else if ( index == 2 ) {
        character_list.style.transition = "all, linear, .3s";
        character_list.style.marginLeft = ( -wrapper_el_width*3.5+window.innerWidth/2 )+"px";
    } else if ( index == 3 ) {
        character_list.style.transition = "all, linear, .3s";
        character_list.style.marginLeft = (-wrapper_el_width*4.5+window.innerWidth/2)+"px";
    } else if ( index >= 4 ) {
        character_list.style.transition = "all, linear, .3s";
        character_list.style.marginLeft = (-wrapper_el_width*5.5+window.innerWidth/2)+"px";

        setTimeout(function() { //延時切換
            character_list.style.transition = '';
            character_list.style.marginLeft = (-wrapper_el_width*2.5+window.innerWidth/2)+"px";
        }, 300)
        index = 1; // 重製index位置
    } else if ( index == 0 ) {
        character_list.style.transition = "all, linear, .3s";
        character_list.style.marginLeft = (-wrapper_el_width*1.5+window.innerWidth/2)+"px";

        setTimeout(function() { //延時切換
            character_list.style.transition = '';
            character_list.style.marginLeft = (-wrapper_el_width*4.5+window.innerWidth/2)+"px";
        }, 300)
        index = 3; // 重製index位置
    }
}