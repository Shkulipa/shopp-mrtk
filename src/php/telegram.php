<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

/* https://api.telegram.org/bot1296438776:AAFspB49nhUdu4VZVRxd_YcgSzArDpswJYE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// 1296438776:AAFspB49nhUdu4VZVRxd_YcgSzArDpswJYE

$txt = "";
$name = $_POST['name'];
$phone = $_POST['phone'];
$question = $_POST['question'];
$token = "1296438776:AAFspB49nhUdu4VZVRxd_YcgSzArDpswJYE";
$chat_id = "-424366029";
$arr = array(
  'Тип заявки: ' => 'Консультация',
  'Имя пользователя: ' => $name,
  'Телефон: ' => '%2b' . $phone,
  'Вопрос: ' => $question,
  'Веб-сайт: ' => 'shopping-market.pp.ua',
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>