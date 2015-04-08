function createSlider(name, a, b){
    $(name).slider({
        value: parseInt(a, 10),
        min: parseInt(a, 10),
        max: parseInt(b, 10)
    });
}

$(document).ready(function(){
    $("#submit").click(function(){
        var a = document.getElementById( "start" ).value;
        var b = document.getElementById( "end" ).value;
        if(!isNaN(a) && !isNaN(b) && a.length !== 0  && b.length !== 0){
            createSlider("#slider", a, b);
            $( "#slider" ).slider({
                slide: function( event, ui ) {
                    $( "#year" ).val( ui.value );
                }
            });
            $( "#year" ).val($( "#slider" ).slider( "value" ) );
            $( "#slider" ).fadeIn();
            $( ".input" ).fadeOut();
        }
        else{
            alert("Please enter valid values for both the start and end year");
        }
    });
});