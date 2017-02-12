((window, document, undefined) => {

  var App = {
    init() {
      this.body = document.body;
      this.menuBtn = document.querySelectorAll('[data-menu-btn]')[0];
      this.menu = document.querySelectorAll('[data-menu]')[0];
      this.setEventListeners();
    },
    setEventListeners() {
      this.menuBtn.addEventListener('click', this.toggleMenu.bind(this));
    },
    toggleMenu() {
      this.toggleMenuIcon();
      var menuClasses = this.menu.classList;
      var menuOpen = menuClasses.contains('menu--active');
      menuClasses.toggle('menu--active', !menuOpen);
      this.menu.setAttribute('aria-hidden', menuOpen);
      this.body.classList.toggle('noscroll', !menuOpen);
    },
    toggleMenuIcon() {
      var icon = this.menuBtn.querySelectorAll('.menu-icon-bar')[0];
      var iconActive = icon.classList.contains('menu-icon-bar--active');
      icon.classList.toggle('menu-icon-bar--active', !iconActive);
    },
    ready(fn) {
      if (document.readyState != 'loading'){
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  }

  window.App = App;
  App.ready(() => App.init());

})(window, document);
