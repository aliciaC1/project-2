// set endpoint and your access key
var endpoint = "live";
var access_key = "4a0fc544f94ec0f2154021de9108a5f3";

// get the most recent exchange rates via the "live" endpoint:
$.ajax({
  url: "http://apilayer.net/api/" + endpoint + "?access_key=" + access_key,
  dataType: "jsonp",
    success: function (json) {
        var chineseCurrency = $("#avg").attr("value") * json.quotes.USDCNY;
        var newChineseCurrency = parseFloat(chineseCurrency).toFixed(2);
    $("#converted").text(newChineseCurrency);
    }
});

//Chart JS

var ctx = $("#myChart");

var dataArray = [];
var dataArray2 = [];

$.get("/api/examples", function(data) {
    for (var i = 0; i < data.length; i++) {
        dataArray.push(data[i].createdAt);
        dataArray2.push(data[i].price);
  }
});

var myChart = new Chart(ctx, {
  type: "line",
    data: {
        labels: dataArray,
        datasets: [{
      {
        label: "# of Votes",
            data: dataArray2,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
      ],
            borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
            borderWidth: 1
      }
    ]
  },
  options: {
        scales: {
            yAxes: [{
        {
          ticks: {
                    beginAtZero: true
          }
        }
            }]
        }
    }
});

//GeoLocation

function geoFindMe() {
    var output = document.getElementById("out");

  if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
    }

  function success(position) {
        var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = "<p>Latitude is " + latitude + "° <br>Longitude is " + longitude + "°</p>";

    /*
        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

        output.appendChild(img);
        */
  }

  function error() {
        output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe();
