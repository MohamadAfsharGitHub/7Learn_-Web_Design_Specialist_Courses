$(document).ready(function(){
    $('.accordion>li>div').click(function(){
        if ($(this).next().is(':visible') == false){
            $('.accordion ul').slideUp();
        }
$(this).next().slideToggle();
    });

});


