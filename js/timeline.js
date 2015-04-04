$(function(){
    $("#submit").click(function(){
        var a = document.getElementById("start").value;
        var b = document.getElementById("end").value;
        if(!isNaN(a) && !isNaN(b) && a.length !== 0  && b.length !== 0){
            $( ".input" ).fadeOut();
            $( "#slider" ).slider({
                min: $("start").val(),
                max: $("end").val()
             });
            $( "#slider" ).fadeIn();
        }
        else{
            alert("Please enter valid values for both the start and end year");
        }
    });
});