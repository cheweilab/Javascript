// app.js

var main = function () {
    "use strict";


    

    $(".tabs a:nth-child(1)").on("click", function () {
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(1) span").addClass("active");
        if( $("main .content1").hide()){
        $("main .content2").hide();
        $("main .content3").hide();
        $("main .content1").show();
    };
     
        return false;
    });

    $(".tabs a:nth-child(2)").on("click", function () {
        console.log("2nd Clicked");
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(2) span").addClass("active");
        if( $("main .content2").hide()){
            $("main .content2").show();
            $("main .content3").hide();
            $("main .content1").hide();
        };
        
        return false;
    });

    $(".tabs a:nth-child(3)").on("click", function () {
        console.log("3rd clicked");
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(3) span").addClass("active");
        if( $("main .content3").hide()){
            $("main .content2").hide();
            $("main .content3").show();
            $("main .content1").hide();
        };
        
        return false;
    });
};

$(document).ready(main);
