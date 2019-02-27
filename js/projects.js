$(document).ready(function (){
  $(".shown").css("margin-top", ($("ul").outerHeight()) + 10 + "px");
  var map = new Map([["nxt",$(".next")],["ov",$(".ov")],["bl",$(".bl")],
  ["wo",$(".wo")],["lb",$(".lb")]]);
  $("li a").click(function () {
    var element = map.get($(this).attr("id"));
    if(!(element.hasClass("shown"))){
      $(".shown").hide();
      $(".shown").removeClass("shown");
      $(".active").removeClass("active");
      $(this).addClass("active");
      element.addClass("shown");
      $(".shown").css("margin-top", ($("ul").outerHeight()) + 10 + "px");
      element.show();
    }
  });
});
$(window).on('resize', function (){
  $(".shown").css("margin-top", ($("ul").outerHeight()) + 10 + "px");
});
