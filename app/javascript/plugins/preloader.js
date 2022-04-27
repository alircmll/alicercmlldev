// PreLoader
function preLoader(){
  $(document).ready(function() {

    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 3500);
      if (!sessionStorage.isVisited) {
      sessionStorage.isVisited = 'true'
      $("#preloader").delay(2500).fadeOut("slow")
      $(".loader").delay(2500).fadeOut("slow")
    } else {
      $("#preloader").hide()
      $(".loader").hide()
  }

  });
};

export{ preLoader };
