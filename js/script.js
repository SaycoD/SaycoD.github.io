(function($) {
    $(document).ready(function() {
        var is_mobile = false;
 
        if( $('.player').css('display')=='none') {
            is_mobile = true;
        }
        if (is_mobile == true) {
            //Conditional script here
            $('.big-background').addClass('bg-dark');
        }else{
            $('.player').mb_YTPlayer();
        }
    });
})(jQuery);