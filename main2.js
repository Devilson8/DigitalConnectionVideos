//the scrolldown button functionality

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".theNav").addClass("black");
  } else {
    $(".theNav").removeClass("black");
  }
});

//The datePicker code
$(function () {
  $("#picker").daterangepicker({
    timePicker: true,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
      format: "M/DD hh:mm A",
    },
  });
});
