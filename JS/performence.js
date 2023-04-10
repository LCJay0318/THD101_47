
// 頁籤選單
//下拉式選單
let  select_type = document.getElementById("type") ;
let  select_time = document.getElementById("time") ;
let  select_price = document.getElementById("price") ;
let project_items = document.getElementsByClassName("project")[0].querySelectorAll("a");


let item = { index: 0, typeTrue: true } ;
let all_item = [];

for( let i = 0 ; i < project_items.length ; i++){
    let item = { index: 0, typeTrue: true } ;
    item.index = i ;
    all_item.push(item);
        
}

select_type.addEventListener("change", function(){
    select_type = document.getElementById("type") ;
    select_time = document.getElementById("time") ;
    select_price = document.getElementById("price") ;
    console.log(select_type.value);
    console.log(select_time.value);
    console.log(select_price.value);

    //先將全部display none
    for( let i = 0 ; i < project_items.length ; i++){
        // project_items[i].setAttribute("style","display: none;");
        if ( project_items[i].classList.contains("open")){
            project_items[i].classList.remove("open");
        }
    }



    //檢查是否符合type value
    for( let i = 0 ; i < project_items.length ; i++){

        // 建築型式選擇為全部建案
        if ( select_type.value == "allType"){
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if ( all_item[i].typeTrue ) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "bussiness" && project_items[i].classList.contains("buss") ) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;
            console.log("buss")
            if (all_item[i].typeTrue) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "house" && project_items[i].classList.contains("house")) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if (all_item[i].typeTrue) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "public" && project_items[i].classList.contains("public")) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if (all_item[i].typeTrue) {
                //符合搜尋範圍，並display block
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else {
            all_item[i].typeTrue = false ;
        }

    }

    //重新整理all_item陣列
    for( let i = 0 ; i < all_item.length ; i++){
        all_item[i].typeTrue = true ;
    }

})

select_time.addEventListener("change", function(){
    select_type = document.getElementById("type") ;
    select_time = document.getElementById("time") ;
    select_price = document.getElementById("price") ;
    console.log(select_type.value);
    console.log(select_time.value);
    console.log(select_price.value);

    //先將全部display none
    for( let i = 0 ; i < project_items.length ; i++){
        // project_items[i].setAttribute("style","display: none;");
        if ( project_items[i].classList.contains("open")){
            project_items[i].classList.remove("open");
        }
    }



    //檢查是否符合type value
    for( let i = 0 ; i < project_items.length ; i++){

        // 建築型式選擇為全部建案
        if ( select_type.value == "allType"){
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if ( all_item[i].typeTrue ) {
                project_items[i].classList.add("open");

                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "bussiness" && project_items[i].classList.contains("buss") ) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;
            console.log("buss")
            if (all_item[i].typeTrue) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "house" && project_items[i].classList.contains("house")) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if (all_item[i].typeTrue) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "public" && project_items[i].classList.contains("public")) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if (all_item[i].typeTrue) {
                //符合搜尋範圍，並display block
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else {
            all_item[i].typeTrue = false ;
        }
    }

    //重新整理all_item陣列
    for( let i = 0 ; i < all_item.length ; i++){
        all_item[i].typeTrue = true ;
    }

})

select_price.addEventListener("change", function(){
    select_type = document.getElementById("type") ;
    select_time = document.getElementById("time") ;
    select_price = document.getElementById("price") ;
    console.log(select_type.value);
    console.log(select_time.value);
    console.log(select_price.value);

    //先將全部display none
    for( let i = 0 ; i < project_items.length ; i++){
        // project_items[i].setAttribute("style","display: none;");
        if ( project_items[i].classList.contains("open")){
            project_items[i].classList.remove("open");
        }
    }



    //檢查是否符合type value
    for( let i = 0 ; i < project_items.length ; i++){

        // 建築型式選擇為全部建案
        if ( select_type.value == "allType"){
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if ( all_item[i].typeTrue ) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "bussiness" && project_items[i].classList.contains("buss") ) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;
            console.log("buss")
            if (all_item[i].typeTrue) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "house" && project_items[i].classList.contains("house")) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if (all_item[i].typeTrue) {
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else if ( select_type.value == "public" && project_items[i].classList.contains("public")) {
            //檢查是否符合time value
            checkTimeType(select_time.value, project_items[i], all_item[i] ) ;

            if (all_item[i].typeTrue) {
                //符合搜尋範圍，並display block
                project_items[i].classList.add("open");
                // project_items[i].setAttribute("style","display: block;");
            }
        } else {
            all_item[i].typeTrue = false ;
        }
    }

    //重新整理all_item陣列
    for( let i = 0 ; i < all_item.length ; i++){
        all_item[i].typeTrue = true ;
    }

})

// 檢查物件時間點是否符合搜尋範圍
function checkTimeType( value, pitems, item ){
    //檢查時間點是否正確
    if ( value == "allTime") {
        //確認價格是否正確
        checkPriceType( select_price.value, pitems, item ) ;
        return ;
    } else if ( value == "2022" && pitems.classList.contains("2022")) {
        //確認價格是否正確
        checkPriceType( select_price.value, pitems, item ) ;
        return ;
    } else if ( value == "2021" && pitems.classList.contains("2021")) {
        //確認價格是否正確
        checkPriceType( select_price.value, pitems, item ) ;
        return ;
    } else if ( value == "2020" && pitems.classList.contains("2020")) {
        //確認價格是否正確
        checkPriceType( select_price.value, pitems, item ) ;
        return ;
    } else if ( value == "2019" && pitems.classList.contains("2019")) {
        //確認價格是否正確
        checkPriceType( select_price.value, pitems, item ) ;
        return ;
    } else {
        item.typeTrue = false ;
        return ;
    }

}

// 檢查物件價格是否符合搜尋範圍
function checkPriceType( value, pitems, item ){
    //檢查價格是否正確
    if ( value == "allPrice") {
        return ;
    } else if ( value == "21-30" && pitems.classList.contains("21-30")) {
        return ;
    } else if ( value == "11-20" && pitems.classList.contains("11-20")) {
        return ;
    } else if ( value == "6-10" && pitems.classList.contains("6-10")) {
        return ;
    } else if ( value == "1-5" && pitems.classList.contains("1-5")) {
        return ;
    } else {
        item.typeTrue = false ;
        return ;
    }

}