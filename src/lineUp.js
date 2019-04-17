$(document).ready(function() {
    $('#lineup').on('click', function() {
        for (let i = 0; i < window.dancers.length; i++) {
            //window.dancers[i].top = 10;
            window.dancers[i].$node.animate({
                top : "50px"
            },1000)
            window.dancers[i].setPosition();
        }
    });
});

  
  