$(document).ready(function () {

    /*$("#portfolio_grid").mixItUp({
        animation: {
            effects: 'fade rotateZ(-180deg)',
            duration: 700
        }
    });*/



    $(".s_portfolio li").click(function () {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({type: "image"});
    $(".popup_content").magnificPopup({type: "inline", midClick: true});
    /*$(".popup_content").magnificPopup({type: "image"});*/

    $(".top_text h1").animated("fadeInDown", "fadeInDown");

    $(".top_text p, .section_header .no_animate").animated("fadeInUp", "fadeOutDown");

    $(".animation_1").animated("flipInY", "flipInY");
    $(".animation_2").animated("fadeInLeft", "fadeInLeft");
    $(".animation_3").animated("fadeInRight", "fadeInRight");

    // $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
    // $(".right .resume_item").animated("fadeInRight", "fadeOutDown");

    function heightDetect() {
        $(".main_head").css("min-height", $(window).height());
        $(".top_wrapper").css("height", $(window).height());//////centered
    };
    heightDetect();
    $(window).resize(function () {//resize
        heightDetect();
    });

    $(".toggle_mnu").click(function () {//change
        $(".sandwich").toggleClass("active");
    });

    $(".top_mnu ul a").click(function () {//close menu onclick
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").removeClass("h_opacify");
    }).append("<span>");

    $(".toggle_mnu").click(function () {//main menu
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").removeClass("h_opacify");
            $(".top_mnu").fadeOut(500);
            $(".top_mnu li a").removeClass("fadeInUp animated")
        } else {
            $(".top_text").addClass("h_opacify");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated")
        }
        ;
    });

    /*$(".portfolio_item").each(function (i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });*/

    $("input, select, textarea").jqBootstrapValidation();

    $(".top_mnu li a").mPageScroll2id({ scrollSpeed: 700 });



});
$(window).load(function () {
    $(".loaderInner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");//preloader
});