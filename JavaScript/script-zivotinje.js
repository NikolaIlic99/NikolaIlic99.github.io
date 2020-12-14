$(document).ready(function () {
    
  $("#navbar-homepage").click(function () {
    location.href ="../index.html";
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
  $("#navbar-karte").click(function () {
    location.href = "../Html/karte.html";
  });
  $(".kategorija").click(function () {
   var categoryTitle = $("h2", this).html().toLowerCase();
   location.href = "../Html/"+categoryTitle+".html";
  });
  
});