const offersSwiper = (() => {
    let mySwiper;
    let holder = document.querySelector('.offers-container');
    const buildSwiper = () => {
        mySwiper = new Swiper(holder, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    };

    const destroySwiper = () => {
        mySwiper.destroy();
    };
    const init = () => {
        if(!holder) {
            return;
        }
        enquire.register("(max-width: 768px)", {
            match : () => buildSwiper(),            
            unmatch : () => destroySwiper(),            
        });
    };

    return {

        init: init

    };
})();

export default offersSwiper;