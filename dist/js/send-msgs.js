$(document).ready(function () {
	// SendMessage Consultation
	$("#consult-form").submit(function (e) {
		e.preventDefault();
		if (
			$("#phone-consult-field").val().length >= 10 &&
			$("#name-consult-field").val().length > 0 &&
			$("#question-consult-field").val().length > 0
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
			$(".error.name").css({ display: "none" });
			$(".error.phone").css({ display: "none" });
			$(".error.question").css({ display: "none" });

			if (
				$("input[name=phone]").val().length < 10 &&
				$("input[name=name]").val().length == 0 &&
				$("textarea[name=question]").val().length == 0
			) {
				// все
				$(".error.name").css({ display: "block" });
				$(".error.phone").css({ display: "block" });
				$(".error.question").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length < 10 &&
				$("input[name=name]").val().length > 0 &&
				$("textarea[name=question]").val().length > 0
			) {
				// телефон
				$(".error.phone").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length >= 10 &&
				$("input[name=name]").val().length == 0 &&
				$("textarea[name=question]").val().length > 0
			) {
				// имя
				$(".error.name").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length >= 10 &&
				$("input[name=name]").val().length > 0 &&
				$("textarea[name=question]").val().length == 0
			) {
				// вопрос
				$(".error.question").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length >= 10 &&
				$("input[name=name]").val().length == 0 &&
				$("textarea[name=question]").val().length == 0
			) {
				// вопрос и имя
				$(".error.name").css({ display: "block" });
				$(".error.question").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length < 10 &&
				$("input[name=name]").val().length == 0 &&
				$("textarea[name=question]").val().length > 0
			) {
				// телефон и имя
				$(".error.name").css({ display: "block" });
				$(".error.phone").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length < 10 &&
				$("input[name=name]").val().length > 0 &&
				$("textarea[name=question]").val().length == 0
			) {
				// телефон и вопрос
				$(".error.phone").css({ display: "block" });
				$(".error.question").css({ display: "block" });
			}
		}
	});

	// SendMessage Order
	$("#adress-form").submit(function (e) {
		e.preventDefault();
		if (
			$("input[name=phone]").val().length >= 10 &&
			$("input[name=name]").val().length > 0
		) {
			$.ajax({
				type: "POST",
				url: "php/request_cart.php",
				data: $(this).serialize(),
			}).done(function () {
				$(".error.name").css({ display: "none" });
				$(".error.phone").css({ display: "none" });

				//  очищение формы
				$(this).find("input").val("");
				$("#modal-adress-forms").fadeOut("slow");
				$("#thanks").fadeIn("slow");
				$("form").trigger("reset");

				// чистим коризну и обновляем картинку на пустую корзину и текст под каждім товаром
				cart = [];
				$(".catalog__items__item__content__cart > img").attr(
					"src",
					"icons/shopping-cart.svg"
				);
				$(
					".catalog__items__item__content__cart > .catalog__items__item__content__cart__text"
				).text("Добавить в корзину");
				cartAssArrFunction();
			});
			return false;
		}
		{
			$(".error.name").css({ display: "none" });
			$(".error.phone").css({ display: "none" });

			if (
				$("input[name=phone]").val().length < 10 &&
				$("input[name=name]").val().length == 0
			) {
				// все
				$(".error.name").css({ display: "block" });
				$(".error.phone").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length < 10 &&
				$("input[name=name]").val().length > 0
			) {
				// телефон
				$(".error.phone").css({ display: "block" });
			} else if (
				$("input[name=phone]").val().length >= 10 &&
				$("input[name=name]").val().length == 0
			) {
				// имя
				$(".error.name").css({ display: "block" });
			}
		}
	});

});