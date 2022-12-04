const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#seachIcon"),
  seachBox = document.querySelector(".search-box"),
  hScroll = document.querySelector(".nav__bars-btn"),
  body = document.querySelector("body"),
  overFlow = document.querySelector(".nav__overlay"),
  closeIcon = document.querySelector("#closeIcon"),
  closeBox = document.querySelector(".closeIcon"),
  overlay = document.querySelector(".overlay"),
  brand = document.querySelector(".brand"),
  main = document.querySelector(".main"),
  searchSm = document.querySelector(".search-sm");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  if (nav.classList.contains("openSearch")) {
    searchIcon.classList.replace("bi-search", "bi-x-lg");
  } else {
    searchIcon.classList.replace("bi-x-lg", "bi-search");
  }
});

closeIcon.addEventListener("click", () => {
  overlay.classList.toggle("openSearch");
  if (brand.classList.contains("closeIcon")) {
    return closeIcon.classList.replace("bi-search", "bi-x-lg");
  }
  closeIcon.classList.replace("bi-x-lg", "bi-search");
});

hScroll.addEventListener("click", () => {
  if (hScroll.classList.contains("toggleClose")) {
    hScroll.classList.replace("toggleClose", "toggleOpen");
    body.style.overflowY = "hidden";

    (deFault = document.querySelector(".nav__mobile-close")),
      deFault.addEventListener("click", () => {
        body.style.overflowY = "auto";
      });
  } else {
    hScroll.classList.replace("toggleOpen", "toggleClose");
    body.style.overflowY = "hidden";
  }
});

searchSm.addEventListener("click", () => {
  openSearch = document.querySelector(".openSearch");
  if (openSearch) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "auto";
  }
});

main.addEventListener("click", () => {
  console.log("a");
  if (body.style.overflowY == "hidden") {
    body.style.overflowY == "auto";
  }
});
