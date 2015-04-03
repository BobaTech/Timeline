  
$(function(){
    $("#submit").click(function(){
        if(!isNaN(document.getElementById("start").value) && !isNaN(document.getElementById("end").value) && document.getElementById("end").value >= document.getElementById("start").value){
            $( ".input" ).fadeOut();
            $("#slider").show();
            $( "#slider" ).slider({
                min: document.getElementById("start").value,
                max: document.getElementById("end").value
            });
        }
        else{
            alert("Please enter valid values for both the start and end year");
        }
    });
});
