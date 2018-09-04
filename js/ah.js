var maxTop = $(".aboutme").offset().top;
$(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop() >= maxTop){
        $(".mv-nav").fadeIn(500);
        
    }
    else {
        $(".mv-nav").fadeOut(100);
    }
})

  // Dynamic active nav list element with scrolling
    var curr_pos = $(window).scrollTop()
        , about_pos = $(".aboutme").position().top - 200
        , port_pos = $(".protfolio").position().top - 50
        , cont_pos = $(".contact").position().top - 200;

    console.log(about_pos);
    if (curr_pos < about_pos) {
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(1)").addClass("active");
    }
    else if (curr_pos >= about_pos && curr_pos < port_pos) {
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(2)").addClass("active");
    }
    else if (curr_pos >= port_pos && curr_pos < cont_pos) {
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(3)").addClass("active");
    }
    else if (curr_pos >= cont_pos){
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(4)").addClass("active");
    }
    $(window).on("scroll", function () {
    var curr_pos = $(window).scrollTop()
        , about_pos = $(".aboutme").position().top - 200
        , port_pos = $(".protfolio").position().top - 50
        , cont_pos = $(".contact").position().top - 200;
    if (curr_pos < about_pos) {
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(1)").addClass("active");
    }
    else if (curr_pos >= about_pos && curr_pos < port_pos) {
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(2)").addClass("active");
    }
    else if (curr_pos >= port_pos && curr_pos < cont_pos) {
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(3)").addClass("active");
    }
    else if (curr_pos >= cont_pos){
        $(".nav ul li").removeClass("active");
        $(".nav ul li:nth-child(4)").addClass("active");
    }
    });
