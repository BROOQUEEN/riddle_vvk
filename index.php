<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Игра "Волк, коза и капуста"</title>
</head>
<body>

    <?php
        require_once "connectionDB.php";
    ?>

    <!-- <h1>Игра "Волк, коза и капуста"</h1> -->
    <main class="main">
        <section class="section__left">
            <div class="regulations__block block">
                <h3 class="regulations__title">Правила игры</h3>
                <div class="regulations__container">
                    <p class="regilations__text">Крестьянину нужно перевезти через реку волка, козу и капусту. </p>
                    <p class="regilations__text">Но лодка такова, что в ней может поместиться только крестьянин, а с ним или один волк, или одна коза, или одна капуста.</p>
                    <p class="regilations__text">Но если оставить волка с козой, то волк съест козу, а если оставить козу с капустой, то коза съест капусту.</p>
                    <p class="regilations__text">Как перевёз свой груз крестьянин?</p>
                </div>
            </div>
            <div class="result__block block">
                <h3 class="regulations__title">Результаты</h3>
                <div class="regulations__container">
                    <ul class="result__lists">
                    <?php
                        $sql = "Select * from `result`";
                        $result = mysqli_query($connect, $sql);

                        if ($result) {
                            while ($row = mysqli_fetch_assoc($result)) {

                                ?>
                        <li class="result__item">
                            <div class="result__item-status">
                                <p><?php echo $row['status'];?></p>
                                <p><?php echo $row['date'];?></p>
                            </div>
                            <div class="result__item-text">
                                <p><?php echo $row['message'];?></p>
                                <p>Пройдено за 7 минут</p>
                            </div>
                        </li>
                                <?php

                                
                            }            
                        }
                        ?>
                        
                        <li class="result__item">
                            <div class="result__item-status">
                                <p>Событие</p>
                            </div>
                            <div class="result__item-text">
                                <p id="log"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section__right">
            <div class="map">

            </div>
            <div class="panel">
                <ul class="panel__buttons">
                    <button class="btn active" id="rightGoat" onclick ="crossingRight('Коза')">Перевести козу</button>
                    <button class="btn active" id="rightCabbage" onclick ="crossingRight('Капуста')">Перевести Капусту</button>
                    <button class="btn active" id="rightWolf" onclick ="crossingRight('Волк')">Перевести Волка</button>
                    <button class="btn" id="leftPeasant" onclick ="crossingLeft('Человек')">Вернуть Крестьянина</button>
                    <button class="btn" id="leftGoat" onclick ="crossingLeft('Коза')">Вернуть козу</button>
                </ul>
            </div>
        </section>
    </main>


    <!-- <h2>Задача</h2>
    <p>Крестьянину нужно перевезти через реку волка, козу и капусту. Но лодка такова, что в ней может поместиться только крестьянин, а с ним или один волк, или одна коза, или одна капуста. Но если оставить волка с козой, то волк съест козу, а если оставить козу с капустой, то коза съест капусту. Как перевез свой груз крестьянин?</p>
    
    <h3>Дейстия</h3>
    <button id="rightGoat">Перевести козу</button>
    <button id="rightCabbage">Перевести Капусту</button>
    <button id="rightWolf">Перевести Волка</button>

    <h3 class="message">Результат</h3> -->



    <script src="script.js"></script>
</body>
</html>