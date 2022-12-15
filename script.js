var pinkmenu = document.querySelector(".pinkmenu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

pinkmenu.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  conatainer.classList.toggle("large-container");
};
