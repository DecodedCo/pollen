$(document).ready(function () {
    $(".globalnav a").click(function(event) {
    	var $toggle = $(this).parents('.global-nav').find('navbar-toggle');
    	var $target = $($toggle.data('target')); 
        // check if window is small enough so dropdown is created
        $toggle.is(":visible")
            $target.toggle();
    });
});