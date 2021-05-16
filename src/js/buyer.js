$(document).ready(function () {
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
      name: "Летающую фею",
      link: "fairy.shopping-market.space",
    },
    {
      name: "Машинка трансформер на радиоуправлении",
      link: "kids-toys.shopping-market.space",
    },
    {
      name: "Набор для рисования светом",
      link: "svet.shopping-market.space",
    },
    {
      name: "Светящееся машинки с трассой",
      link: "magic-tracks.shopping-market.space",
    },
    /* {
      name: "щётку для удаления катышек clothes shaver",
      link: "clothes-shaver.shopping-market.space",
    },
    {
      name: "Силиконовые увлажняющие носочки против трения стопы",
      link: "sani-sticks.shopping-market.space",
    },
    {
      name: "универсальные палочки от засоров sani-sticks",
      link: "sani-sticks.shopping-market.space",
    },
    {
      name: "Чистящее средство для вашей стиральной машинки!",
      link: "magic-wash.shopping-market.space",
    }, */
  ];

  const ProductsForMen = [
    {
      name: "Летающую фею",
      link: "fairy.shopping-market.space",
    },
    {
      name: "Машинка трансформер на радиоуправлении",
      link: "kids-toys.shopping-market.space",
    },
    {
      name: "Набор для рисования светом",
      link: "svet.shopping-market.space",
    },
    {
      name: "Cкребок для автомобиля",
      link: "ice-scrapper.shopping-market.space",
    },
    {
      name: "Светящееся машинки с трассой",
      link: "magic-tracks.shopping-market.space",
    },
    /* {
      name: "щётку для удаления катышек clothes shaver",
      link: "clothes-shaver.shopping-market.space",
    },
    {
      name: "универсальные палочки от засоров sani-sticks",
      link: "sani-sticks.shopping-market.space",
    },
    {
      name: "Чистящее средство для вашей стиральной машинки!",
      link: "magic-wash.shopping-market.space",
    }, */
  ];

  function operationWithItem(sex, arrayOfNames, arrayProducts) {
    const date = new Date();
    const Product =
      arrayProducts[Math.floor(Math.random() * arrayProducts.length)];

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
      return operationWithItem(".buyer", NamesWomen, ProductsForWomen);
    } else {
      return operationWithItem(".buyer", NamesMans, ProductsForMen);
    }
  }

  // Время через сколько высветится впервые
  let delay = Math.round(Math.random() * 5 + 5) * 1000;
  // let delay = 500;
  function runBuyers() {
    fadeItem();

    // Время через сколько высветится следующая
    delay = Math.round(Math.random() * 60 + 30) * 1000;
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
});