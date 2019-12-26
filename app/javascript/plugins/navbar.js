function navbar() {
  jQuery(function($) {
    $(window).scroll(function(){
        if($(window).scrollTop() >500) {
              $('.navbar').addClass("solid-nav");
        }else {
              $('.navbar').removeClass("solid-nav");
        }
    });
  });
};

export { navbar };
