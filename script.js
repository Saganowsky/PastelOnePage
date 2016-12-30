      
    $("#tablet").click(function() {
        if($(this).hasClass("clicked")){
            $(this).removeClass("clicked");
            $('#tablet2').fadeOut();
              $('#tablet').animate({left: '30%'});
        }else{
            $(this).addClass("clicked");
        
    $('#tablet2').fadeIn();
        
            $("#tablet").animate({left: "0px"});
        }
        
    });
        
        
        $('.mobile2').click(function() {
        if($(this).hasClass("clicked")){
            $(this).removeClass("clicked");
            $('.mobile').fadeOut();
              $('.mobile2').animate({right: '20%'});
        }else{
            
            $('.mobile2').addClass("clicked");
        
    $('.mobile').fadeIn();
        
            $('.mobile2').animate({right: "0px"});
        }
        
    });
        
            $('.desktop').click(function() {
        if($(this).hasClass("click")){
            $(this).removeClass("click");
            $('.desktop2').fadeOut();
            $('.desktop').animate({left: '30%'});
        }else{
            
    $(this).addClass("click");
    $('.desktop2').fadeIn();
    $('.desktop').animate({left: "0px"});
        }
        
    });
            
          
            
            
            
            
            

    
                       $('.button').click(function()
                                {
                           $(".lightbox").show(300);
                                          
                            $(".submit-button").click(function()
                                                       {
                                            $(".lightbox").hide(300);
                           
                           
                                                    });
            });            
            
            
            $('input').click(function(e){
                
                e.preventDefault();
                
                $('.lightbox').hide();{
                    
                    
                    
                };
                    
                    
                    
                
            });
            
            
            
            $('header').Stickyfill();
      


  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -105
        }, 1000);
        return false;
      }
    }
  });
});

            
            