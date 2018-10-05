// Get references to page elements
$(document).ready(function() {
    var $locationID = $("#NewYork").attr("valueNumber");
    var $productID = $("#tshirt").attr("valueNumber");
    //var $submit=$(".submit");
    
    
    
    var newURL = "/example/"+$locationID+"/"+$productID;
    
    $("#clickThis").click(function() {
        $("#testNext").attr("href",newURL);
        console.log(newURL);
    });
    //$submit.on("click", handleSubmission);
});