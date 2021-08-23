document.querySelectorAll(".dropdown > a").forEach((e) => {
  e.addEventListener("click", (event) => event.preventDefault());
});

document.querySelectorAll(".mega-dropdown > a").forEach((e) => {
  e.addEventListener("click", (event) => event.preventDefault());
});

document
  .querySelector("#mb-menu-toggle")
  .addEventListener("click", () =>
    document.querySelector("#header-wrapper").classList.add("active")
  );

document
  .querySelector("#mb-menu-close")
  .addEventListener("click", () =>
    document.querySelector("#header-wrapper").classList.remove("active")
  );

// JQUERY
$(window).on("load", function (event) {
  $("body").removeClass("loader-page");
  $(".loader").delay(1000).fadeOut("slow");
});
