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

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');
  const menuCloseButton = document.querySelector('[data-menu-close]');

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.hidden-header');
  const logo = document.querySelector('.logo');
  const links = document.querySelectorAll('.header-btn-link');
  const icons = document.querySelectorAll('.icon-header');

  // 1. Показать хедер
  setTimeout(() => {
    header.classList.add('watch-header');
  }, 100);

  // 2. Показать лого после появления хедера
  setTimeout(() => {
    logo.classList.add('watch-logo');
  }, 400); // Ждём 300ms после появления хедера

  // 3. Последовательное появление кнопок
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('show-link');
    }, 700 + index * 200); // Каждая кнопка появляется через 200ms после предыдущей
  });

  // 4. Последовательное появление иконок
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add('show-svg');
    }, 1300 + index * 200); // Каждая иконка появляется через 200ms после предыдущей
  });
});
