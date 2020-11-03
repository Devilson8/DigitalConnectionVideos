$(document).ready(function () {
  $("section").height($(window).height());
  onWindowResize();

  $(".obss-scroller").smoothScroller({
    duration: 1000,
    activeClass: "active",
  });
});

var onWindowResize = function () {
  $(window).resize(function (evt) {
    $("section").height($(window).height());
  });
};
