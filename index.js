window.onload = function () {
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add('is-scrolling');
    } else {
      document.querySelector("header").classList.remove('is-scrolling');
    }
  });

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    // Toggle hamburger icon between burger and X
    if (menu_btn.classList.contains('is-active')) {
      // Change the bars to an X
      menu_btn.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
    } else {
      // Change back to the burger icon
      menu_btn.innerHTML = '<div class="bar"></div>';
    }
  });
}

const hamburger = document.querySelector(".hamburger");
const NavLink__Container = document.querySelector(".NavLink__Container");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("is-active");
    NavLink__Container.classList.toggle("is-active");
  })


