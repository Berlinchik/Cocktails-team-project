import { createPagination } from './pagination';

const svg = require('../images/icons.svg');

const classToggle = e => {
  const savedColor = localStorage.getItem('ui-theme');
  const names = document.querySelectorAll('.cocktail-item__name');
  names.forEach(el => {
    if (savedColor === 'light' || savedColor === null) {
      el.classList.remove('name-dark');
      el.classList.add('name-light');
    }
    if (savedColor === 'dark') {
      el.classList.remove('name-light');
      el.classList.add('name-dark');
    }
  });
};
const classToggleInRender = e => {
  const savedColor = localStorage.getItem('ui-theme');
  const names = document.querySelectorAll('.cocktail-item__name');
  names.forEach(el => {
    if (savedColor === 'light' || savedColor === null) {
      el.classList.remove('name-light');
      el.classList.add('name-dark');
    }
    if (savedColor === 'dark') {
      el.classList.remove('name-dark');
      el.classList.add('name-light');
    }
  });
};

const switcher = document.querySelectorAll('.switcher-button');
switcher.forEach(item => item.addEventListener('click', classToggle));

export function renderCocktail(drink) {
  createPagination();
  const drinks = drink.drinks;
  const localFavorite = JSON.parse(localStorage.getItem('favoriteList'));
  let favoriteCocktail = localFavorite.favoriteCocktails.map(el => {
    return el.idDrink;
  });
  setTimeout(classToggleInRender, 0);
  return drinks.map(drinkObj => {
    if (favoriteCocktail.includes(Number(drinkObj.idDrink))) {
      return `<li class="cocktail-list__cocktail-item">
                        <img class="cocktail-item_img" src="${drinkObj.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">
                        <p class="cocktail-item__name }">${drinkObj.strDrink}</p>
                        <div class="button-wrap" data-id-drink='${drinkObj.idDrink}'>
                            <button type="button" class="cocktail-item__learn-more">Learn more</button>
                            <button type="button" class="cocktail-item__remove">Remove
                                <svg class="svg" width="21" height="19">
                                    <use href="${svg}#icon-heart-filled"></use>
                                </svg>
                            </button>
                        </div>
                    </li>`;
    } else {
      return `<li class="cocktail-list__cocktail-item">
                        <img class="cocktail-item_img" src="${drinkObj.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">
                        <p class="cocktail-item__name ">${drinkObj.strDrink}</p>
                        <div class="button-wrap" data-id-drink='${drinkObj.idDrink}'>
                            <button type="button" class="cocktail-item__learn-more">Learn more</button>
                            <button type="button" class="cocktail-item__add-to">Add to
                                <svg class="svg" width="21" height="19">
                                    <use href="${svg}#icon-heart-empty"></use>
                                </svg>
                            </button>
                        </div>
                    </li>`;
    }
  });
}
