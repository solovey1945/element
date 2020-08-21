const popup = () => {
    function bindModal(btnSel, popupSel, closeSel) {
        const popup = $(popupSel);
        const close = $(closeSel);
        const trigger = $(btnSel);

        $(trigger).on('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            $(popup).css({
                "visibility": "visible",
                "opacity": "1"
            });
            $("body").css("overflow", "hidden");
        });

        $(close).on('click', () => {
            $(popup).css({
                "visibility": "",
                "opacity": ""
            });
            $("body").css("overflow", "");
        });

        $(popup).on('click', (e) => {
            if (e.target === popup) {
                $(popup).css({
                    "visibility": "",
                    "opacity": ""
                });
                $("body").css("overflow", "");
            };
        });
    }
    bindModal('.btn__request', '.popup__request', '.popup__close');
};

popup();




