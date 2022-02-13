$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    if (document.documentElement.clientWidth > 800) {
  	  if (scroll > 600) {
  	    $(".main-header").css("background" , "#A0CDEA");
        $(".main-header").css("opacity", "0.8");
  	  }

  	  else{
  		  $(".main-header").css("background" , "transparent");
  	  }
    }
    else{
      $(".main-header").css("background" , "#A0CDEA");
      $(".main-header").css("opacity", "1");
    }
  })
})
