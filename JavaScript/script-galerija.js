$(document).ready(function () {
  
  $("#navbar-homepage").click(function () {
    location.href = "../index.html";
  });
  $("#navbar-galerija").click(function () {
    location.href = "../Html/galerija.html";
  });
  $("#navbar-zivotinje").click(function () {
    location.href = "../Html/zivotinje.html";
  });
  $("#navbar-karte").click(function () {
    location.href = "../Html/karte.html";
  });
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>Beo Zoo Vrt</small>";
      },
    },
  });
});
