/*Add active class to menu icon */
let menu_Icon = document.querySelector(".menue_icon");
let menu = document.querySelector(".links ul");
menu_Icon.addEventListener("click", (ele) => {
  if (menu_Icon.classList.contains("active")) {
    menu_Icon.classList.remove("active");
    menu.style.right = "-100%";
  } else {
    menu_Icon.classList.add("active");
    menu.style.right = 0;
  }
});

/*Add active class to menu */
let lis = document.querySelectorAll(".links ul li a");
lis.forEach((ele) => {
  ele.addEventListener("click", (ele) => {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.currentTarget.classList.add("active");
  });
});
/*back to the top btn */
let ScrollToTop = document.querySelector(".back-to-top");
window.onscroll = function () {
  if (window.scrollY >= 150) {
    ScrollToTop.style.cssText = "display:block !important";
  } else {
    ScrollToTop.style.cssText = "display:none";
  }
};
ScrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
