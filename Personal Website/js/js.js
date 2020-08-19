/*  Global */

$(function  ()  {

    'use strict'    ;

    $('.info-list li').click(function() {

        $(this).addClass('selected').siblings('li').removeClass('selected');                        // siblings = brothers

        $('.tabs-content div').hide();

        $('.' + $(this).data('class')).fadeIn();
    
    });

});