const innerNav = (() => {
    const init = () => {
        let $innerNavToggle = $('.has-inner-menu');
        if (!$innerNavToggle) {
            return;
        }
        $innerNavToggle.click(function() {
            let $innerNav = $(this).next('.inner-nav');
            console.log($innerNav);

            $innerNav.toggleClass('is-active');
        });
        $(".dropdown-item.has-drop").click(function() {

            $(this).toggleClass('active');

        });
        $('.search-holder').click(
            function() {
                console.log(1)
                setTimeout($(this).addClass('open'), 10000);

            }
        )
        if ($(window).width() >= 768) {
            $(document).on("click", function(e) {
                if ($('.search-holder').hasClass('open')) {
                    console.log(2)
                    if ($(e.target).is(".search-holder input") === false) {
                        $(".search-holder").removeClass("open");
                    }
                }
            });
        }
        let $typeCategory = $('.type-category');
        if ($(window).width() < 768) {

            if (!$typeCategory.length) {
                return;
            }
            $typeCategory.click(function() {
                $(this).toggleClass('visible-menu');
            });
        } else {
            $typeCategory.click(function() {
                if ($typeCategory == 0) {
                    return;
                }
                $(this).removeClass('visible-menu');
            });
        }
    };

    return {
        init: init
    };
})();

export default innerNav;