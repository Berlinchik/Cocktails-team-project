!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},t.parcelRequired7c6=a),a.register("iE7OH",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},i=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=i[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=n),n}})),a("iE7OH").register(JSON.parse('{"kjFJ1":"favorite-ingredients.82c7a1e5.js","410VS":"icons.0ad5d55e.svg","3g20U":"favorite-ingredients.661dd530.js"}'));var o;o=a("aNJCr").getBundleURL("kjFJ1")+a("iE7OH").resolve("410VS");var c=a("6alNL");a("2Z7mb"),a("i8Q71");var d=a("jcFG7");document.querySelector(".card-list").addEventListener("click",c.openIngredientsModal),document.querySelectorAll(".switcher-button").forEach((function(e){return e.addEventListener("click",(function(e){var n=localStorage.getItem("ui-theme"),t=document.querySelectorAll(".card-item__name"),r=document.querySelectorAll(".card-item__details");t.forEach((function(e){"light"!==n&&null!==n||(e.classList.remove("name-light"),e.classList.add("name-dark")),"dark"===n&&(e.classList.remove("name-dark"),e.classList.add("name-light"))})),r.forEach((function(e){"light"!==n&&null!==n||(e.classList.remove("name-light"),e.classList.add("name-dark")),"dark"===n&&(e.classList.remove("name-dark"),e.classList.add("name-light"))}))}))}));var s=function(e){var t,r=e.nameIngredient,i=e.typeIngredient,a=e.idIngredient,c=localStorage.getItem("ui-theme");return"light"!==c&&null!==c||(t="name-dark"),"dark"===c&&(t="name-light"),'\n    <div class="cocktail-list__cocktail-item">\n      <div class=\'card-item__info\'>\n        <p class="card-item__name '.concat(t,'">').concat(r,'</p>\n        <p class="card-item__details ').concat(t,'">').concat(i,'</p>\n        <div data-ingredient-name="').concat(r,'" data-ingredient-id="').concat(a,'" class="button-wrap">\n          <button type="button" class="cocktail-item__learn-more js-ingredients-modal">Learn more</button>\n          <button type="button" class="cocktail-item__remove">Remove\n            <svg class="svg" width="21" height="19">\n              <use href="').concat(n(o),'#icon-heart-filled"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n  ')};document.addEventListener("DOMContentLoaded",(function(){(0,d.resetPagination)();var e=document.querySelector(".ingredients__js");e&&function(e){var n=JSON.parse(localStorage.getItem("favoriteList"));if(null!==n&&0!==n.favoriteIngrediants.length&&1!==n.favoriteIngrediants.length){var t=n.favoriteIngrediants,r={drinks:[]};t.forEach((function(e){0!==e.idIngredient&&r.drinks.push(e)})),(0,d.generatePagination)(r);var i=(0,d.sliceArray)(r.drinks),a="";(0,d.createPagination)(),i.drinks.forEach((function(e){0!==e.idIngredient&&(a+=s(e))})),e.innerHTML=a}else document.querySelector(".not-found").innerText="You haven't added any favorite ingredients yet"}(e)})),document.querySelector(".header-input").addEventListener("input",(function(e){document.querySelector(".pagination").innerHTML="",(0,d.resetPagination)(),document.querySelector(".not-found").innerText="";var n=JSON.parse(localStorage.getItem("favoriteList")),t=new RegExp(e.target.value),r="",i={drinks:[]};n.favoriteIngrediants.forEach((function(e){0!=e.idIngredient&&t.test(e.nameIngredient.toLowerCase())&&i.drinks.push(e)})),(0,d.generatePagination)(i);var a=(0,d.sliceArray)(i.drinks);(0,d.createPagination)(),a.drinks.forEach((function(e){0!==e.idIngredient&&(r+=s(e))})),document.querySelector(".ingredients__js").innerHTML=r,0===r.length&&(document.querySelector(".not-found").innerText="Not found ingredient in your favorite")}))}();
//# sourceMappingURL=favorite-ingredients.82c7a1e5.js.map