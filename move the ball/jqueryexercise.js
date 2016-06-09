
console.log("ready!");
console.log($(window).width());
console.log($(window).height());

var width = $(window).width()
var height = $(window).height()

$( document ).ready(function() {
    console.log( "DOM is ready!" );

    $('.green').click(function() {
        $('.circle').css('background','green');
        console.log("green!")
        });

    $('.blue').click(function() {
        $('.circle').css('background','blue');
        console.log("blue!")
      });

    $('.red').click(function() {
        $('.circle').css('background','red');
        console.log("red!")
      });


  $('.hide_show').click(function() {
      $('.circle').toggle();
      console.log("hide or show!")
    });


    //  (0,0) (width,0)
    // (0,height) (width,height)
//MOVEMENTS
    $('.right').click(function() {

        {$('.circle').animate({'left': '+=300px'});
        console.log("right")
        console.log($('.circle').position().left)}

      });

      $('.left').click(function() {
          $('.circle').animate({'left': '-=300px'});
          console.log("left")
        });

      $('.up').click(function() {
          $('.circle').animate({'bottom': '+=300px'});
          console.log("left")
        });

        $('.down').click(function() {
            $('.circle').animate({'bottom': '-=300px'});
            console.log("left")
          });


});


 // (window).resize()
 // (document).width()
 // (document).height()
