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

/**
 * @name card-item
 * @brief Component For Shuffle-able card items
 */

Vue.component("card-item", {
  props: ["card"],
  template:
    '<div class="buddy">' +
    '<div class="avatar" style="display: block;">' +
    '<img :src="card.image" width="100%">' +
    "<h2> {{card.question}} </h2>" +
    "</div>" +
    "</div>"
});

firebase
  .database()
  .ref()
  .once("value", snapshot => {
    const data = snapshot.val();
    const questionsData = Object.values(data);

    var app = new Vue({
      el: "#app",
      data: {
        images: [], // Array To Hold Images
        questions: [], // Array To Hold Questions
        cards: [] // Array to hold card data which is are shuffled combinations of 7 words and 7 images
      },
      methods: {
        shuffle: function() {
          for (i = 0; i < 7; i++) {
            var image = this.images[
              Math.floor(Math.random() * this.images.length)
            ];
            var question = this.questions[
              Math.floor(Math.random() * this.questions.length)
            ];
            var obj = {
              id: i,
              image: image,
              question: question
            };
            this.cards[i] = obj;
          }
        }
      },
      created: function() {
        this.images = images;
        this.questions = questionsData;
        this.shuffle();
      }
    });
  
  /**
  * //////////////////////////////////////
 __      __         
   CARD SWIPE
   
   Original Code by @developingidea
                    
  * //////////////////////////////////////
  */


    $(document).ready(function() {
      $(".buddy").on("swiperight", function() {
        if ($(this).is(":last-child")) {
          $(".buddy:nth-child(1)")
            .removeClass("rotate-left rotate-right")
            .fadeIn(300);
        } else if ($(this).is("#questionHolder")) {
          var text = $("textarea#question").val();
          firebase
            .database()
            .ref()
            .push(text);
          $(this)
            .addClass("rotate-left")
            .delay(300)
            .fadeOut(1);
          $(this)
            .next()
            .removeClass("rotate-left rotate-right")
            .fadeIn(300);
        } else {
          $(this)
            .addClass("rotate-left")
            .delay(300)
            .fadeOut(1);
          $(this)
            .next()
            .removeClass("rotate-left rotate-right")
            .fadeIn(300);
        }
      });

      $(".buddy").on("swipeleft", function() {
        if ($(this).is(":last-child")) {
          $(".buddy:nth-child(1)")
            .removeClass("rotate-left rotate-right")
            .fadeIn(300);
        } else {
          $(this)
            .addClass("rotate-right")
            .delay(300)
            .fadeOut(1);
          $(this)
            .next()
            .removeClass("rotate-left rotate-right")
            .fadeIn(300);
        }
      });
    });
  });

