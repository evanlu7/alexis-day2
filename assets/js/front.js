/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#33b35a';

    // ------------------------------------------------------- //
    // Custom Scrollbar
    // ------------------------------------------------------ //

    if ($(window).outerWidth() > 992) {
         $(window).on("load",function(){
            $("nav.side-navbar").mCustomScrollbar({
                scrollInertia: 200
            });
        });
    }


    // ------------------------------------------------------- //
    // Side Navbar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {

        e.preventDefault();

        if ($(window).outerWidth() > 1194) {
            $('nav.side-navbar').toggleClass('shrink');
            $('.page').toggleClass('active');
        } else {
            $('nav.side-navbar').toggleClass('show-sm');
            $('.page').toggleClass('active-sm');
        }
    });

    // ------------------------------------------------------- //
    // Transition Placeholders
    // ------------------------------------------------------ //
    $('input').on('focus', function () {
        $(this).siblings('.label-custom').addClass('active');
    });

    $('input').on('blur', function () {
        $(this).siblings('.label-custom').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('.label-custom').addClass('active');
        } else {
            $(this).siblings('.label-custom').removeClass('active');
        }
    });


    // ------------------------------------------------------- //
    // Jquery Progress Circle
    // ------------------------------------------------------ //
    var progress_circle = $("#progress-circle").gmpc({
        color: brandPrimary,
        line_width: 5,
        percent: 80
    });
    progress_circle.gmpc('animate', 80, 3000);

    // ------------------------------------------------------- //
    // External links to new window
    // ------------------------------------------------------ //

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });


// $(document).ready(function(){       
//             var scroll_pos = 0;
//             $(document).scroll(function() { 
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > 50) {
//                     $("nav").css('background-color', 'white');
//                     $("nav a").css('color', 'black');
//                 } else {
//                     $("nav").css('background-color', 'transparent');
//                     $("nav a").css('color', 'white');
//                 }
//             });
//         });



$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 50) {
                    $("button").css('background-color', '');
                    $("button").addClass('animated flip');
                    $("button").addClass('visibility: visible');
            
                } else {
                    $("button").css('background-color', '');
                    $("button").addClass('');
                }
            });
        });


// first slide in
$(document).ready(function(){       
            var scroll_pos = 0;
            $(".firstAni").css("visibility", "hidden");
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 500) {
                    $(".firstAni").addClass('animated slideInRight');
                    $(".firstAni").css("visibility", "visible")
            
                } else {
                    $(".firstAni").addClass('');
                    
                }
            });
        });

// $(document).ready(function(){       
//             var scroll_pos = 0;
//             $(".firstAniText").css("visibility", "hidden");
//             $(document).scroll(function() { 
//                 scroll_pos = $(this).scrollTop();
                
//                 if(scroll_pos > 400) {
//                     $(".firstAniText").addClass('animated slideInRight');
//                     $(".firstAniText").css("visibility", "visible")
            
//                 } else {
//                     $(".firstAniText").addClass('');
                    
//                 }
//             });
//         });



// second slide in
$(document).ready(function(){       
            var scroll_pos = 0;
            $(".secondAni").css("visibility", "hidden");
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 1000) {
                    $(".secondAni").addClass('animated slideInLeft');
                    $(".secondAni").css("visibility", "visible")
            
                } else {
                    $(".secondAni").addClass('');
                    
                }
            });
        });


$(document).ready(function(){       
            var scroll_pos = 0;
            $(".secondAniText").css("visibility", "hidden");
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 1000) {
                    $(".secondAniText").addClass('animated slideInLeft');
                    $(".secondAniText").css("visibility", "visible")
            
                } else {
                    $(".secondAniText").addClass('');
                    
                }
            });
        });

// brand picture animations
$(document).ready(function(){       
            var scroll_pos = 0;
            $(".brandPics").css("visibility", "visible");
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 1000) {
                    $(".brandPics").addClass('animated pulse');
                    $(".brandPics").css("visibility", "visible")
            
                } else {
                    $(".brandPics").addClass('');
                    
                }
            });
        });




// fade in luxury quote
$(document).ready(function(){       
            var scroll_pos = 0;
            $(".luxquote").css("visibility", "hidden");
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 1500) {
                   
                    $(".luxquote").css("visibility", "visible")
                    $(".luxquote").addClass('animated fadeInLeft');
            
                } else {
                    $(".luxquote").addClass('');
                    
                }
            });
        });


});