$(document).ready(function () {
  function updateGlobalNavCollapse(){
    $(".global-nav li a, .dropdown-menu").on("click", function(event) {
      // only collapse if it's not a dropdown
      if(!$(this).parent().hasClass('dropdown')){
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

  /* navigation submenus */

  $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      // Avoid following the href location when clicking
      event.preventDefault();
      // Avoid having the menu to close when clicking
      event.stopPropagation();
      // If a menu is already open we close it
      if($(this).parent().hasClass('open')){
        $(this).parent().removeClass('open');
      }else{
        // opening the one you clicked on
        $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();

        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
            var newpos = - menu.width();
        } else {
            var newpos = $(this).parent().width();
        }
        var newheight = window.innerHeight - menupos.top - 30;
        menu.css({ left:newpos, 'max-height':newheight });
      }
  });
});

(function(window, angular, undefined) {'use strict';
  if(typeof angular != 'undefined') {
    angular.module('pollen.navbar', ['ng'])
    .controller('NavBarCtrl', ['$scope', function($scope){
      $scope.isCollapsed = true;
    }]);
  }
})(window, window.angular);
