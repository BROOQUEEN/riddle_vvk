function crossingRight(transfer) {
    if (transfer === "Волк") {
        delete leftCoast.peasant;
        delete leftCoast.wolf;
        rightCoast.peasant = peasant;
        rightCoast.wolf = wolf;

        // console.log("1) На левом берегу остались: " + leftCoast.cabbage + " и " + leftCoast.goat);
        // console.log("1) На правом берегу теперь: " + rightCoast.peasant + " и " + rightCoast.wolf);
        console.log('<li class="result__item"><div class="result__item-status"><p>Событие</p></div><div class="result__item-text"><p><b>ПОРАЖЕНИЕ:</b> КОЗА СЪЕЛА КАПУСТУ</p></div></li>');
        // console.log("<h1>ПОРАЖЕНИЕ: КОЗА СЪЕЛА КАПУСТУ</h1>");

    } else if (transfer === "Капуста") {
        delete leftCoast.peasant;
        delete leftCoast.cabbage;
        rightCoast.peasant = peasant;
        rightCoast.cabbage = cabbage;

        console.log("2) На левом берегу остались: " + leftCoast.wolf + " и " + leftCoast.goat);
        console.log("2) На правом берегу теперь: " + rightCoast.peasant + " и " + rightCoast.cabbage);
        console.log("ПОРАЖЕНИЕ: ВОЛК СЪЕЛ КОЗУ");
    } else if (transfer === "Коза") {
        delete leftCoast.peasant;
        delete leftCoast.goat;
        rightCoast.peasant = peasant;
        rightCoast.goat = goat;

        
        console.log("3) На левом берегу остались: " + leftCoast.wolf + " и " + leftCoast.cabbage);
        console.log("3) На правом берегу теперь: " + rightCoast.peasant + " и " + rightCoast.goat);
    } else {
        console.log("Что то пошло не так");
    };
};

(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

let peasant = "Человек",
    wolf = "Волк",
    cabbage = "Капуста",
    goat = "Коза",
    leftCoast = {
        peasant: peasant,
        wolf: wolf,
        cabbage: cabbage,
        goat: goat,
    },
    rightCoast = {};

let rightGoat = getElementById('rightGoat'),
    rightCabbage = getElementById('rightCabbage'),
    rightWolf = getElementById('rightWolf'),
    leftPeasant = getElementById('leftPeasant'),
    leftGoat = getElementById('leftGoat');

    






    // console.log(leftCoast);


// console.log(leftCoast);
// console.log(rightCoast);




/*
Алгоритм 1

1) сначала переправляются крестьянин и коза
2) крестьянин оставляет козу и возвращается обратно
3) крестьянин переправляет волка
4) крестьянин возвращается с козой
5) крестьянин переправляет капусту
6) крестьянин возвращается один
7) крестьянин забирает козу и отправляется на другой берег

Алгоритм 2

1) сначала переправляются крестьянин и коза
2) крестьянин оставляет козу и возвращается обратно
3) крестьянин переправляет капусту
4) крестьянин возвращается с козой
5) крестьянин переправляет волка
6) крестьянин возвращается один
7) крестьянин забирает козу и отправляется на другой берег
*/