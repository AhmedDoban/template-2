let menu_Icon = document.querySelector(".menue_icon");
let menu = document.querySelector(".links ul");
menu_Icon.addEventListener("click", (ele) => {
  if (menu_Icon.classList.contains("active")) {
    menu_Icon.classList.remove("active");
    menu.style.display = "none";
  } else {
    menu_Icon.classList.add("active");
    menu.style.display = "block";
  }
});
