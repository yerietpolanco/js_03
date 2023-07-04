color1 = document.getElementById("color1");
color2 = document.getElementById("color2");
color3 = document.getElementById("color3");
color4 = document.getElementById("color4");

color1.addEventListener("click", function (e) {
  cambiarColor(color1);
});
color2.addEventListener("click", function (e) {
  cambiarColor(color2);
});
color3.addEventListener("click", function (e) {
  cambiarColor(color3);
});
color4.addEventListener("click", function (e) {
  cambiarColor(color4);
});

function cambiarColor(el) {
  el.style.backgroundColor = "black";
}

colorGlobal = "";

document.addEventListener("keydown", function (e) {
  el = document.getElementById("key");
  el2 = document.getElementById("key2");

  if (e.key == "a") {
    colorGlobal = "pink";

    el.style.backgroundColor = "purple";
  } else if (e.key == "s") {
    colorGlobal = "orange";

    el.style.backgroundColor = "gray";
  } else if (e.key == "d") {
    colorGlobal = "lightblue";

    el.style.backgroundColor = "pink";
  }

  if (e.key == "q") {
    el2.style.backgroundColor = "lightblue";
  } else if (e.key == "w") {
    el2.style.backgroundColor = "orange";
  } else if (e.key == "e") {
    el2.style.backgroundColor = "brown";
  }

  console.log(colorGlobal);
});
