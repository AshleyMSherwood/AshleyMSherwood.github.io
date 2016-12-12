jQuery(document).ready(function($) {
	  // expand mobile menu
    $('.ham_menu').click(function(){
      $('.responsive-menu').toggleClass('expand')
    })
});
$(function () {
  // close menu on clicking any link
    $('.contact-link').click(function (e) {
        $('.responsive-menu').removeClass('expand');
    });
});