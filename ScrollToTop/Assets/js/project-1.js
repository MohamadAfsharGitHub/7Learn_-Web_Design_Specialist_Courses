
$(window).scroll(function () {
    if ($(this).scrollTop() >=50){
        $('#top').fadeIn();
    }
    else {
        $('#top').fadeOut();
        }
});
