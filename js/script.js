$(function(){
      $(".btn").click(function(){
            $(".search_wrap").stop().slideToggle("fast");
      });
      $(".menu").click(function(){                
            $("#gnb").stop().animate({left:0},200,"swing");                  
      });
      $("#gnb ul .home").click(function(){                
            $("#gnb").stop().animate({left:-9999},200,"swing");
      });
      $('#gnb .main').click(function(){
            $(this).next().slideToggle();
            $(this).next().siblings('.sub').slideUp(); //메인메뉴를 펼친 후 접지 않고 다음 메인메뉴를 펼쳤을 때 원래 펼쳐져있던 메인메뉴는 접힘
      });
});