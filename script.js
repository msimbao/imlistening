
/**
 *
 *  @Title script.js
 *
 *  @Brief JavaScript For holding functions that handle the client
 *
 *  @Author Mphatso 
 *
 */


/**
  * //////////////////////////////////////

    VUE
                    
  * //////////////////////////////////////
  */

var app = new Vue({
  el: "#app",
  data: {
    images: [],  // Array To Hold Images
    questions: [] // Array To Hold Questions
  }
})

/**
  * //////////////////////////////////////
 __      __         
   CARD SWIPE
   
   Original Code by @developingidea
                    
  * //////////////////////////////////////
  */

/**
  * //////////////////////////////////////

    FIREBASE
                    
  * //////////////////////////////////////
  */

$(document).ready(function(){
  
    $()

    $(".buddy").on("swiperight",function(){
      if ( $(this).is(':last-child') ) {
      alert("This is the Last card :(")
      }
      else if( $(this).is('#questionHolder') ) {
        var text = $('textarea#question').val();
        firebase.database().ref().push(text)
        // $(this).addClass('rotate-left').delay(300).fadeOut(1);
        // $(this).next().removeClass('rotate-left rotate-right').fadeIn(300);
      }
      else{
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

