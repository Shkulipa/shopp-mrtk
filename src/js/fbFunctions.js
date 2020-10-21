window.onload = function () {

  // categories 
  document.getElementById("cleaners").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "Чистящие средства", {
        content_category: "Чистящие средства",
      });
    },
    false
  );

  document.getElementById("household-products").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "Товары для дома", {
        content_category: "Товары для дома",
      });
    },
    false
  );

  document.getElementById("health-beauty").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "Товары для спорта, здоровья и красоты", {
        content_category: "Товары для спорта, здоровья и красоты",
      });
    },
    false
  );

  document.getElementById("women-clothes").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "Женская одежда", {
        content_category: "Женская одежда",
      });
    },
    false
  );

  document.getElementById("men-clothes").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "Мужская одежда", {
        content_category: "Мужская одежда",
      });
    },
    false
  );

// products
  document.getElementById("socks").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "ANTI-CRACK SILICONE SOCKS", {
        content_ids: "socks",
        content_category: "Товары для спорта, здоровья и красоты",
        content_name: "ANTI-CRACK SILICONE SOCKS",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("elaslim").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "elaslim - колготки", {
        content_ids: "elaslim",
        content_category: "Женская одежда",
        content_name: "elaslim - колготки",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("hot-shapers").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "hot-shapers - пояс для похудения", {
        content_ids: "hot-shapers",
        content_category: "Товары для спорта, здоровья и красоты",
        content_name: "hot-shapers",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("corector-osanki").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "магнитный корректор осанки", {
        content_ids: "corector-osanki",
        content_category: "Товары для спорта, здоровья и красоты",
        content_name: "corector-osanki",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("magnet-fix").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "magnet-fix - вальгус", {
        content_ids: "magnet-fix",
        content_category: "Товары для спорта, здоровья и красоты",
        content_name: "magnet-fix",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("sani-sticks").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "sani-sticks - Чистота водопроводных труб от засоров и запахов на целый год!", {
        content_ids: "sani-sticks",
        content_category: "Чистящие средства",
        content_name: "sani-sticks",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("fly-bra").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "fly-bra - бюстгальтер-неведимка", {
        content_ids: "fly-bra",
        content_category: "Женская одежда",
        content_name: "fly-bra",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("easy-mop").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "easy-mop - простое решение всех проблем с уборкой пола", {
        content_ids: "easy-mop",
        content_category: "Товары для дома",
        content_name: "easy-mop",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("wild-tornado").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "wild-tornado - чистящее средство", {
        content_ids: "wild-tornado",
        content_category: "Чистящие средства",
        content_name: "wild-tornado",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("handy-heater").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "handy-heater - мощный портативный обогреватель", {
        content_ids: "handy-heater",
        content_category: "Товары для дома",
        content_name: "handy-heater",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("magic-wash").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "magic-wash - мощный портативный обогреватель", {
        content_ids: "magic-wash",
        content_category: "Товары для дома",
        content_name: "magic-wash",
        content_type: "product",
      });
    },
    false
  );

  document.getElementById("led-lampa").addEventListener(
    "click",
    function () {
      fbq("trackCustom", "led-lampa - мощный портативный обогреватель", {
        content_ids: "led-lampa",
        content_category: "Товары для спорта, здоровья и красоты",
        content_name: "led-lampa",
        content_type: "product",
      });
    },
    false
  );
};
  