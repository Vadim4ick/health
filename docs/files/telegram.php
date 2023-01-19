<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$token = "5564049003:AAELRQ_OsZH15tmt2e1O_DEYerq_K4zMl_M";
$chat_id = "-1001670037039";
$arr = array(
  'Ваше имя: ' => $name,
  'Ваш телефон: ' => $phone,
  'Комментарий' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return false;
} else {
  return true;
}
?>
