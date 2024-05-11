window.onload = function () {
  const toggleMenu = () => {
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');

    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');

    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  };

  document.querySelector('.hamburger').addEventListener('click', toggleMenu);
};
