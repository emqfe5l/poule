const heroSwiper = (() => {
    const init = () => {
        let mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    };

    return {
        init: init
    };
})();

export default heroSwiper;