let menu_Icon = document.querySelector(".menu");
let menu = document.querySelector(".links ul");
menu_Icon.addEventListener("click", (ele) => {
  if (menu_Icon.classList.contains("fa-bars")) {
    menu_Icon.classList.replace("fa-bars", "fa-xmark");
    menu_Icon.style.cssText = "color:red ; font-size:35px";
    menu.style.display = "block";
  } else {
    menu_Icon.classList.replace("fa-xmark", "fa-bars");
    menu_Icon.style.cssText = "color: var(--main-color);";
    menu.style.display = "none";
  }
});

