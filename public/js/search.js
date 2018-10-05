    $('#searchResult').on('click', function (event) {
        event.preventDefault();
        var userInput = {
            location: $('#location-select').dropdown('get value'), 
            product:$('#product-select').dropdown('get value')
        };
        var newURL = "/example/"+ userInput.location + "/" + userInput.product;
        alert(newURL);
            $('<a>').attr("href", newURL);
            return true;
           
    }); 
    

// });
    
//     $("#clickThis").click(function() {
//         $("#testNext").attr("href",newURL);
//         console.log(newURL);
//     });
//     //$submit.on("click", handleSubmission);


// // Get references to page elements
// $(document).ready(function() {
//     // var $locationID = $("#NewYork").attr("valueNumber");
//     // var $productID = $("#tshirt").attr("valueNumber");
//     //var $submit=$(".submit");
    