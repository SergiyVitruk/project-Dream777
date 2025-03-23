(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu__link");
    const menuCloseButton = document.querySelector("[data-menu-close]");

    function closeMenu() {
        mobileMenu.classList.remove("is-open"); 
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });
});