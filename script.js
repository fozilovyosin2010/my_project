function myIcon() {
  let close = document.getElementById("close");
  let icon = document.getElementById("icon");
  let navbar = document.getElementById("navbar");
  let navbar_f = (document.getElementById("navbar").style.display = "flex");
  if (navbar == document.getElementById("navbar")) {
    onclick = document.getElementById("navbar").style.display = "flex";
    onclick = document.getElementById("icon").style.display = "none";
    onclick = document.getElementById("close").style.display = "block";
  }
}
function myClose() {
  close = document.getElementById("close");
  if (close == document.getElementById("close")) {
    onclick = document.getElementById("navbar").style.display = "none";
    onclick = document.getElementById("icon").style.display = "block";
    onclick = document.getElementById("close").style.display = "none";
  }
}
