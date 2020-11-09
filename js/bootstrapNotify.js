function theFunction() {
  //This notificiation comes with image on the side
  $.notify(
    {
      //icon: "1.jpg",
      title: "Devilson Costa",
      message: "THE LINK ABOUT, STILL UNDER CONSTRUCTION",
      //   animation: {
      //     exit: "animated zoomOutUp",
      //   },
    },
    {
      type: "minimalist",
      delay: 4000,
      icon_type: "image",
      template:
        '<div data-notify="container" class="col-sm-9 col-md-3 alert alert-{0} fadeIn" role="alert">' +
        '<img data-notify="icon" src="./pics/me.jpg" class="img-circle pull-left"style="border-radius:50%">' +
        '<span data-notify="title">{1}</span>' +
        '<span data-notify="message" style="width: 80%;">{2}</span>' +
        "</div>",
    }
  );
}
