$(document).ready(function(){
  
    $()

    $(".buddy").on("swiperight",function(){
      if ( $(this).is(':last-child') ) {
      alert("last Child Reached")
      } else{
        $(this).addClass('rotate-left').delay(300).fadeOut(1);
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(300);
      }
      
    });  

   $(".buddy").on("swipeleft",function(){
      if ( $(this).is(':last-child') ) {
      alert("last Child Reached")
      } else{
        $(this).addClass('rotate-right').delay(300).fadeOut(1);
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(300);
      }
  });

});

