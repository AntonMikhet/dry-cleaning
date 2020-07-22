<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone);
if (mail("dry.clean.minsk@gmail.com", "Zayavka Dry Cleaning", "Имя:".$name.". Телефон: ".$phone ,"From:anton2585665@gmail.com  \r\n"))
 { header("Location: /index.html"); 
} else {
    echo "при отправке сообщения возникли ошибки";
}?>