// PreLoader
function preLoader(){
  jQuery.noConflict();
  (function($) {
    $(window).on('load', function() { // makes sure the whole site is loaded
      $('.loader').fadeOut(); // will first fade out the loading animation
      $('.container-loader').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
  })(jQuery);

};

export{ preLoader };
