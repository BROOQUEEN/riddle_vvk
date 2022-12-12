function modal() {
    window.location.reload();
};

function crossingRight(transfer) {
    
    if (transfer === "Волк") {
        if ('goat' && 'cabbage' && 'peasant' && 'wolf' in leftCoast) {
            delete leftCoast.peasant;
            delete leftCoast.wolf;
            rightCoast.peasant = peasant;
            rightCoast.wolf = wolf;
        }

        iconWolf.style.left = '85%';
        iconWolf.style.top = '80%';
        iconBoat.style.top = '77%';
        iconBoat.style.left = '50%';

        leftPeasant.style.display = "block";
        rightWolf.style.display = "none";
        console.log('<li class="result__item"><div class="result__item-status"><p>Событие</p></div><div class="result__item-text"><p><b>Вы переместили волка на правый берег</b></p></div></li>');
        // console.log("1) На левом берегу остались: " + leftCoast.cabbage + " и " + leftCoast.goat);
        // console.log("1) На правом берегу теперь: " + rightCoast.peasant + " и " + rightCoast.wolf);
        
        
        if ('cabbage' && leftCoast.goat) {
            setTimeout(() => {modalka.style.display = "flex";}, 1000);
        };

    } else if (transfer === "Капуста") {
        // Если слева есть все, то Поражение, т.к. волк остался с козой
        if (leftCoast.hasOwnProperty('goat') & leftCoast.hasOwnProperty('wolf') & leftCoast.hasOwnProperty('cabbage') & leftCoast.hasOwnProperty('peasant')) {
            console.log('ПЕРВОЕ УСЛОВИЕ');
            delete leftCoast.peasant;
            delete leftCoast.cabbage;
            rightCoast.peasant = peasant;
            rightCoast.cabbage = cabbage;
            setTimeout(() => {modalka.style.display = "flex";}, 1000);
        } else if (leftCoast.hasOwnProperty('peasant') & leftCoast.hasOwnProperty('wolf') & leftCoast.hasOwnProperty('cabbage')) {
            // все есть кроме козы
            console.log('ВТОРОЕ УСЛОВИЕ');
            console.log('все есть кроме козы');

            
            delete leftCoast.cabbage;
            delete leftCoast.peasant;
            rightCoast.peasant = peasant;
            rightCoast.cabbage = cabbage;
            
            // rightCabbage.style.display = "none";
            rightWolf.style.display = "none";
            leftGoat.style.display = "block";
            leftCabbage.style.display = "block";
        };

        iconCabbage.style.left = '85%';
        iconCabbage.style.top = '64%';
        iconBoat.style.top = '77%';
        iconBoat.style.left = '50%';

        leftPeasant.style.display = "block";
        rightCabbage.style.display = "none";
        console.log('<li class="result__item"><div class="result__item-status"><p>Событие</p></div><div class="result__item-text"><p><b>Вы переместили капусту на правый берег</b></p></div></li>');

    } else if (transfer === "Коза") {
        if ('goat' && 'gabbage' && 'wolf' && 'peasant' in leftCoast) {
            delete leftCoast.peasant;
            delete leftCoast.goat;
            rightCoast.peasant = peasant;
            rightCoast.goat = goat;
        }

        iconGoat.style.left = '75%';
        iconGoat.style.top = '80%';
        iconBoat.style.top = '77%';
        iconBoat.style.left = '50%';

        leftGoat.style.display = "block";
        leftPeasant.style.display = "block";
        rightCabbage.style.display = "none";
        rightWolf.style.display = "none";
        rightGoat.style.display = "none";
        console.log('<li class="result__item"><div class="result__item-status"><p>Событие</p></div><div class="result__item-text"><p><b>Вы переместили козу на правый берег</b></p></div></li>');

        // console.log("3) На левом берегу остались: " + leftCoast.wolf + " и " + leftCoast.cabbage);
        // console.log("3) На правом берегу теперь: " + rightCoast.peasant + " и " + rightCoast.goat);
    } else {
        console.log("Что то пошло не так");
    };
    console.log(leftCoast);
    console.log(rightCoast);
};












function crossingLeft(transfer) {
    if (transfer === "Человек") {
        delete rightCoast.peasant;
        leftCoast.peasant = peasant;

        iconBoat.style.top = '60%';
        iconBoat.style.left = '10%';

        leftPeasant.style.display = "none";
        leftGoat.style.display = "none";

        console.log('<li class="result__item"><div class="result__item-status"><p>Событие</p></div><div class="result__item-text"><p><b>Вы вернули крестьянина (одного) на левый берег</b></p></div></li>');

    } else if (transfer === "Коза") {
        if (rightCoast.hasOwnProperty('peasant') & rightCoast.hasOwnProperty('goat') & rightCoast.hasOwnProperty('cabbage')) {
            delete rightCoast.peasant;
            delete rightCoast.goat;
            leftCoast.peasant = peasant;
            leftCoast.goat = goat;
        };
        leftGoat.style.display = "none";
        iconGoat.style.top = '35%';
        iconGoat.style.left = '31%';

        iconBoat.style.top = '60%';
        iconBoat.style.left = '10%';

        console.log('<li class="result__item"><div class="result__item-status"><p>Событие</p></div><div class="result__item-text"><p><b>Вы вернули козу на левый берег</b></p></div></li>');

    };

    // Если на левом берегу остались Волк и Капуста
    if (leftCoast.cabbage && leftCoast.wolf) {
        rightWolf.style.display = "block";
        rightCabbage.style.display = "block";
        
    };
    console.log(leftCoast);
    console.log(rightCoast);
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

let modalka = document.getElementById('modal');

modalka.style.display = "none";

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

let rightGoat = document.getElementById('rightGoat'),
    rightCabbage = document.getElementById('rightCabbage'),
    rightWolf = document.getElementById('rightWolf'),
    leftPeasant = document.getElementById('leftPeasant'),
    leftGoat = document.getElementById('leftGoat');

let iconWolf = document.getElementById('iconWolf'),
    iconCabbage = document.getElementById('iconCabbage'),
    iconGoat = document.getElementById('iconGoat');
    iconBoat = document.getElementById('iconBoat');
    

    leftPeasant.style.display = "none";
    leftGoat.style.display = "none";
    leftCabbage.style.display = "none";

    
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