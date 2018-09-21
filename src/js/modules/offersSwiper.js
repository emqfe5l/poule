const offersSwiper = (() => {
    let mySwiper;
    let holder = document.querySelector('.offers-container');
    const buildSwiper = () => {
        mySwiper = new Swiper(holder, {
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                769: {
                    slidesPerView: 2
                },
                415: {
                    slidesPerView: 1
                }
            }
        });
    };

    const destroySwiper = () => {
        mySwiper.destroy();
    };
    const init = () => {
        if (!holder) {
            return;
        }
        enquire.register("(max-width: 767px)", {
            match: () => buildSwiper(),
            unmatch: () => destroySwiper(),
        });
    };

    return {

        init: init

    };
})();

export default offersSwiper;