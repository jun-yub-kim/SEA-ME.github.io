var prev_images = ["img/img24.jpg", "img/img25.jpg", "img/img26.jpg", "img/img27.jpg"];
var images = [];
for (let i = 1; i <= 310; i++) {
  let paddedIndex = ("00" + i).slice(-3);
  images.push(`covid/covid-${paddedIndex}.jpg`);
}
var currentImageIndex = 0;

$(document).ready(function() {
  $("#arrow_all").click(function(){
    currentImageIndex++;
    /*오버플로우 방지 구문*/
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    $("#image1").attr("src", images[currentImageIndex]);    
    $("#image2").attr("src", images[currentImageIndex+1]);
  });

  $("#arrow1").click(function(){
    currentImageIndex--;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    $("#image1").attr("src", images[currentImageIndex]); 
    $("#image2").attr("src", images[currentImageIndex+1]);
  });

  $("#arrow2").click(function(){
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    $("#image2").attr("src", images[currentImageIndex]);
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

