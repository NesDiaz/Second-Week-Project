window.onload = function () {
  // Function to toggle hamburger icon and mobile menu
  const toggleMenu = () => {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    // Toggle classes for menu button and mobile menu
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    // Toggle hamburger icon between burger and X
    if (menu_btn.classList.contains('is-active')) {
      // Change the bars to an X and add fa-xmark class
      menu_btn.innerHTML = '<i class="fas fa-xmark"></i>';
    } else {
      // Change back to the burger icon and remove fa-xmark class
      menu_btn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  };

  // Add click event listener to hamburger icon
  document.querySelector('.hamburger').addEventListener('click', toggleMenu);
};

