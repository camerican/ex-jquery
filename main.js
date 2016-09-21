$(document).on("ready",function(){
  //Immediately Invoking Function (IFF)
  // (function(name) {
  //   alert("Hi " + name);
  // })("Mom");

// $.ajax({
//   type: "POST",
//   url: "./data.json",
//   data: {q: "90 John St"},
//   success: function(data) {
//     console.log(data);
//   }
// });

  $.ajax({
    type: "GET",
    url: "http://api.spotify.com/v1/search",
    data: {
      q: "Beatles",
      type: "artist"
    },
    success: function(data) {
      // console.log(data.artists.items);
      data.artists.items.forEach(function(c,i){
        if( c.images[0] && c.images.length ) {
          //console.log( i, c.images[0].url );
          $(".container").append('<img class="spotify-img" src="'+
            c.images[0].url + '" />');
        }
      });

    }
  });


//  $("h1").hide();
  $("h1").slideUp(4000);
//  $(".box.hidden").show();
  $(".box.hidden").slideDown(4000);

  boxBigger();
  pulse("h1");
  pulse(".box");
}); // end DOM Content Loaded

// // Alternate Style of calling animate
// $(".container > .box").first().animate({
//     opacity: 0.5,
//     width: "600px",
//     height: "600px"
//   },{
//     duration: 4000,
//     complete: boxSmaller
//   });

var boxBigger = function(){
  $(".container > .box").first().animate({
    opacity: 0.5,
    width: "600px",
    height: "600px"
  },4000,"swing", boxSmaller);
}

// // XML example
//   <xml>
//     <jelly>fish</jelly>
//   </xml>
// //OBJ
// {jelly: "fish"}


var boxSmaller = function() {
  $(".container > .box").first().animate({
    opacity: 1,
    width: "50px",
    height: "50px"
  },4000,"swing", boxBigger);
}

// Here we're creating a function that
// takes a selector as its argument
// and causes a loop of:
// * slideUp over 2s
// * wait 2s via setTimeout
// * sideDown over 2s
// * repeat
var pulse = function(selector){
  $(selector).slideUp(2000,function(){
    setTimeout(function(){
      $(selector).slideDown(2000,function(){
        pulse(selector);
      });
    },2000); //end setTimeout
  }); //end slideUp
} //end pulse


$("#one").animate({
  marginLeft: "-=100px"
},{
  complete: function(){
    $("#one").animate({
      marginTop: "-100px"
    },{
      complete: function(){

      }
    })
  }
})










