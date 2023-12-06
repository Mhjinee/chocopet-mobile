$(function(){
    $('#frm').submit(function(){
      function createTxt(target,msg){
        var txt= new Array();
        target ='#'+target;
        txt[0] = "아이디를 입력해 주세요.";
        txt[1] = "비밀번호를 입력해 주세요.";
        if(!$(target).next().hasClass('on')){
        $(target).after('<p>'+txt[msg]+'</p>').next().addClass('on');
        }
      }
      var reg_email =/^([0-9a-zA-Z-_]+)@([0-9a-zA-Z-_]+)(\.[0-9a-zA-Z-_]+){1,2}$/;
      
      if(!$('#id').val()){ //if(id.value=="") 동일표현
       createTxt('id',0);
       return false;
      }
      if(!$('#pw').val()){
       createTxt('pw',1);
       return false;
      }
    });
    $('#join input').focus(function(){
      $(this).next().remove();
    });
    $('#login input').focus(function(){
      $(this).next().remove();
    });
});