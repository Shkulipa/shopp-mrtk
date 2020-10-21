
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
  /*smooth scroll */
  if (window.matchMedia("(max-width: 565px)").matches) {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top - 180 + "px" });
      return false;
    });
  }  else {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top - 80 + "px" });
      return false;
    });
  }

  // slider of catigories
  $(".catigories__slider").slick({
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 1250,
    slidesToShow: 5,
    adaptiveHeight: false,
    initialSlide: 4,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrow-slider.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrow-slider.svg"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
    ]
  });

  // slider of intro
  $(".intro__slider").slick({
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrow-slider.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrow-slider.svg"></button>',
  });

  // slider of bestsellers
  $(".bestsellers__slider").slick({
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    adaptiveHeight: false,
    arrows: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrow-slider.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrow-slider.svg"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        },
      },
    ]
  });

  // modal callBack
  document.getElementById('callBack').addEventListener('click', () => {
    $(".overlay, #form").fadeIn("slow");
    $("body").css({"overflow": "hidden"});
  })

  // Modals close
  $("#close-form").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #form").fadeOut("slow");
  });

  $("#close-thanks").on("click", function () {
    $("body").css({ overflow: "auto", "overflow-x": "hidden" });
    $(".overlay, #thanks").fadeOut("slow");
  });

  // Если нажать ESC закроется модальное окно
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $("body").css({ overflow: "auto", "overflow-x": "hidden" });
      $(".overlay, #thanks").fadeOut("slow");
      $(".overlay, #close-form").fadeOut("slow");
    }
  });

  // Random buyer
  const NamesWomen = [
    "Татьяна",
    "Елена",
    "Ольга",
    "Наталья",
    "Валентина",
    "Мария",
    "Галина",
    "Анна",
    "Анна Кудряшова",
    "Светлана",
    "Людмила",
    "Нина",
    "Екатерина",
    "Надежда",
    "Марина",
    "Юлия",
    "Любовь",
    "Любовь",
    "Лидия Фролова",
    "Александра",
    "Вера",
    "Анастасия",
    "Тамара",
    "Лариса",
    "Наталия",
    "Зинаида",
    "Оксана",
    "Оксана Цветкова",
    "Валерия",
    "Полина",
    "Алена",
    "Алина",
  ];

  const NamesMans = [
    "Александр",
    "Алексей",
    "Анатолий",
    "Андрей",
    "Андрей Пономарёв",
    "Антон",
    "Богдан",
    "Вадим",
    "Виталий",
    "Геннадий",
    "Вячеслав",
    "Георгий",
    "Глеб",
    "Давид",
    "Денис",
    "Илья",
    "Константин",
    "Леонид",
    "Сергей",
    "Олег",
    "Никита",
    "Назар",
    "Павел",
    "Петр",
    "Тимур",
    "Роберт",
    "Юрий",
    "Эдуард",
    "Эдуард Зыков",
    "Роман",
    "Руслан",
  ];

  const ProductsForWomen = [
    {
      name: "нервущиеся колготки ElaSlim",
      link: "elaslim.shopping-market.pp.ua",
    },
    {
      name: "щётку для удаления катышек clothes shaver",
      link: "clothes-shaver.shopping-market.pp.ua",
    },
    {
      name: "швабру с ведром easy mop",
      link: "easy-mop.shopping-market.pp.ua",
    },
    {
      name: "сексуальный бюсгальтер неведимку fly bra",
      link: "fly-bra.shopping-market.pp.ua",
    },
    {
      name: "мощный, компактный обогреватель handy-heater",
      link: "handy-heater.shopping-market.pp.ua",
    },
    {
      name: "универсальные палочки от засоров sani-sticks",
      link: "sani-sticks.shopping-market.pp.ua",
    },
    {
      name: "чистящее средство wild tornado",
      link: "wild-tornado.shopping-market.pp.ua",
    },
  ];

  const ProductsForMen = [
    {
      name: "щётку для удаления катышек clothes shaver",
      link: "clothes-shaver.shopping-market.pp.ua",
    },
    {
      name: "мощный, компактный обогреватель handy-heater",
      link: "handy-heater.shopping-market.pp.ua",
    },
    {
      name: "универсальные палочки от засоров sani-sticks",
      link: "sani-sticks.shopping-market.pp.ua",
    },
    {
      name: "чистящее средство wild tornado",
      link: "wild-tornado.shopping-market.pp.ua",
    },
  ];

  function operationWithItem(sex, arrayOfNames, arrayProducts) {
    const date = new Date();
    const Product = arrayProducts[Math.floor(Math.random() * arrayProducts.length)];

    $(`${sex} .buyer__wrapper__content__name`).text(
      `Имя: ${arrayOfNames[Math.floor(Math.random() * arrayOfNames.length)]}`
    );
    $(`${sex} .buyer__wrapper__content__text`).html(
      `Заказал(а) <a class="link" target="_blank" href="https://${Product.link}">${Product.name}</a>`
    );
    $(`${sex} .buyer__wrapper__content__time`).text(
      `Время: ${date.getHours()}:${
        date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()
      }`
    );
    $(`${sex} .buyer__wrapper__content__date`).text(
      `Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    );
    $(`${sex}`).fadeIn("slow");
    setTimeout(() => {
      $(`${sex}`).fadeOut("slow");
    }, 7000);
  }

  function fadeItem() {
    const ManOrWomen = Math.random().toFixed(2);

    if (ManOrWomen >= 0.18) {
      return operationWithItem(".buyer", NamesWomen, ProductsForMen);
    } else {
      return operationWithItem(".buyer", NamesMans, ProductsForWomen);
    }
  }

  // Время через сколько высветится впервые
  let delay = Math.round(Math.random() * 4 + 4) * 1000;
  // let delay = 500;
  function runBuyers() {
    fadeItem();

    // Время через сколько высветится следующая
    delay = Math.round(Math.random() * 30 + 10) * 1000;
    setTimeout(() => {
      runBuyers();
    }, delay);
  }

  setTimeout(() => {
    runBuyers();
  }, delay);

  // Buyers close
  $(".buyer__wrapper__close").on("click", function () {
    $(".buyer").fadeOut("slow");
  });
  
  // Filter
  $("[data-filter]").on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    function filersForEach(el) {
      return $(el).each(function() { 
        cat == $(this).data("filter") ? $(this).addClass("active") : $(this).removeClass("active");
      });
    };

    filersForEach('.footer__content__catalog > a');
    filersForEach('.catigories__slider > .slick-list > .slick-track > a');
    
    if (cat == "Все товары") {
      $(".catalog__items > [data-category]").css({ display: "inline-block" });
    } else {
      
      $(".catalog__items > [data-category]").each(function () {
        let workCat = $(this).data("category");

        if (workCat == cat) {
          $(this).data(["category"]).css({ display: "inline-block" });
        } else {
          $(this).data(["category"]).css({ display: "none" });

          let countUnVisableblock = 0;
          $(".catalog__items > a").each(function (){
            if ( $(this).css('display') == 'none' || $(this).css("visibility") == "hidden" ) {
              countUnVisableblock++;
            }
          });

          if ( countUnVisableblock == $(".catalog__items > a").length ) {
            $(".no-products").css({"display": "flex"});
          } else {
            $(".no-products").css({"display": "none"});
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
  toogleBurger('header-btn');
  toogleBurger('nav-link-1');
  toogleBurger('nav-link-2');
  toogleBurger('nav-link-3');

  // SendMessage
  $("#order-form").submit(function (e) {
    e.preventDefault();
    if (
      $("input[name=phone]").val().length >= 10 &&
      $("input[name=name]").val().length > 0 &&
      $("textarea[name=question]").val().length > 0
    ) {
      $.ajax({
        type: "POST",
        url: "php/telegram.php",
        data: $(this).serialize(),
      }).done(function () {
        //  очищение формы
        $(this).find("input").val("");
        $("#form").fadeOut("slow");
        $("#thanks").fadeIn("slow");
        $("form").trigger("reset");
      });
      return false;
    } else {
      $(".error.name").css({"display" : "none"});
      $(".error.phone").css({"display" : "none"});
      $(".error.question").css({"display" : "none"});

      if ($("input[name=phone]").val().length < 10 && $("input[name=name]").val().length == 0 && $("textarea[name=question]").val().length == 0) {
        // все
        $(".error.name").css({"display" : "block"});
        $(".error.phone").css({"display" : "block"});
        $(".error.question").css({"display" : "block"});
      } else if ($("input[name=phone]").val().length < 10 && $("input[name=name]").val().length > 0 && $("textarea[name=question]").val().length > 0) { 
        // телефон
        $(".error.phone").css({"display" : "block"});
      } else if ($("input[name=phone]").val().length >= 10 && $("input[name=name]").val().length == 0 && $("textarea[name=question]").val().length > 0) {
        // имя
        $(".error.name").css({"display" : "block"});
      } else if ($("input[name=phone]").val().length >= 10 && $("input[name=name]").val().length > 0 && $("textarea[name=question]").val().length == 0) {
        // вопрос
        $(".error.question").css({"display" : "block"});
      } else if ($("input[name=phone]").val().length >= 10 && $("input[name=name]").val().length == 0 && $("textarea[name=question]").val().length == 0) {
        // вопрос и имя
        $(".error.name").css({"display" : "block"});
        $(".error.question").css({"display" : "block"});
      } else if ($("input[name=phone]").val().length < 10 && $("input[name=name]").val().length == 0 && $("textarea[name=question]").val().length > 0) {
        // телефон и имя
        $(".error.name").css({"display" : "block"});
        $(".error.phone").css({"display" : "block"});
      } else if ($("input[name=phone]").val().length < 10 && $("input[name=name]").val().length > 0 && $("textarea[name=question]").val().length == 0) {
        // телефон и вопрос
        $(".error.phone").css({"display" : "block"});
        $(".error.question").css({"display" : "block"});
      }
    }
  });

});
