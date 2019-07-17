$('.collapse[data-arrow]').on('show.bs.collapse', function() {
    $('#' + $(this).data('arrow'))
        .removeClass('icon-arrow-down')
        .addClass('icon-arrow-up');

}).on('hide.bs.collapse', function() {
    $('#' + $(this).data('arrow'))
        .removeClass('icon-arrow-up')
        .addClass('icon-arrow-down');
});

(function leftMenuModule() {
    var $leftMenu = $('#left-menu');
    var $burger = $($('#left-menu-open .burger-menu').get(0));

    $leftMenu.data('open', false);

    function open() {
        $burger.addClass('burger-menu-x');
        $('.left-menu-open').css('display', 'block');

        $leftMenu.css('transform', 'translateX(0)');
        $leftMenu.data('open', true);
    }

    function close() {
        $burger.removeClass('burger-menu-x');
        $('.left-menu-open').css('display', 'none');

        $leftMenu.css('transform', 'translateX(-100%)');
        $leftMenu.data('open', false);
    }

    $('#left-menu-open').on('click', function() {

        if ($leftMenu.data('open')) {
            close();
        } else {
            open();
        }
    });

    $(window).on('resize', function() {
        if (window.innerWidth >= 992) {
            open();
        } else {
            close();
        }
    });
})();

(function hoverCollapseModule() {
    function show(e) {
        if ($(window).innerWidth() < 1200) return;

        e.stopPropagation();
        $(this).parent().next().collapse('show');
    }

    function hide(e) {
        e.stopPropagation();
        $(this).parent().next().collapse('hide');
    }

    function hideAll(e) {
        $('.hover-collapse').each(function() {
            $(this).parent().next().collapse('hide');
        });
    }

    function stop(e) {
        e.stopPropagation();
    }

    $(document.body).on('mouseenter', hideAll).on('mousemove', hideAll);

    $('.hover-collapse')
        .on('mouseenter', show)
        .on('mouseover', show)
        .on('mouseleave', hide)
        .on('mousemove', stop);
})();

