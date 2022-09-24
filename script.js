$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
      $(this).find("a").html("Menu");
    } else {
      $(".item").addClass("active");
      $(this).find("a").html("Menu");
    }
  });
});
