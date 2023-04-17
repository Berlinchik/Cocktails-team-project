const onHeaderThemeSwitcher = document.querySelectorAll(
  '[data-header-theme-switcher]'
);

const headerTextColorSwitcherLight = document.querySelectorAll(
  '[data-text-color-switcher-light]'
);
const headerTextColorSwitcherDark = document.querySelectorAll(
  '[data-text-color-switcher-dark]'
);
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.navigation__item');
const switcherButton = document.querySelectorAll('.switcher-button');
const switcherDot = document.querySelectorAll('.switcher-dot');
const darkThemeText = document.querySelectorAll('.dark-theme-text');
const hnavigationDropItem = document.querySelectorAll('.navigation-drop__item');
const favoriteItems = document.querySelectorAll('.favorite__items');
const darkThemeGreyText = document.querySelectorAll('dark-theme-grey-text');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenuBtnIcon = document.querySelectorAll('.burger-menu-btn-icon');
const burgerMenuArrowIcon = document.querySelector('.burger-menu-arrow-icon');
const burgerThemeSwitcher = document.querySelector(
  '[data-burger-theme-switcher]'
);
const closeIcon = document.querySelector('.cocktails-modal-close__icon');

function checkTheme() {
  if (localStorage.getItem('ui-theme') === 'dark') {
    headerThemeSwitcher();
  }
}
checkTheme();

onHeaderThemeSwitcher.forEach(item =>
  item.addEventListener('click', onClickHeaderThemeSwitcher)
);

function onClickHeaderThemeSwitcher() {
  const theme = localStorage.getItem('ui-theme');
  if (theme === '' || theme === 'light') {
    localStorage.setItem('ui-theme', 'dark');
    headerThemeSwitcher();
  } else {
    localStorage.setItem('ui-theme', 'light');
    headerThemeSwitcher();
  }
}

function headerThemeSwitcher() {
  switcherDot.forEach(item => item.classList.toggle('switcher-dot-left'));

  headerTextColorSwitcherLight.forEach(item =>
    item.classList.toggle('burger-switcher-light-revers')
  );
  body.classList.toggle('dark-size');
  switcherButton.forEach(item => item.classList.toggle('switcher-button-dark'));
  favoriteItems.forEach(item => item.classList.toggle('favorite__items-dark'));
  headerTextColorSwitcherDark.forEach(item =>
    item.classList.toggle('header-switcher-dark-revers')
  );
  switcherDot.forEach(item => item.classList.toggle('switcher-dot-dark'));
  navItems.forEach(item => item.classList.toggle('theme'));
  hnavigationDropItem.forEach(item =>
    item.classList.toggle('navigation-drop__item-dark')
  );
  darkThemeText.forEach(item => item.classList.toggle('dark-theme'));
  darkThemeGreyText.forEach(item => item.classList.toggle('dark-theme-grey'));
  burgerMenuBtnIcon.forEach(item =>
    item.classList.toggle('burger-menu-btn-icon-dark')
  );
  mobileMenu.classList.toggle('dark-size');
  if (closeIcon) closeIcon.classList.toggle('dark-theme-close');
}
