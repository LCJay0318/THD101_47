
// ==================================== timeline ======================================
// 移動timeline
// 向右移動
let timeline_right = document.getElementsByClassName("next")[0] ;
timeline_right.addEventListener("click", function(e){
    e.preventDefault() ; // 取消a標籤預設行為(跳轉到網頁頂部)

    let timeline_progress = document.getElementsByClassName("progress")[0]; ;

    if ( timeline_progress.offsetLeft >= -1200 ) {
        let left_move_distance = timeline_progress.offsetLeft;
        left_move_distance -= 400 ;
        // timeline_progress.setAttribute("style","left :" + left_distance + "px ;" ) ;

        let move = timeline_progress.offsetLeft ;
        let interval_id = setInterval( function(){
            
            if ( move === -1200 || move <= left_move_distance) {
                // 結束
                clearInterval(interval_id);
                return;
            } else {
                //繼續
                move -= 4 ;
                timeline_progress.setAttribute("style","left :" + move + "px ;" ) ;
            }
        }, 1)
        //console.log(timeline_progress.offsetLeft);
    }

})

// 向左移動
let timeline_left = document.getElementsByClassName("fa-angle-left")[0] ;
timeline_left.addEventListener("click", function(e){
    e.preventDefault() ; // 取消a標籤預設行為(跳轉到網頁頂部)

    let timeline_progress = document.getElementsByClassName("progress")[0]; ;

    if ( timeline_progress.offsetLeft <= 0 ) {
        let left_move_distance = timeline_progress.offsetLeft;
        left_move_distance += 400 ;
        // timeline_progress.setAttribute("style","left :" + left_distance + "px ;" ) ;
        
        let move = timeline_progress.offsetLeft ;
        let interval_id = setInterval( function(){
            
            if (  move === 0 || move >= left_move_distance) {
                // 結束
                clearInterval(interval_id);
                return;
            } else {
                //繼續
                move += 4 ;
                timeline_progress.setAttribute("style","left :" + move + "px ;" ) ;
            }

        }, 1)

        //console.log(timeline_progress.offsetLeft);
    }

})

//點選progress>li.year開啟timeline>progress-pic-list>year1
let progress_el = document.getElementsByClassName("progress")[0];

//到每個li裡面檢查
for( let i = 0 ; i < progress_el.querySelectorAll("li").length ; i++){

    let list_year_name = progress_el.querySelectorAll("li")[i].className ;
    let list_year_li_el = progress_el.querySelectorAll("li")[i];

    progress_el.querySelectorAll("li")[i].classList.add("border_color_white");
    //當每個li被click時
    list_year_li_el.addEventListener("click", function(){
        //console.log(list_year_name);
        
        //找相對應的progress_pic_list內的li
        let progress_pic_list_el = document.getElementsByClassName("progress-pic-list")[0].querySelectorAll("li");

        //查找每個progress_pic_list內的class名稱
        for ( let j = 0 ; j < progress_pic_list_el.length ; j++ ) {

            //找到對應的年份，打開照片及說明
            if( progress_pic_list_el[j].classList.contains(list_year_name)){

                //打開對應年份的照片及說明
                // progress_pic_list_el[j].setAttribute("style","display : block ;");
                progress_pic_list_el[j].setAttribute("style","opacity : 0 ;");
                progress_pic_list_el[j].classList.add("on");
                opacity100(progress_pic_list_el[j]);

                //改變各timeline結點顏色
                for ( let k = 0 ; k < progress_el.querySelectorAll("li").length ; k++ ) {

                    if ( progress_el.querySelectorAll("li")[k].classList.contains(list_year_name)) {
                        progress_el.querySelectorAll("li")[k].classList.remove("border_color_white");
                        progress_el.querySelectorAll("li")[k].classList.add("border_color_blue");
                    } else {
                        progress_el.querySelectorAll("li")[k].classList.add("border_color_white");
                        progress_el.querySelectorAll("li")[k].classList.remove("border_color_blue");
                    }
                }

                //改變timeline顏色
                let progress_for_click = document.getElementById("progress_for_click");

                if ( list_year_name === "year1" ) {
                    progress_for_click.setAttribute("style", "width : 100px ;");
                } else if ( list_year_name === "year2" ){
                    progress_for_click.setAttribute("style", "width : 550px ;");
                } else if ( list_year_name === "year3" ){
                    progress_for_click.setAttribute("style", "width : 1000px ;");
                } else if ( list_year_name === "year4" ){
                    progress_for_click.setAttribute("style", "width : 1450px ;");
                } else if ( list_year_name === "year5" ){
                    progress_for_click.setAttribute("style", "width : 1900px ;");
                }
            } else if (!progress_pic_list_el[j].classList.contains(list_year_name)) {
                //關閉對應年份的照片及說明
                // progress_pic_list_el[j].setAttribute("style","display : none ;");
                progress_pic_list_el[j].setAttribute("style","opacity : 0 ;");
                progress_pic_list_el[j].classList.remove("on");
            } ;
        }
    })
};

