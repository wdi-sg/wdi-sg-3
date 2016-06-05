console.clear();
console.log("External files are downloaded...")

$(document).ready(function() {
    console.log("DOM is ready")
    
    $("#hide").click(function()
    {
        $("#circle").css("display", "none") 
    })
    
    $("#show").click(function() {
        $("#circle").css("display", "block")
    })
    
    $("#red").click(function()
    {
        $("#circle").css("background-color", "red")  
    })
    
    $("#blue").click(function()
    {
        $("#circle").css("background-color", "blue") 
    })
    
    $("#green").click(function()
    {
        $("#circle").css("background-color", "green") 
    })
    
    $( "#right" ).click(function Right() {
    console.log("Right Clicked");
    $(".circle").animate({'left': '+=30px'});
})
    $( "#left" ).click(function Left() {
    console.log("Left Clicked");
    $(".circle").animate({'left': '-=30px'});
})
    $( "#up" ).click(function Up() {
    console.log("Up Clicked");
    $('.circle').animate({'marginTop' : "-=30px"});
})
    $( "#down" ).click(function Down() {
    console.log("Down Clicked");
    $('.circle').animate({'marginTop' : "+=30px"});
});
    
})

