jQuery(document).ready(function($) {
  // on hover display text over projects image
  $(".projects-preview").hover(
    function() {
      $(this).prev().addClass("hover-show-description");
    })
  $(".projects-description-close").click(
    function() {
      $(this).prev().removeClass("hover-show-description");
    })
});