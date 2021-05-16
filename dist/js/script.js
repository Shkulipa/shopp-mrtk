// Global variables
// cart
let cart = [];

// Переобразуем массив "catalog" в Ассоциативный массив
let catalogAssArr = {};
function catalogAssArrFunction() {
  let catalogAssArr = {};
  catalog.forEach(function (e) {
    catalogAssArr[e.id] = e;
  });
  return catalogAssArr;
}
catalogAssArrFunction();

let outCatalog = '';
for(let key in catalog) {
  outCatalog += `<div  class="catalog__items__item" target="_blank" data-category=${catalog[key].dataCategory} data-idDescr=${catalog[key].dataId}>`;
  outCatalog += `<div target="_blank" class="catalog__items__item__img" data-idDescr=${catalog[key].dataId}>`;
  outCatalog +=
    `<img src="${catalog[key].imgJpgPrew}" alt="img" data-idDescr=${catalog[key].dataId}>`;
  outCatalog +=
    `<div class="catalog__items__item__img__tags" data-idDescr=${catalog[key].dataId}>` +
    `${
      catalog[key].sale === true
        ? `<div class="catalog__items__item__img__tags__block sale" data-idDescr=${catalog[key].dataId}>#Распродажа</div><br />`
        : ''
    }` +
    `${
      catalog[key].new === true
        ? `<div class="catalog__items__item__img__tags__block new" data-idDescr=${catalog[key].dataId}>#Новинка</div><br />`
        : ''
    }` +
    `${
      catalog[key].hit === true
        ? `<div class="catalog__items__item__img__tags__block hit" data-idDescr=${catalog[key].dataId}>#Хит</div><br />`
        : ''
    }` +
    `${
      catalog[key].discount === true
        ? `<div class="catalog__items__item__img__tags__block discount" data-idDescr=${catalog[key].dataId}>-${catalog[key].discountValue}%</div><br />`
        : ''
    }` +
    `${
      catalog[key].specialOffer === true
        ? `<div class="catalog__items__item__img__tags__block special-offer" data-idDescr=${catalog[key].dataId}>` + catalog[key].specialOfferValue + '</div><br />'
        : ''
    }</div></div>`; 
    outCatalog +=
    `<div class="catalog__items__item__content" data-idDescr=${catalog[key].dataId}>` +
    `<div class="catalog__items__item__content__title" data-idDescr=${catalog[key].dataId}>${catalog[key].title}</div>`;
    outCatalog += `<button id="add-to-cart" class="catalog__items__item__content__cart" data-id=${catalog[key].dataId}>` + 
                  `<img id="add-to-cart" src="icons/shopping-cart.svg" alt="img" data-id=${catalog[key].dataId}>` +
                  `<p id="add-to-cart" class="catalog__items__item__content__cart__text" data-id=${catalog[key].dataId}>Добавить в корзину</p></button></div></div>`;
};
document.getElementById('catalog__items').innerHTML = outCatalog;


$(".catalog__items > .catalog__items__item")
  .clone()
  .unwrap()
  .appendTo($(".bestsellers__slider").empty());
$(".bestsellers__slider > .catalog__items__item").each(function () {
  if ($(this).find(".hit").length == 0) {
    $(this).remove();
  }
});
  
$(document).ready(function () {
  // проверяем какой урл и высвечиваем модульное окно
  if(location.hash.includes('#product/title=') || location.hash.includes('product/title=')) {
    const stringUrlArr = location.hash.split('=');
    const findelFromCatalog = catalog.find(e => e.id === stringUrlArr[1]);

    location.hash = "product/title=" + findelFromCatalog.id;

    let infoProductSliderPhotos = '';
    for (let i = 0; i < findelFromCatalog.photos.length; i++) {
      infoProductSliderPhotos +=  `<div><img src="img/${findelFromCatalog.photos[i]}" alt="img"></div>`;
    };


    document.getElementById("modal-info__content").innerHTML = `<div class="modal-info__descr-main">
      <div class="modal-info__descr-main__images-slider">
        <div class="info-product-slider-for">
          ${infoProductSliderPhotos}
        </div>
        <div class="info-product-slider-nav">
          ${infoProductSliderPhotos}
        </div>
      </div>
      <div class="modal-info__descr-main__descr">
        <div class="modal-info__descr-main__descr__title">${findelFromCatalog.title}</div>
        <div class="modal-info__descr-main__descr__old-price">Цена без скидки: <span>${Math.round((findelFromCatalog.price * 100) / findelFromCatalog.discountValue)} грн.</span></div>
        <div class="modal-info__descr-main__descr__new-price">Цена со скидкой: <span>${findelFromCatalog.price} грн.</span></div>
        ${findelFromCatalog.link ? `<div class="modal-info__descr-main__descr__website">Сайт с подробной информацией: <a href="${findelFromCatalog.link}" target="_blank">${findelFromCatalog.link}</a></div>` : ''}
        <div class="modal-info__descr-main__descr__descr"><u>Описание:</u> ${findelFromCatalog.descr}</div>

        <button class="modal-info__btn" data-id=${findelFromCatalog.dataId}>
          <img id="add-to-cart" src="${cart.findIndex(e => findelFromCatalog.dataId === e.dataId) > -1 ? "icons/shopping-cart-added.svg" : "icons/shopping-cart.svg"}" alt="img" data-id=${findelFromCatalog.dataId}>
          <p class="modal-info__btn__text" data-id=${findelFromCatalog.dataId}>${cart.findIndex(e => findelFromCatalog.dataId === e.dataId) > -1 ? 'Удалить с корзины' : 'Добавить в корзину'}</p>
        </button>
      </div>
    </div>`;

    // slider for info about product
    $('.info-product-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.info-product-slider-nav'
    });
    $('.info-product-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.info-product-slider-for',
      arrows: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

    $("body").css({ "overflow": "hidden"});
    $('.overlay, #modal-info').fadeIn();
    $('#modal-info > #close-modal-info').fadeIn(); 
  }


  /*smooth scroll */
  if (window.matchMedia("(max-width: 565px)").matches) {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top - 180 + "px",
      });
      return false;
    });
  } else {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top - 80 + "px" });
      return false;
    });
  }

  // Filter
  $("[data-filter]").on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    function filersForEach(el) {
      return $(el).each(function () {
        cat == $(this).data("filter")
          ? $(this).addClass("active")
          : $(this).removeClass("active");
      });
    }

    filersForEach(".footer__content__catalog > a");
    filersForEach(".catigories__slider > .slick-list > .slick-track > a");

    if (cat == "Все-товары") {
      $(".catalog__items > [data-category]").css({ display: "inline-block" });
      $(".no-products").css({ display: "none" });
    } else {
      $(".catalog__items > [data-category]").each(function () {
        let workCat = $(this).data("category");

        if (workCat == cat) {
          $(this).data(["category"]).css({ display: "inline-block" });
          $(".no-products").css({ display: "none" });
        } else {
          $(this).data(["category"]).css({ display: "none" });

          let countUnVisableblock = 0;
          $(".catalog__items > .catalog__items__item").each(function () {
            if (
              $(this).css("display") == "none" ||
              $(this).css("visibility") == "hidden"
            ) {
              countUnVisableblock++;
            }
          });

          if (countUnVisableblock == $(".catalog__items > .catalog__items__item").length) {
            $(".no-products").css({ display: "flex" });
          } else {
            $(".no-products").css({ display: "none" });
          }
        }
      });
    }
  });

  // burger
  function toogleBurger(id) {
    const btn = document.querySelector(".header-btn");
    const nav = document.querySelector(".burger-nav");

    document.getElementById(id).addEventListener("click", function () {
      btn.classList.toggle("open");
      nav.classList.toggle("open");
    });
  }
  toogleBurger("header-btn");
  toogleBurger("nav-link-1");
  toogleBurger("nav-link-2");
  toogleBurger("nav-link-3");


  // modal callBack
  document.getElementById("callBack").addEventListener("click", () => {
    $(".overlay, #form").fadeIn("slow");
    $("body").css({ overflow: "hidden" });
  });

  // Modals close
  $("#close-form").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #form").fadeOut("slow");
    location.hash = "";
  });

  $("#close-adress-form").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #modal-adress-forms").fadeOut("slow");
    location.hash = "";
  });

  $("#close-thanks").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #thanks").fadeOut("slow");
    location.hash = "";
  });

  $("#close-cart").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #cart").fadeOut("slow");
    location.hash = "";
  });

  // отслеживание скрола
  window.addEventListener('scroll', function() {
    let pageYOffset = window.pageYOffset;
    window.localStorage.setItem('scroll', pageYOffset);
  });

  $("#close-modal-info").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #modal-info").fadeOut("slow");

    location.hash = "";

    let getScroll = window.localStorage.getItem('scroll');
    window.scroll(0, getScroll);
  });
  

  // Если нажать ESC закроется модальное окно
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $("body").css({ overflow: "auto", "overflow-x": "hidden" });
      $(".overlay, #thanks").fadeOut("slow");
      $(".overlay, #modal-adress-forms").fadeOut("slow");
      $(".overlay, #form").fadeOut("slow");
      $(".overlay, #cart").fadeOut("slow");
      $(".overlay, #modal-info").fadeOut("slow");
    }

    location.hash = "";
  });


  // Переобразуем массив "cart" (который в верху) в Ассоциативный массив
  function cartAssArrFunction() {
    let cartAssArr = {};
    cart.forEach(function (e) {
      cartAssArr[e.dataId] = e;
    });


    let commonPrice = 0;
    cart.forEach(e => commonPrice = commonPrice + e.totalPrice);

    let stringCartForInput = '';
    for (let i = 0; i < cart.length; i++) {
      stringCartForInput =  stringCartForInput + '     ' + cart[i].namedProduct + ' - ' + cart[i].count + ' шт.  (' + cart[i].totalPrice + ' UAH)%0A';
      // где %0A - перенос строки в телеграмме
    };

    stringCartForInput  =  stringCartForInput + '<b>Общая сумма:</b> ' + commonPrice + ' UAH';
    
    let outCart = '';
    if(cart.length == 0) {
      $('.modal-cart__items__cart-empty').css({ "display": "flex" });
      $('.modal-cart__items__to-order-form').css({ "display": "none" });
      $('.modal-cart__items__total-price').css({ "display": "none" });
    } else {
      $('.modal-cart__items__cart-empty').css({ "display": "none" });
      $('.modal-cart__items__total-price').css({ "display": "block" });
      $('.modal-cart__items__to-order-form').css({ "display": "block" });
      for(let key in cartAssArr) {
        outCart += `<div class="modal-cart__items__products__product"><div class="modal-cart__items__products__product__img-and-title">`;
        outCart += `<img class="modal-cart__items__products__product__img-and-title__img" src=${cartAssArr[key].imgJpgPrew} alt="img">`;
        outCart += `<div class="modal-cart__items__products__product__img-and-title__title">${cartAssArr[key].title}</div></div>`;
        outCart += `<div class="modal-cart__items__products__product__counts-and-price">`;
        outCart += `<button class="modal-cart__items__products__product__counts-and-price__delete" data-delete=${cartAssArr[key].dataId}><img src="icons/garbage-can.svg" alt="img" data-delete=${cartAssArr[key].dataId}></button>`;
        
        outCart += `<div class="modal-cart__items__products__product__counts-and-price__counts">`;
        outCart += `<button class="modal-cart__items__products__product__counts-and-price__counts__button minus" data-counts=${cartAssArr[key].dataId}><img class="minus" src="icons/minus.svg" alt="img" data-counts=${cartAssArr[key].dataId}></button>`;
        outCart += `<div class="modal-cart__items__products__product__counts-and-price__counts__input">${cartAssArr[key].count}</div>`;
        outCart += `<button class="modal-cart__items__products__product__counts-and-price__counts__button plus" data-counts=${cartAssArr[key].dataId}><img class="plus" src="icons/add.svg" alt="img" data-counts=${cartAssArr[key].dataId}></button></div>`;
        outCart += `<div class="modal-cart__items__products__product__counts-and-price__price">${cartAssArr[key].totalPrice} &#8372;</div></div></div>`;
      }
    }



    $('#products').val(stringCartForInput);
    
    $('#products-counts-in-cart, #products-counts-in-cart-mobile').text(cart.length);

    // меняем содержимое для div в корзине
    document.getElementById('cart-products').innerHTML = outCart;
    return;
  }
  cartAssArrFunction();

  const totalModalPrice = () => {
    let totalPrice = 0;
    cart.forEach(e => totalPrice = totalPrice + (e.count * e.price));

    $("#total-price").text(totalPrice);
  };

  $("#nav-cart, #nav-cart-mobile").click(function() {
    $("body").css({ overflow: "hidden" });
    $(".overlay, #cart").fadeIn("slow");

    let totalPrice = 0;
    cart.forEach(e => totalPrice = totalPrice + (e.count * e.price));

    $("#total-price").text(totalPrice);
  });

  $("#to-form-window").click(function() {
    $("#cart").fadeOut();
    $("#modal-adress-forms").fadeIn();
  });

  document.onclick = (el) => {
    if (el.target.hasAttribute("data-id")) {
      if (
        cart.findIndex((e) => String(e.dataId) == String(el.target.dataset.id)) == -1 
      ) {
        
        // Добавление в карзину
        cart.push(catalog.find((e) => e.dataId == el.target.dataset.id));

        $(`[data-id="${el.target.dataset.id}"] img`).attr(
          "src",
          "icons/shopping-cart-added.svg"
        );
        $(
          `.catalog__items__item__content__cart__text[data-id="${el.target.dataset.id}"], .modal-info__btn__text[data-id="${el.target.dataset.id}"]`
        ).text("Удалить с корзины");
        cartAssArrFunction();   

        return true;
      } else if (
        cart.findIndex((e) => String(e.dataId) == String(el.target.dataset.id)) > -1 
      ) {
        // Удаление с корзины
        const findIndexInChooseItems = cart.findIndex(
          (e) => e.dataId == el.target.dataset.id
        );
        cart = [
          ...cart.slice(0, findIndexInChooseItems),
          ...cart.slice(findIndexInChooseItems + 1),
        ];

        $(`[data-id="${el.target.dataset.id}"] img`).attr(
          "src",
          "icons/shopping-cart.svg"
        );
        $(
          `.catalog__items__item__content__cart__text[data-id="${el.target.dataset.id}"], .modal-info__btn__text[data-id="${el.target.dataset.id}"]`
        ).text("Добавить в корзину");
        cartAssArrFunction();

        return true;
      } else {
        return false;
      }
    } else if (el.target.classList.contains('plus')) {
      const findIndexInChooseItems = cart.findIndex( item => item.dataId === el.target.dataset.counts);
      if (findIndexInChooseItems >= 0) {
          
          let Elem = cart[findIndexInChooseItems];
          let newElem = {
              ...Elem,
              count: ++Elem.count,
              totalPrice: Elem.price * Elem.count
          }

          cart = [
            ...cart.slice(0, findIndexInChooseItems),
            newElem,
            ...cart.slice(findIndexInChooseItems + 1),
          ];


          totalModalPrice();
          cartAssArrFunction();
      };
    } else if (el.target.classList.contains('minus')) {
      const findIndexInChooseItems = cart.findIndex( item => item.dataId === el.target.dataset.counts);
      if (findIndexInChooseItems >= 0) {
          
          let Elem = cart[findIndexInChooseItems];

          if (Elem.count > 0) {
            let newElem = {
              ...Elem,
              count: --Elem.count,
              totalPrice: Elem.price * Elem.count,
            };

            cart = [
              ...cart.slice(0, findIndexInChooseItems),
              newElem,
              ...cart.slice(findIndexInChooseItems + 1),
            ];

            totalModalPrice();
            cartAssArrFunction();
          }
        }
    } else if (el.target.hasAttribute("data-delete")) {
      const findIndexInItemsCard = cart.findIndex( item => item.dataId == el.target.dataset.delete);
      cart = [
        ...cart.slice(0, findIndexInItemsCard),
        ...cart.slice(findIndexInItemsCard + 1)
      ];
      $(`[data-id="${el.target.dataset.delete}"] img`).attr(
        "src",
        "icons/shopping-cart.svg"
      );
      $(
        `.catalog__items__item__content__cart__text[data-id="${el.target.dataset.delete}"]`
      ).text("Добавить в корзину");
      totalModalPrice();
    } else if(el.target.hasAttribute("data-idDescr")){
      // Клик по товару
      
      // window.location.href = `product/id=${el.target.dataset.iddescr}`;

      // Проверка по какому id кликнули
      // console.log(el.target.dataset.iddescr); 
      

      const findelFromCatalog = catalog.find( element => element.dataId === el.target.dataset.iddescr);

      location.hash = "product/title=" + findelFromCatalog.id;
      
      let infoProductSliderPhotos = '';

      for (let i = 0; i < findelFromCatalog.photos.length; i++) {
        infoProductSliderPhotos +=  `<div><img src="img/${findelFromCatalog.photos[i]}" alt="img"></div>`;
      };

      document.getElementById("modal-info__content").innerHTML = `<div class="modal-info__descr-main">
        <div class="modal-info__descr-main__images-slider">
          <div class="info-product-slider-for">
            ${infoProductSliderPhotos}
          </div>
          <div class="info-product-slider-nav">
            ${infoProductSliderPhotos}
          </div>
        </div>
        <div class="modal-info__descr-main__descr">
          <div class="modal-info__descr-main__descr__title">${findelFromCatalog.title}</div>
          <div class="modal-info__descr-main__descr__old-price">Цена без скидки: <span>${Math.round((findelFromCatalog.price * 100) / findelFromCatalog.discountValue)} грн.</span></div>
          <div class="modal-info__descr-main__descr__new-price">Цена со скидкой: <span>${findelFromCatalog.price} грн.</span></div>
          ${findelFromCatalog.link ? `<div class="modal-info__descr-main__descr__website">Сайт с подробной информацией: <a href="${findelFromCatalog.link}" target="_blank">${findelFromCatalog.link}</a></div>` : ''}
          <div class="modal-info__descr-main__descr__descr"><u>Описание:</u> ${findelFromCatalog.descr}</div>

          <button class="modal-info__btn" data-id=${findelFromCatalog.dataId}>
            <img id="add-to-cart" src="${cart.findIndex(e => findelFromCatalog.dataId === e.dataId) > -1 ? "icons/shopping-cart-added.svg" : "icons/shopping-cart.svg"}" alt="img" data-id=${findelFromCatalog.dataId}>
            <p class="modal-info__btn__text" data-id=${findelFromCatalog.dataId}>${cart.findIndex(e => findelFromCatalog.dataId === e.dataId) > -1 ? 'Удалить с корзины' : 'Добавить в корзину'}</p>
          </button>
        </div>
      </div>`;



      // slider for info about product
      $('.info-product-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.info-product-slider-nav'
      });
      $('.info-product-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.info-product-slider-for',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

      $("body").css({ "overflow": "hidden"});
      $('.overlay, #modal-info').fadeIn();
      $('#modal-info > #close-modal-info').fadeIn();  
    }

    cartAssArrFunction();
  };
});

