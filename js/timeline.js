function createSlider(name ,a, b){
    $( name ).slider({
        min: a,
        max: b
    });
}
$(function(){
    $("#submit").click(function(){
        var a = document.getElementById("start").value;
        var b = document.getElementById("end").value;
        if(!isNaN(a) && !isNaN(b) && b >= a && a.length !== 0  && b.length !== 0){
            $( ".input" ).fadeOut();
            createSlider("#slider", a, b);
            $("#slider").show();
        }
        else{
            alert("Please enter valid values for both the start and end year");
        }
    });
});


