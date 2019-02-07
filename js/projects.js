$(document).ready(function (){
  $("div").css("margin-top", ($("ul").outerHeight()) + 15 + "px");
  var map = new Map([["nxt",$(".next")],["ov",$(".ov")],["bl",$(".bl")],
  ["wo",$(".wo")],["lb",$(".lb")]]);
  $("li a").click(function () {
    var element = map.get($(this).attr("id"));
    if(!(element.hasClass("shown"))){
      $(".shown").hide(90);
      $(".shown").removeClass("shown");
      $(".active").removeClass("active");
      $(this).addClass("active");
      element.addClass("shown");
      element.show(100);
    }
  });
});
$(window).on('resize', function (){
  $("div").css("margin-top", ($("ul").outerHeight()) + 15 + "px");
});