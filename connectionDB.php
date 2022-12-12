<?php
    // Подключение к базе данных
    $connect = mysqli_connect('localhost', 'root', '', 'riddle_vkk');

    if(!$connect){
        die('Ошибка соединения с базой данных "riddle_vkk"');
    }
?>