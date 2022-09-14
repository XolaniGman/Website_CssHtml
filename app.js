const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

const mobileMenu = () => {
      menu.classlist.toggle('is-active');
      menuLinks.classlist.toggle('active');
};

menu.addEventListener('click', mobileMenu);

function openNav() {
      document.getElementById("mobile-menu").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mobile-menu").style.width = "0";
    }
    