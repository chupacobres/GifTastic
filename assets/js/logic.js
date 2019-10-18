var topics = ["kardashian", "smurf", "goku", "trump", "alf"];

$(document).ready(function () {
    function createButtons() {

        for (i = 0; i < topics.length; i++) {
            var button = $("<button/>");
            button.addClass("btn btn-primary");
            button.text(topics[i]);
            $("#buttons").append(button)
        }

        $(".btn").on("click", function (obj, id) {
            var topic = $(this).text();
            var urlDin = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=5";
            handleClick(urlDin);

        });
    }


    function handleClick(urlDin) {

        $("#images").empty();
        $.ajax({
            url: urlDin,
            method: "GET"
        }).then(function (response) {
            var responseArr = response.data;
            console.log(responseArr.length);

            for (var j = 0; j < responseArr.length; j++) {
                console.log(responseArr[j].images.original.url);

                var imageDiv = $("#images");
                var img = $("<img>/").attr({
                    "src": responseArr[j].images.original.url,
                    "width": 230
                })

                imageDiv.append(img);
            }
        });

    }
    $("#add-gif").on("click", function (event) {
        console.log("hello")
        event.preventDefault();
        var newGif = $("#text-input").val().trim();
        topics.push(newGif);
        $("#buttons").empty();
        $("#form-group")[0].reset();
        createButtons();
        
    })



createButtons()

})
