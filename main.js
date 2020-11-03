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
document.getElementById("theButton").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "This link is not available yet",
    icon: "warning",
    showHideTransition: "slide",
    bgColor: "#FF1356",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});

document.getElementById("theButton1").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "This link is not available yet",
    showHideTransition: "slide",
    icon: "warning",
    bgColor: "#FF1356",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});

document.getElementById("socialAcc1").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "Unfortunately we do not have account on social media yet",
    showHideTransition: "slide",
    icon: "warning",
    bgColor: "#FF1356",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});
document.getElementById("socialAcc2").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "Unfortunately we do not have account on social media yet",
    showHideTransition: "slide",
    icon: "warning",
    bgColor: "#FF1356",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});
document.getElementById("socialAcc3").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "Unfortunately we do not have account on social media yet",
    showHideTransition: "slide",
    icon: "warning",
    bgColor: "#FF1356",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});

document.getElementById("theMember1").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "Our member groups will be published soon soon",
    showHideTransition: "slide",
    icon: "info",
    bgColor: "#345",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});

document.getElementById("theMember2").addEventListener("click", function () {
  $.toast({
    heading: "In Process",
    text: "Our member groups will be published soon soon 😊",
    showHideTransition: "slide",
    icon: "info",
    bgColor: "#345",
    textColor: "white",
    loader: false,
    position: "mid-center",
  });
});

document.getElementById("franceLang").addEventListener("click", function () {
  $.toast({
    heading: "Coming Soon",
    text: "No translation in french yet",
    showHideTransition: "slide",
    icon: "info",
    bgColor: "#f00",
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
