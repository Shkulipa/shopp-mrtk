window.onload = function () {

  // other
  document.getElementById("add-to-cart").addEventListener(
    "click",
    function () {
      fbq('track', 'AddToCart');
    },
    false
  );

  // document.getElementById("lead").addEventListener(
  //   "click",
  //   function () {
  //     fbq("track", "Lead");
  //       const inputName = document.getElementById('name-adress-form').value.length;
  //       const inpuPhone = document.getElementById('phone-adress-form').value.length;

  //       if( inputName > 0 && inpuPhone > 0 )  {
  //           fbq("track", "Purchase", { value: 1.0, currency: "UAH" });
  //       }
  //   },
  //   false
  // );
};
  