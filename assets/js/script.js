function pintar(ele, color = "green") {
  ele.style.backgroundColor = color;
}

ele = document.getElementById("ele1");
ele.addEventListener("click", function(e) {
    pintar(ele, "yellow");
});
