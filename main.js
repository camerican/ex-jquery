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

  // $.ajax({
  //   type: "GET",
  //   url: "http://api.spotify.com/v1/search",
  //   data: {
  //     q: "Beatles",
  //     type: "artist"
  //   },
  //   crossDomain: true,
  //   success: function(data) {
  //     // console.log(data.artists.items);
  //     data.artists.items.forEach(function(c,i){
  //       if( c.images[0] && c.images.length ) {
  //         //console.log( i, c.images[0].url );
  //         $(".container").append('<img class="spotify-img" src="'+
  //           c.images[0].url + '" />');
  //       }
  //     });
  //   }
  // });

  $.ajax({
    type: "GET",
    url: "http://art-share.herokuapp.com/api/v1/users/",
    success: function(data){
      console.log( data );
      // we want to output a series
      // of list items for each user
      // to the ordered list that lives
      // as a direct child within 
      // the .other_container
      data.result.filter(function(person,index,list){
        if( list.slice(0,index).filter(
          function(i_person){
            return i_person.fname == person.fname && i_person.lname == person.lname;
          }).length > 0 ) {
          return false;
        }
        return true;
      }).forEach(function(person){
        $(".other_container > ol").append('<li><a href="mailto:'+ person.email + '">' + person.fname + ' ' + person.lname + '</a></li>' );
      });
      
    }
  });
//data returned is: result (Array) -> Object[fname,lname,id,email]

//  $("h1").hide();
  $("h1").slideUp(4000);
//  $(".box.hidden").show();
  $(".box.hidden").slideDown(4000);

  // boxBigger();
  // pulse("h1");
  // pulse(".box");
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










