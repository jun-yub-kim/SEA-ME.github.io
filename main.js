const openBookButton = document.querySelector("#open-book");
const book = document.querySelector("#book");

openBookButton.addEventListener("click", function () {
  book.classList.remove("closed");
  book.classList.add("open");
});

const closeBookButton = document.querySelector("#close-book");

closeBookButton.addEventListener("click", function () {
  book.classList.remove("open");
  book.classList.add("closed");
});


$(document).ready(function(){
  $("#show-popup").click(function(){
    $("#popup").show();
  });
  $("#hide-popup").click(function(){
    $("#popup").hide();
  });
});