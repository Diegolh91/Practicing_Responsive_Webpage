$(document).ready(function(){

   // Stuff to do as soon as the DOM is ready
  $('#header-nav ul li a').click(function(){
    var page = $(this).attr("href");
      if ( page == "home"){
        $('html,body').animate({
          scrollTop: $('#homediv').offset().top
        },500);
        console.log($(window).height());
      }else if ( page == "about"){
        $('html,body').animate({
          scrollTop: $('#aboutdiv').offset().top
        },500);
      }else if ( page == "youtube"){
        $('html,body').animate({
          scrollTop: $('#youtubediv').offset().top
        },500);
      }else if ( page == "social"){
        $('html,body').animate({
          scrollTop: $('#socialdiv').offset().top
        },500);
      }else if ( page == "contact"){
        $('html,body').animate({
          scrollTop: $(document).height()
        },500);
      }

    return false;
  });

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();



    if(wScroll > $("#aboutdiv").offset().top){
      $(".welcomedivh1").css({
        "-webkit-transform":"translate(0px+ 0px)"
      })
      $(".welcomedivh2").css({
        "-webkit-transform":"translate(0px+ 0px)"
      })
      $(".welcomedivh3").css({
        "-webkit-transform":"translate(0px+ 0px)"
      })
      $(".homedivh1").css({
        "-webkit-transform":"translate(0px+ 0px)"
      })
    }else {
      $(".welcomedivh1").css({
        "-webkit-transform":"translate("+ wScroll/23 +"%,"+ wScroll/0.7 +"%)"
      })
      $(".welcomedivh2").css({
        "-webkit-transform":"translate(-"+ wScroll/23 +"%,"+ wScroll/0.6 +"%)"
      })
      $(".welcomedivh3").css({
        "-webkit-transform":"translate(0px,"+ wScroll/0.5 +"%)"
      })
      $(".homedivh1").css({
        "-webkit-transform":"translate(-"+ wScroll/23 +"%,"+ wScroll/0.4 +"%)"
      })
    }
  })
});
