var t1 = new TimelineMax({ paused: true });

t1.staggerFrom(".panel", 0.5, { scaleY: 0, ease: Expo.easeOut }, 0.3);

t1.staggerFrom(
  ".box",
  0.6,
  { opacity: 0, scale: 0, ease: Back.easeOut.config(1.7) },
  0.3
);

t1.staggerFrom("#light", 1, { opacity: 0, y: -20, ease: Circ.easeOut }, 0.3);

t1.staggerFrom("#light1", 1, { opacity: 0, x: -300, ease: Circ.easeOut }, 0.3);

t1.staggerFrom(
  "#para",
  1.1,
  { opacity: 0, x: 200, y: 0, ease: Back.easeOut.config(1.7) },
  0.3
);

//here

t1.reverse();

$(document).on("click", ".btn", function () {
  t1.reversed(!t1.reversed());
});

//theSidebar part

$(document).ready(function () {
  $(".theToggle").click(function () {
    $(".theSidebar").toggleClass("active");
    $(".theToggle").toggleClass("active");
  });
});

//theScrolTop automatically part

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});

//Toaster notifications

document.getElementById("theButton2").addEventListener("click", function () {
  $.toast({
    heading: "Sorry for inconvenience",
    text: "About Page still under construction.",
    icon: "info",
    showHideTransition: "slide",
    bgColor: "orange",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});

/**
 *
 * THIS PART IF FOR THE VIDEO "WATCH HERE BUTTON" IN THE MAIN PAGE INDEX.HTML
 *
 */

function toggle2() {
  var trailer = document.querySelector(".trailer");
  var video = document.querySelector("video");
  var close = document.querySelector(".close");
  close.classList.toggle("active");
  trailer.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}
