// NAVBAR DROPDOWN
const menus = document.querySelectorAll(".menu");

menus.forEach(menu => {
  menu.addEventListener("click", e => {
    e.stopPropagation();

    menus.forEach(m => {
      if (m !== menu) {
        m.querySelector(".under_list").classList.remove("show");
      }
    });

    menu.querySelector(".under_list").classList.toggle("show");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".under_list").forEach(list => {
    list.classList.remove("show");
  });
});

// SHOP BY SPORT SCROLL
const container = document.querySelector(".sport-container");
const rightArrow = document.querySelector(".arrow.right");
const leftArrow = document.querySelector(".arrow.left");

rightArrow.addEventListener("click", () => {
  container.scrollLeft += 350;
});

leftArrow.addEventListener("click", () => {
  container.scrollLeft -= 350;
});

