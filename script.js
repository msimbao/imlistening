
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

    FIREBASE
                    
  * //////////////////////////////////////
  */



firebase.database().ref().once('value', (snapshot) => {
  const data = snapshot.val();
  const questionsData = Object.values(data);
  console.log(questionsData)
  app.questions = questionsData;
});
/**
  * //////////////////////////////////////

    VUE
                    
  * //////////////////////////////////////
  */

/** 
* @name card-item
* @brief Component For Shuffle-able card items
*/

       <div class="buddy">
          <div class="avatar" style="display: block;">
            <h1>
              Thank You!
            </h1>
            <h2>
              Your contribution will enrich the lives of other players!
            </h2>
          </div>
        </div>

Vue.component("card", {
  props: ["card"],
  template:
    '<div class="buddy"'+
    '<div class="avatar" style="display: block;">'+
    ''
    '<h3>{{card.words}}</h3>'
    '<a :href="feed.url" target="_blank" rel="noopener noreferrer">' +
    '<transition name="fade">' +
    '<div class="newsItem card">' +
    '<div class="newsImageHolder">' +
    '<img :src="card.image" >' +
    "</div>" +
    '<div class="articleWords">' +
    "<h4>{{feed.title}}</h4>" +
    '<p>"{{feed.description}}..."</p>' +
    "<h6>{{feed.author}}</h6>" +
    "</div>" +
    '<img class="teamImage" :src="feed.teamLogo">' +
    "</div>" +
    "</transition>" +
    "</a>",
});

var app = new Vue({
  el: "#app",
  data: {
    images: images,  // Array To Hold Images
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


/**
  * //////////////////////////////////////

    IMAGES URLS
                    
  * //////////////////////////////////////
  */