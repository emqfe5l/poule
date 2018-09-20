const hamburger = (() => {
    const $hamburgerButton = $('.hamburger');
    const $menuTop = $('.header__dropdown-wrapper');
    const $menuBottom = $('.header__bottom-line');

    const init = () => {
        $hamburgerButton.click(() => {
            $hamburgerButton.toggleClass('is-active');
            $menuTop.toggleClass('is-active');
            $menuBottom.toggleClass('is-active');
        });
    };

    return {
        init: init
    };

})();

export default hamburger;