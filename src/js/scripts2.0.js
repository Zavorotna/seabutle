// function randBoat(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let boatSize = 3,
//     boatCoordinates = [],
//     fieldSize = 6,
//     startRow = randBoat(1, fieldSize - boatSize + 1),
//     startCol = randBoat(1, fieldSize - boatSize + 1); 

// for (let i = 0; i < boatSize; i++) {
//     let row = startRow; // Використовуємо однаковий рядок для всіх координат корабля
//     let col = startCol + i; // Збільшуємо стовпець по порядку
//     boatCoordinates.push([row, col]);
// }
// // виведення поля координат у консоль для перевірки
// console.log("Координати корабля на полі:");
// for (let row = 1; row <= fieldSize; row++) {
//     // позначення рядків поля
//     let rowString = ""; 
//     // цикл який перебирає стовпці відповідно до рядків поля, щоб поле було 6х6
//     for (let col = 1; col <= fieldSize; col++) {
//         let cell = "-";
//         // цикл який виводить розміщення корабля на полі позначаючи його Х
//         for (let i = 0; i < boatCoordinates.length; i++) {
//             if (row === boatCoordinates[i][0] && col === boatCoordinates[i][1]) {
//                 cell = "X";
//                 break;
//             }
//         }
//         rowString += cell + " ";
//     }
//     console.log(rowString);
// }

// let isWin = false,
//     shotsCount = 0,
//     hitsCount = 0;

// while (shotsCount < 5 && hitsCount < boatSize) {
//     let row = +prompt("Введіть номер рядка (від 1 до 6):"),
//         col = +prompt("Введіть номер стовпця (від 1 до 6):");

//     try {
//         if (isNaN(row) || isNaN(col)) {
//             throw "Ви ввели неправильне значення. Введіть числа від 1 до 6.";
//         }

//         if (row < 1 || row > fieldSize || col < 1 || col > fieldSize) {
//             throw "Ви ввели значення, яке виходить за межі поля. Введіть числа від 1 до 6.";
//         }
//     } catch (error) {
//         alert("Помилка! " + error);
//         continue;
//     }

//     shotsCount++;

//     let isHit = false;
//     for (let i = 0; i < boatCoordinates.length; i++) {
//         if (row === boatCoordinates[i][0] && col === boatCoordinates[i][1]) {
//             isHit = true;
//             boatCoordinates.splice(i, 1);
//             hitsCount++;
//             alert("Ви влучили в корабель!");
//             break;
//         }
//     }

//     if (!isHit) {
//         alert("Промазали!");
//     }
// }

// let accuracy = (hitsCount / shotsCount) * 100;
// alert("Точність пострілів: " + accuracy.toFixed(2) + "%");

// if (hitsCount === boatSize) {
//     alert("Ви перемогли! Ви потопили корабель!");
// } else {
//     alert("Ви програли. Ви вичерпали всі спроби.");
// }

// ІДЕАЛЬНА ВЕРСІЯ МОРСЬКОГО БОЮ

// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let boatOrientation = rand(1,2), //1-горизонтально, 2 -вертикально
//     boatSize = rand(1,4),
//     boatOne,
//     boatTwo,
//     boatTree,
//     boatFour,
//     fieldSize = 6,
//     startRow,
//     startCol,
//     step,
//     shotsCount = 0,
//     hitsCount = 0


// if (boatOrientation === 1) {
//     startRow = rand(1, fieldSize - boatSize + 1)
//     startCol = rand(1, fieldSize)
//     step = 10
// } else {
//     startCol = rand(1, fieldSize - boatSize + 1)
//     startRow = rand(1, fieldSize)
//     step = 1
// }

// boatOne = +("" + startRow + startCol)
// boatTwo = boatSize > 1 ? boatOne + step : false
// boatTree = boatSize > 2 ? boatTwo + step : false 
// boatFour = boatSize > 3 ? boatTree + step : false

// console.log(boatOne, boatTwo, boatTree, boatFour)

// while (shotsCount < 12 && hitsCount < boatSize) {

//     shotsCount++

//     let fire = +prompt("Введіть числа від 11 до 66.")

//     console.log(fire)

//     try {
//         if (isNaN(fire)) {
//             throw "Ви ввели значення. Введіть числа від 11 до 66."
//         }

//         if (fire <= 10 || fire > 66) {
//             throw "Ви ввели значення, яке виходить за межі поля. Введіть числа від 11 до 66."
//         }

//     } catch (error) {
//         alert("Помилка! " + error)
//         continue
//     }

//     switch (fire) {
//         case boatOne:
//         case boatTwo:
//         case boatTree:
//         case boatFour:
//             hitsCount++
//             alert ("Hit")
//             if (hitsCount === boatSize) {
//                 alert ("Корабель потонув")
//                 break
//             }
//             switch (fire) {
//                 case boatOne: 
//                     boatOne = false
//                     break
//                 case boatTwo:
//                     boatTwo = false
//                     break
//                 case boatTree:
//                     boatTree = false
//                     break
//                 case boatFour:
//                     boatFour = false
//                     break
//             }
//             break
//         default: 
//             alert (shotsCount + "-й постріл пролетів як фанєра над Паріжом, не попав")
//     } 
// }

// let accuracy = (hitsCount / shotsCount) * 100
// alert("Точність пострілів: " + accuracy + "%")

// if (hitsCount === boatSize) {
//     alert("Ви перемогли! Ви потопили корабель!")
// } else {
//     alert("Ви програли. Ви вичерпали всі спроби.")
// }


// обєкт Date
// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let hours = ["a", "и", ""],
//     grivnas = ["ня", "ні", "ень"],
//     dollars = ["", "a", "ів"],
//     cents = ["", "и", "ів"],
//     num = rand(1,100),
//     numD = (num / 37.573).toFixed(2),
//     numDR = Math.floor(numD)
//     dollarText = (numDR - numD) == 0 ? numD + " долар" + end(numD, dollars) : `${numDR} долар${end(numDR, dollars)} та ${Math.floor(numD % 1 * 100)} цент${end(Math.floor(numD % 1 * 100), cents)}`

// console.log(num + " грив" + end(num, grivnas))
// console.log(dollarText)

// function timeConverter(unixTime) {
//     let timeNow = new Date(unixTime),
//         months = ["Січня","Лютого","Березня","Квітня","Травня","Червня","Липня","Серпня","Вересня","Жовтня","Листопад","Грудня"],
//         year = timeNow.getFullYear(),
//         month = months[timeNow.getMonth()],
//         date = timeNow.getDate(),
//         hour = timeNow.getHours(),
//         min = timeNow.getMinutes(),
//         sec = timeNow.getSeconds(),
//         time = `${date} ${month} ${year} року ${hour} годин${end(hour, hours)} ${min} хвилин${end(min, hours)} ${sec} секунд${end(sec, hours)}`
//     return time
// }

// console.log(timeConverter(Date.now()))

// function end(n, arr) {
//     if (n % 10 === 1 && n !== 11) {
//         return arr[0] //для гривень повертається -ня
//     } else if (n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 11 && n % 100 <= 14)) {
//         return arr[1] //для гривень повертається -ні
//     } else {
//         return arr[2] //для гривень повертається -ень
//     }
// }

