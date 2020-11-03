var t2 = new TimelineMax({ paused: true });

t2.to(".one", 0.5, { y: 8, rotation: 180, ease: Expo.easeInOut });
t2.to(".two", 0.5, {
  y: -8,
  rotation: 90,
  ease: Expo.easeInOut,
  delay: -0.5,
});
t2.to(".toggle", 0.2, {
  y: 8,
  rotation: 45,
  ease: Expo.easeInOut,
  delay: -0.2,
});
t2.to(".menu", 1, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -1,
});

t2.staggerFrom(
  ".menu .theUserList .theList",
  1,
  { x: -200, opacity: 0, overflow: "hidden", ease: Circ.easeOut },
  0.3
);

t2.reverse();

$(document).on("click", ".toggle", function () {
  t2.reversed(!t2.reversed());
});
