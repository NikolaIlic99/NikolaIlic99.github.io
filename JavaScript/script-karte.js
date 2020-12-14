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
  $("#datepicker").datepicker();

  $("#submitButton").click(function () {
    var ime = $("#ime").val();
    var prezime = $("#prezime").val();
    var email = $("#email").val();
    var datum = $("#datepicker").datepicker("getDate");
    var datumString = $("#datepicker").val();
    var cena = $("#cena").val();
    if (preDanas(datum)) alert("Niste uneli validan datum.");
    else if (ime != "" && prezime != "" && email != "" && datumString != "") {
      processForm(ime, datumString, cena);
    } else alert("Molimo unesite sve podatke.");
  });

  function processForm(ime, datum, cena) {
    var forma = $("#ulaznice-form");
    forma.hide();
    var noviDiv = document.createElement("div");
    noviDiv.className = "text";
  

    var info = document.createTextNode(
      "Poštovani/a " +
        ime +
        ", uspešno ste rezervisali ulaznicu za datum " +
        datum +
        " po ceni od " +
        cena +
        " dinara."
    );
    var hvala = document.createTextNode("Zahvaljujemo se na Vašoj poseti.");
    var potpis = document.createTextNode("Vaš Beo Zoo Vrt.");

    noviDiv.appendChild(info);
    var br = document.createElement("br");
    noviDiv.appendChild(br);

    noviDiv.appendChild(hvala);
    var br = document.createElement("br");
    noviDiv.appendChild(br);

    noviDiv.appendChild(potpis);
    var br = document.createElement("br");
    noviDiv.appendChild(br);

    var footer = document.getElementsByClassName("footer")[0];
    document.body.insertBefore(noviDiv, footer);
  }

  function preDanas(datum) {
    return new Date(datum.toDateString()) < new Date(new Date().toDateString());
  }
});
