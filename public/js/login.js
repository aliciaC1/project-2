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
        function () {
          window.location.replace("/");
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

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("Logging in Google");
  console.log(profile);
  /*$.post(
    "/login/google",
    {
      userId: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl(),
      accessToken: googleUser.getAuthResponse().id_token
    },
    function() {
      window.location.replace("/");
    }
  );*/
}

$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript("https://connect.facebook.net/en_US/sdk.js", function () {
    FB.init({
      appId: "258920414766195",
      cookie: true,
      xfbml: true,
      version: "v3.1"
    });
    //checkLoginState();
  });
});
