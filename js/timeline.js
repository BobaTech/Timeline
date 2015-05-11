function createSlider(name, a, b){
    $(name).slider({
        value: parseInt(a, 10),
        min: parseInt(a, 10),
        max: parseInt(b, 10)
    });
}

function createTimeline(a, b){
    var c = parseInt(a, 10);
    var d = parseInt(b, 10);
    var e = b-a;
    var lineWidth = 20*e;
    $( "#timeline" ).css("width", lineWidth+'%');
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
            createTimeline(a, b);
            $( "#year" ).val($( "#slider" ).slider( "value" ) );
            $( "#slider" ).fadeIn();
            $( "#timeline" ).fadeIn();
            $( ".input" ).fadeOut();
        }
        else{
            alert("Please enter valid values for both the start and end year.");
        }
    });
});