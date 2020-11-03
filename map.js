function initMap() {
  //Map options
  var options = {
    zoom: 10,
    center: { lat: -33.9294, lng: 18.4497 },
  };

  //New Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  /*
    //Add Marker
    var marker = new google.maps.Marker({
  
      position:{lat:-33.8899,lng:18.5066},
  
      map: map,
  
      //icon: 'pics/'
    });
  
    var infoWindow = new google.maps.InfoWindow({
  
      content: '<h1>Costa works here!</h1>'
    });
  
    marker.addListener('click',function(){
  
       infoWindow.open(map, marker);
    });
    */

  //array of markers
  var markers = [
    {
      //Woodstoock location
      coords: { lat: -33.9294, lng: 18.4497 },
      //iconImage: ""
      content: "<h4>DCV Company <br> woodstoock</h4>",
    },
    {
      //Seapoint location
      coords: { lat: -33.9169, lng: 18.3875 },
      content: "<h4>DCV Company <br>Seapoint</h4>",
    },
  ];

  //loop through markers
  for (var i = 0; i < markers.length; i++) {
    //add markers
    addMarker(markers[i]);
  }

  /*
    addMarker({
      coords: { lat: -33.8899, lng: 18.5066 },
      //iconImage: ""
      content: "<h1>Wodstoock</h1>",
    });
  
    addMarker({
      coords: { lat: -33.9169, lng: 18.3875 },
      content: "<h1>Seapoint</h1>",
    });
    */

  //Add marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,

      map: map,

      //icon: props.iconImage
    });

    //will check for the customs icons
    if (props.iconImage) {
      //setting the icon images
      marker.setIcon(props.iconImage);
    }

    //check the content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
