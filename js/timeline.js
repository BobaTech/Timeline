  
$(function(){
    $("#submit").click(function(){
        $( ".input" ).hide();
        $("#slider").show();
        $( "#slider" ).slider({
            min: document.getElementById('start'),
            max: document.getElementById('end')
        });
        
    });
});