// 透明度0->1
function opacity100( pic_list_el ) {

    let el_opacity = 0;
    let a = setInterval(() => {
        if(pic_list_el.style.opacity == 1 ){
            clearInterval(a);
            return;
        } else {
            el_opacity += 0.1;
            pic_list_el.style.opacity = el_opacity;
        }

    }, 50);
}

// ==================================== timeline_RWD ======================================

let time_list = document.getElementsByClassName("time_list")[0]; // 左邊時間線list
let pic_list = document.getElementsByClassName("pic_list")[0]; // 右邊照片list

//監聽滾動視窗位置
window.addEventListener("scroll", function(){

    if( pic_list.querySelector("li.year1").getBoundingClientRect().bottom >= 400 && pic_list.querySelector("li.year1").getBoundingClientRect().bottom <= 750){
        for ( let i = 0 ; i < time_list_el.length ; i++ ) {
            time_list_el[i].classList.remove("active");
        }
        for ( let i = 0 ; i < pic_list.querySelectorAll("li").length ; i++ ) {
            pic_list.querySelectorAll("li")[i].classList.remove("active");
        }

        pic_list.querySelector("li.year1").classList.add("active");
        time_list.querySelector("li.time1").classList.add("active");

    } else if( pic_list.querySelector("li.year2").getBoundingClientRect().bottom >= 400 && pic_list.querySelector("li.year2").getBoundingClientRect().bottom <= 900) {

        for ( let i = 0 ; i < time_list_el.length ; i++ ) {
            time_list_el[i].classList.remove("active");
        }
        for ( let i = 0 ; i < pic_list.querySelectorAll("li").length ; i++ ) {
            pic_list.querySelectorAll("li")[i].classList.remove("active");
        }

        pic_list.querySelector("li.year2").classList.add("active");
        time_list.querySelector("li.time2").classList.add("active");

    } else if( pic_list.querySelector("li.year3").getBoundingClientRect().bottom >= 400 && pic_list.querySelector("li.year3").getBoundingClientRect().bottom <= 900) {

        for ( let i = 0 ; i < time_list_el.length ; i++ ) {
            time_list_el[i].classList.remove("active");
        }
        for ( let i = 0 ; i < pic_list.querySelectorAll("li").length ; i++ ) {
            pic_list.querySelectorAll("li")[i].classList.remove("active");
        }

        pic_list.querySelector("li.year3").classList.add("active");
        time_list.querySelector("li.time3").classList.add("active");

    } else if( pic_list.querySelector("li.year4").getBoundingClientRect().bottom >= 400 && pic_list.querySelector("li.year4").getBoundingClientRect().bottom <= 900) {

        for ( let i = 0 ; i < time_list_el.length ; i++ ) {
            time_list_el[i].classList.remove("active");
        }
        for ( let i = 0 ; i < pic_list.querySelectorAll("li").length ; i++ ) {
            pic_list.querySelectorAll("li")[i].classList.remove("active");
        }

        pic_list.querySelector("li.year4").classList.add("active");
        time_list.querySelector("li.time4").classList.add("active");

    } else if( pic_list.querySelector("li.year5").getBoundingClientRect().bottom <= 900) {

        for ( let i = 0 ; i < time_list_el.length ; i++ ) {
            time_list_el[i].classList.remove("active");
        }
        for ( let i = 0 ; i < pic_list.querySelectorAll("li").length ; i++ ) {
            pic_list.querySelectorAll("li")[i].classList.remove("active");
        }

        pic_list.querySelector("li.year5").classList.add("active");
        time_list.querySelector("li.time5").classList.add("active");
    }
        
});

let time_list_el = time_list.querySelectorAll("li"); // 左側時間點list陣列
//監聽左側時間點點擊事件
for( let i = 0 ; i < time_list_el.length ; i++ ){

    time_list_el[i].addEventListener("click", function(){

        for( let j = 0 ; j < pic_list.querySelectorAll("li").length ; j++ ){

            if ( j == i ) { //將視窗上緣滾動到對應的時間線
                document.documentElement.scrollTo({
                    top:  pic_list.querySelectorAll("li")[j].offsetTop - 150,
                    behavior: "smooth" 
                }) ;
            }
        }
    })
}