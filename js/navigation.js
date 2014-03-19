$(document).ready(function () {
  function updateGlobalNavCollapse(){
    $(".global-nav li a").click(function(event) {
      if($(this).parent().hasClass('dropdown')){
        console.log('dont collapse, its a dropdown')
      }else{
        var $toggle = $(this).parents('.global-nav').find('.navbar-toggle');
        var $target = $($toggle.data('target'));
          // check if window is small enough so dropdown is created
          $toggle.is(":visible")
              $target.removeClass('in');
              $target.addClass('collapse');
      }
    });
  }
  updateGlobalNavCollapse();
});
