$(document).ready(function () {
  window.onscroll = function () {
    stickyFunction();
  };

  var navbar = document.getElementsByClassName("navbar")[0];

  // Pronalazi offset za navbar
  var offset = navbar.offsetTop;

  // Kada se skrolom predje preko visine navbara, dodaje se sticky klasa
  function stickyFunction() {
    if (window.pageYOffset >= offset) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  $("#navbar-homepage").click(function () {
    location.href = "../Html/index.html";
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
  $("#tabs").tabs();
  $("#accordion").accordion({});

  $(".popup-gallery").magnificPopup({
    //Gallery plugin kod
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
