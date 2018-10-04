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

$.get("/api/examples", function (data) {
    for (var i = 0; i < data.length; i++) {
        dataArray.push(data[i].createdAt);
        dataArray2.push(data[i].price);
    }
});
Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
   draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
         var activePoint = this.chart.tooltip._active[0],
             ctx = this.chart.ctx,
             x = activePoint.tooltipPosition().x,
             topY = this.chart.scales['y-axis-0'].top,
             bottomY = this.chart.scales['y-axis-0'].bottom;

         // draw line
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, bottomY);
         ctx.lineWidth = 2;
         ctx.strokeStyle = 'rgba(219, 21, 21, 0.8)';
         ctx.stroke();
         ctx.restore();
      }
    }
});

var myChart = new Chart(ctx, {
    type: 'LineWithLine',
    data: {
        labels: dataArray,
        datasets: [{
            label: '# of Votes',
            data: dataArray2,
            fill: true,
            backgroundColor: [
                "rgba(220,220,220,0.2)"
            ],
            borderColor: [
                "rgba(0,0,0,1)"
            ],
            pointBorderColor: "rgba(0,0,0,0.5)",
            pointBackgroundColor: "rgba(66, 134, 244, 0.5)",
            pointBorderWidth: 8,
            pointHoverRadius: 10,
            borderWidth: 1, 
            pointHoverBackgroundColor: "rgba(66, 134, 244, 0.5)",
            pointHoverBorderColor: "rgba(0,0,0,0.5)"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'white'
        },
        tooltips:{
            intersect: false, 
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(0, 0, 0)',
                        backgroundColor: 'rgb(247, 247, 247)'
                    }
                },
                labelTextColor:function(tooltipItem, chart){
                    return '#543453';
                }
            }
            
         },
         layout: {
            padding: {
                left: 50,
                right: 50,
                top: 20,
                bottom: 20
            }
        }, 
        scales: {
            xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                gridLines: {
                    display: false,
                    color: "#FFFFFF"

                  }
                }], 
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                    
                },
                gridLines: {
                    display: false,
                    color: "#FFFFFF"
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
