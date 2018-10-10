// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import heroSwiper from './modules/heroSwiper';
import offersSwiper from './modules/offersSwiper';
import hamburger from './modules/hamburger';
import innerNav from './modules/innerNavigation';
import regionPicker from './modules/region-picker';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        heroSwiper.init();
        offersSwiper.init();
        hamburger.init();
        innerNav.init();
        regionPicker.init();

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top + 200;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        if ($('#Pattes').length) {
            window.onscroll = function() {
                const s = $('#Pattes path');
                const a = Object.keys(s);
                a.forEach((el, i) => {
                    if (i < 28) {
                        if (isScrolledIntoView('#' + s[el].id)) {
                            $('#' + s[el].id).css('opacity', '1');
                        } else {
                            $('#' + s[el].id).css('opacity', '0');
                        }
                    }
                });
            };
        }

        function detectIE() {
            var ua = window.navigator.userAgent;
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                $('body').addClass('ie');
            }
        }
        detectIE();


        if ($('.pages-nav').length) {
            $('.pages-nav > .active').on('click', function (e) {
                e.preventDefault();
                $(this).siblings().toggleClass('show');
            });
        }

     
    });

})(jQuery);