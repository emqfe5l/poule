const innerNav = (() => {
    const init = () => {
        let $innerNavToggle = $('.has-inner-menu');
        if(!$innerNavToggle) {
            return;
        }
        $innerNavToggle.click(function() {
            let $innerNav = $(this).next('.inner-nav');
            console.log($innerNav);
            
            $innerNav.toggleClass('is-active');
        });
    };

    return {
        init: init
    };
})();

export default innerNav;