var topics = ["kardashian", "smurf", "goku", "trump", "alf"];

$(document).ready(function () {
    function createButtons() {
       
        for (i = 0; i < topics.length; i++) {
            var button = $("<button/>");
            button.addClass("btn btn-primary");
            button.text(topics[i]);
            $("#buttons").append(button)
           
        }
    
    
    
        
    }



   createButtons() 


    




})
