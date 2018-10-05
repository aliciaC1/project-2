$('.ui.sidebar')
.sidebar('toggle')
;

$('.search-select')
.dropdown()
;

$('.cover-img')
// fade up out is used if available
.transition({
    animation: 'fade up', 
    duration   : '2s',
})
// this is now fade up in
.transition({
    animation: 'fade up', 
    duration   : '2s',
})
;

setTimeout(() => {
  $('.shape').shape('flip right');
}, 2000);

setTimeout(() => {
  $('.shape').shape('flip right');
}, 4000);

  $('.ui .item').on('click', function() {
      $('.ui .item').removeClass('active');
      $(this).addClass('active');
  });             


  $('.newPrice.button')
  .popup({
    popup : $('.basic.popup'),
    on    : 'click'
  })
;



// $('.ui.block.header')
// .transition('set looping')
// .transition('vertical flip')
// ;

// $('.ui.block.header').click(function(){
//   $(this).toggleClass('flipped');
// });

 // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
      var map;
      var infowindow;
      function initMap() {
          
        var ny = { lat: 40.8095344, lng: -73.96039549999999};
        map = new google.maps.Map(document.getElementById('map'), {
          center: ny,
          zoom: 15, 
          styles: [
            {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ff0000"
                },
                {
                  "saturation": 90
                },
                {
                  "lightness": 100
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 8
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "weight": 4
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b98cef"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#fbfbff"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#b6feaa"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#fbfbff"
                }
              ]
            },
            {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "lightness": 100
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#f1fffc"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#b3ffa2"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#76d1bd"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#e9effd"
                },
                {
                  "saturation": 100
                },
                {
                  "lightness": 20
                },
                {
                  "weight": 6
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ]
        });
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: ny,
          radius: 2000,
          type: ['clothing_store']
        }, callback);
      }
    
      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }
      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

      var endpoint = 'live'
var access_key = '4a0fc544f94ec0f2154021de9108a5f3';

// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function (json) {
        var chineseCurrency = $("#avg").attr("value") * json.quotes.USDCNY;
        var newChineseCurrency = parseFloat(chineseCurrency).toFixed(2);
        $("#convertedCNY").text(newChineseCurrency);
    }
});