let openSide = document
  .querySelector("#openSidebar")
  .addEventListener("click", function() {
    document.querySelector("#sideNavBar").style.width = "100%";
    document.querySelector("#sideNavBar").style.transition = "300ms ease-out";
  });
let closeSide = document
  .querySelector("#closeSidebar")
  .addEventListener("click", function() {
    document.querySelector("#sideNavBar").style.width = "0";
  });

$(function() {
  $(".clients").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    smartSpeed: 1000
  });
});
