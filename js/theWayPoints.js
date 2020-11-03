var waypoint = new Waypoint({
  element: document.getElementById("eu"),
  handler: function () {
    notify("Basic waypoint triggered");
  },
});
