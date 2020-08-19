/* global $, alert, console*/


// Trigger Nice Scroll Plugin

$(function () {

    'use strict';

    $('html').niceScroll({

        cursorcolor: '#D8AA5F'
        
    });

})

function myFunction()   {

    var x = document.getElementById('myTopnav');

    if (x.className === 'topnav')   {

        x.className += 'responsive';

    }   else    {

        x.className =   'topnav';
        
    }

}

///////////////////////////////
$(document).ready(function(){

    $('.menu-toggle').click(function(){

        $('nav').toggleClass('active')

    })

})
/*
document.getElementById('one').onclick = (function() {myMenue()});

(function myMenue()  {

    document.getElementById('two').style.left = "200px";
})

*/