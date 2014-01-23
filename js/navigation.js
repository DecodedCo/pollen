 $(function() {
    $('.topbar-toggle').click(function() {
        $($(this).attr('data-target')).toggleClass('collapse');
    });
});