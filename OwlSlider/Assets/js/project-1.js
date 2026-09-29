
$(document).ready(function () {

    $('#addelement').click(function (e) {

        e.preventDefault();
      
        $('#addelement').after("<div class='input-group'><label for='input'>سابقه</label><input type='text' id='input' placeholder='سابقه خود را وارد نمایید'></div>");


    });

})

