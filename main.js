var images = ["img24.jpg", "img25.jpg", "img26.jpg", "img27.jpg"];
var currentImageIndex = 0;

$(document).ready(function() {
  $("#arrow").click(function(){
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    $("#image").attr("src", images[currentImageIndex]);
    // hide popup1 and show popup2
  });

  $("#hide-popup_all").click(function(){
    $("#popup1").hide();
    $("#popup2").hide();
  });

  $("#show-popup_all").click(function(){
    $("#popup1").show();
    $("#popup2").show();
  });
});

