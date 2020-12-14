$(document).ready(function () {

      $("#tabs").tabs();
      $("#accordion").accordion({});
    
      $("#navbar-homepage").click(function () {
        location.href = "./index.html";
      });
      $("#navbar-galerija").click(function () {
        location.href = "./Html/galerija.html";
      });
      $("#navbar-zivotinje").click(function () {
        location.href = "./Html/zivotinje.html";
      });
      $("#navbar-karte").click(function () {
        location.href = "./Html/karte.html";
      });
});