// Get references to page elements

var $locationID = $("#locationId").attr("data-value");
var $productID = $("#productID").attr("data-value");

var newURL = "/example/" + $locationID + "/" + $productID;

var x = $(".menu").val().trim();
console.log("The New URL" + newURL);
console.log(x);

$("#searchResult").click(function () {
    $("#searchResult").attr("href", newURL);
    console.log(newURL);
});

