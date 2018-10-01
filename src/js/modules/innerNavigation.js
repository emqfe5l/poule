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
        if ($(window).width() < 768) {
            let $typeCategory = $('.type-category');

            if (!$typeCategory) {
                return;
            }
            $typeCategory.click(function() {
                $(this).toggleClass('visible-menu');
                console.log(11)
            });
        } else {
            $typeCategory.click(function() {
                $(this).removeClass('visible-menu');
            });
        }
    };

    return {
        init: init
    };
})();

export default innerNav;