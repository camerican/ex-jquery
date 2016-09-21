$(document).on("ready",function(){
  //Immediately Invoking Function (IFF)
  // (function(name) {
  //   alert("Hi " + name);
  // })("Mom");

//  $("h1").hide();
  $("h1").slideUp(4000);
//  $(".box.hidden").show();
  $(".box.hidden").slideDown(4000);

  boxBigger();

}); // end DOM Content Loaded

var boxBigger = function(){
  $(".container > .box").first().animate({
    opacity: 0.5,
    width: "600px",
    height: "600px"
  },4000,"swing", boxSmaller);
}

var boxSmaller = function() {
  $(".container > .box").first().animate({
    opacity: 1,
    width: "50px",
    height: "50px"
  },4000,"swing", boxBigger);
}