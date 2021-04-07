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
    "<h3> {{card.question}} </h3>" +
    "</div>" +
    "</div>"
});

var app = new Vue({
  el: "#app",
  data: {
    images: [], // Array To Hold Images
    questions: [], // Array To Hold Questions
    entries: [] // Array to hold card data which is are shuffled combinations of 7 words and 7 images
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
          question: question,
        };
        this.entries[i] = obj;
      }
      return this.entries;
    },
    loadData: function() {
      firebase
        .database()
        .ref()
        .once("value", snapshot => {
          const data = snapshot.val();
          const questionsData = Object.values(data);
          this.questions = questionsData;
        });
    }
  },
  created: function() {
    this.images = images;
    this.loadData();
    this.shuffle();
  },
  watch: {
  updateEntries() {
    this.entries = this.shuffle();
  }
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
  $();

  $(".buddy").on("swiperight", function() {
    app.shuffle();
    if ($(this).is(":last-child")) {
      alert("This is the Last card :(");
    } else if ($(this).is(":first-child")) {
      app.shuffle();
      alert("shuffled");
      $(this)
        .addClass("rotate-left")
        .delay(300)
        .fadeOut(1);
      $(this)
        .next()
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
      alert("last Child Reached");
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

/**
  * //////////////////////////////////////

    IMAGES URLS
                    
  * //////////////////////////////////////
  */
