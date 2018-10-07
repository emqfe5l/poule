const regionPicker = (() => {
    const $map = $('.map-side');

    const init = () => {

        if (!$map) {
            return;
        }

        const $select = $('#regionSelect');

        $select.on('change', function() {
            let $currentValue = $(this).val(),
                $currentRegion = $map.find('#'+$currentValue);

            $currentRegion.addClass('active').siblings().removeClass('active');
            setName($(this).find('option:selected').text());

        });

        $map.on('click', function(e){
            let $currentTarget = e.target,
                $currentRegion = $currentTarget.parentElement.id,
                $currentEl = $map.find('#'+$currentRegion);

            $currentEl.addClass('active').siblings().removeClass('active');
            $select.val($currentRegion).change();

        });

        $select.val('region1').change();

        function setName(name){
            let $regionName = $('.region-name');
            $regionName.text(name);
        }

    };

    return {
        init: init
    };

})();

export default regionPicker;