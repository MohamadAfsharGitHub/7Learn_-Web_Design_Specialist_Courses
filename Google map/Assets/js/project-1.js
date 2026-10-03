
$(document).ready(function () {

    $('.modal-link').click(function (e) {

        e.preventDefault();

        $('.bg-modal').fadeIn() ;

        $('.modal').fadeIn();

        });
         $('.close').click(function (e) {

        e.preventDefault();

        $('.bg-modal').fadeOut() ;

        $('.modal').fadeOut();

        });

    });


