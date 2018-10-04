function updateStatusCallback(response) {
  if (response.authResponse) {
    var accessToken = response.authResponse.accessToken;
    FB.api("/me", null, { fields: "id,name,email" }, function (response) {
      $.post(
        "/login/fb",
        {
          userId: response.id,
          name: response.name,
          email: response.email,
          accessToken: accessToken
        },
        function() {
          console.log("User logged in Facebook.");
        }
      );
    });
  } else {
    console.log("User cancelled login or did not fully authorize.");
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    updateStatusCallback(response);
  });
}

$(document).ready(function () {
  $.ajaxSetup({ cache: true });
  $.getScript("https://connect.facebook.net/en_US/sdk.js", function () {
    FB.init({
      appId: "258920414766195",
      cookie: true,
      xfbml: true,
      version: "v3.1"
    });
    checkLoginState();
  });
});
