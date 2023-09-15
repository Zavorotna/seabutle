// function randBoat(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let boatOne = randBoat(1, 8),
//     boatTwo = boatOne + 1,
//     boatTree = boatTwo + 1,
//     isWinOne = false,
//     isWinTwo = false,
//     isWinTree = false;

// console.log ("Перше рандомне число:" + boatOne + "\nДруге рандомне число:" + boatTwo + "\nТретє рандомне число:" + boatTree);

// for (let i = 1, win = 0; i <= 5 && win < 3; i++) {
//     let bomb = +prompt("Вибери клітинку, де може знаходитися корабель");
//     console.log("Введене число:", bomb);

//     try {
//         if(isNaN(bomb)) {
//             throw "ви ввели не число";
//         }
//         if(bomb == "") {
//             throw "пусте поле, введіть значення";
//         }
//     } catch (error) {
//         alert ("Помилка! " + error)
//     }

//     if (boatOne === bomb) {
//         alert("Ти влучив!");
//         isWinOne = true;
//         boatOne = "error";
//         win++
//     } else if (boatTwo === bomb) {
//         alert("Ти влучив!");
//         isWinTwo = true;
//         boatTwo = "error";
//         win++
//     } else if (boatTree === bomb) {
//         alert("Ти влучив!");
//         isWinTree = true;
//         boatTree = "error";
//         win++;
//     } else {
//         alert("Промазав!");
//     }
// }
// let tryI = i,
//     shot = win;
// let tryCount = tryI - shot;
// let result = win/tryCount*100;
// alert(result + "%");

// if (isWinOne && isWinTwo && isWinTree) {
//     alert("Ти переміг! Москва пішла на корм рибам");
// } else {
//     alert("Ти програв! Всі спроби закінчилися");
// }



// // зробити перевірку на неправильно введені значенняб числа які виходять за діапазон, зробити виведення точності пострілів, зробити різнопалубні кораблі, двохвимірне поле з одним кораблем 6х6, 

// function randBoat(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let boatSize = 3,
//     boatCoordinates = [],
//     fieldSize = 6,
//     placing = randBoat(1, 2),  // 1 - горизонтально, 2 - вертикально
//     startRow,
//     startCol;

// if (placing === 1) {
//     startRow = randBoat(1, fieldSize);
//     startCol = randBoat(1, fieldSize - boatSize + 1);
// } else {
//     startRow = randBoat(1, fieldSize - boatSize + 1);
//     startCol = randBoat(1, fieldSize);
// }

// for (let i = 0; i < boatSize; i++) {
//     let row, col;
//     if (placing === 2) {  // вертикальна орієнтація
//         row = startRow + i;
//         col = startCol;
//     } else {  // горизонтальна орієнтація
//         row = startRow;
//         col = startCol + i;
//     }
//     boatCoordinates.push([row, col]);
// }

// console.log("Координати корабля на полі:");
// // цикл на виведення координт та підбитих палуб в консолі в консолі
// for (let row = 1; row <= fieldSize; row++) {
//     let rowString = "";
//     for (let col = 1; col <= fieldSize; col++) {
//         let cell = "-";
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
//     shotsCount++;

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
// alert("Точність пострілів: " + accuracy + "%");

// if (hitsCount === boatSize) {
//     alert("Ви перемогли! Ви потопили корабель!");
// } else {
//     alert("Ви програли. Ви вичерпали всі спроби.");
// }




// масиви

// function rand(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let array = [],
//   arrayReverse = [],
//   minCol = [],
//   maxCol = [],
//   avgCol = [],
//   minRow,
//   maxRow,
//   avgRow,
//   sum = 0

// for (let i = 0; i < 10; i++) {
//   array[i] = [];
//   for (let j = 0; j < 10; j++) {
//     array[i].push(rand(1,10))
//     sum += array[i][j]
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   arrayReverse[i] = [];
//   for (let j = 0; j < array.length; j++) {
//     arrayReverse[i][j] = array[j][i];
//   }
//   minCol[i] = Math.min.apply(null, arrayReverse[i])
//     maxCol[i] = Math.max.apply(null, arrayReverse[i])
//     avgCol[i] = arrayReverse[i].reduce((acc, cur) => acc + cur, 0) / arrayReverse[i].length
// }

// document.write(`
//   <input type='color' value='#00ffff'> Min X+Y
//   <input type='color' value='#8686ef'> Min X
//   <input type='color' value='#add8e6'> Min Y
//   <input type='color' value='#ff4500'> Max X+Y
//   <input type='color' value='#ffa500'> Max X
//   <input type='color' value='#c5ff47'> Max Y
// `)

// document.write("<table>")

// for (let i = 0; i < array.length; i++) {
//   document.write("<tr>")

//   minRow = Math.min.apply(null, array[i])
//   maxRow = Math.max.apply(null, array[i])
//   avgRow = array[i].reduce((acc, cur) => acc + cur) / array[i].length

//   for (let j = 0; j < array[i].length; j++) {
//     let cellColor = "white"
//     if (array[i][j] == minRow && array[i][j] == minCol[j]) {
//       cellColor = "#00ffff"
//     } else if (array[i][j] == maxCol[j] && array[i][j] == maxRow) {
//       cellColor = "#ff4500"
//     } else if (array[i][j] == minRow) {
//       cellColor = "#8686ef"
//     } else if (array[i][j] == minCol[j]) {
//       cellColor = "#add8e6"
//     } else if (arrayReverse[i][j] == maxRow) {
//       cellColor = "#ffa500"
//     } else if (array[i][j] == maxCol[j]) {
//       cellColor = "#c5ff47"
//     }
//     document.write("<td style='background-color: " + cellColor + ";'>" + array[i][j] + "</td>")
//   }
//   document.write("<td> Мін. знач. рядка: " + minRow + "</td><td> Макс. знач. рядка: " + maxRow + "</td><td> Сер. знач. рядка: " + avgRow.toFixed(2) + "</td>")
//   document.write("</tr>")
// }

// for (let count = 0; count < 3; count++) {
//   document.write("<tr>")
//   document.write("<tr>")
//   for (let i = 0; i < array.length; i++) {
//     switch (count) {
//       case 0:
//         document.write("<td>Мін: " + minCol[i] + "</td>")
//         break
//       case 1:
//         document.write("<td>Макс: " + maxCol[i] + "</td>")
//         break
//       case 2:
//         document.write("<td>Сер: " + avgCol[i] + "</td>")
//         break
//     }
//   }
//   if (count === 0) document.write("<td colspan='3' rowspan='3'><h1>Сума " + sum + "</h1></td>")
//   document.write("</tr")
// }
// document.write("</table>")



// Обєкти і властивості(автомобіль)
// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const carDrive = {
//   modelCar: "Mersedes",
//   transmission: "automat",
//   key: confirm("Вставте ключ в замок"),
//   firstGear: confirm("Включіть Drive на коробці передач"),
//   breaks: confirm("Зніміть ручник"),
//   volumeFuel: 60,
//   fuel: rand(0, 60),
//   accumulator: rand(0,100),
//   fuelConsumption: "",
//   accumBatery: "",
//   interval: "",
//   intervalFuel: "",
//   driveGasStation: "",
//   drive: false,
//   parking: true,
//   // умови для запуску мотора
//   check: function () {
//     if (this.key == false) {
//       alert("Вставте ключ в замок")
//     } else if (this.breaks == false) {
//       alert("Зніміть ручник")
//     } else if (this.firstGear == false) {
//       alert("Включіть Drive на коробці передач")
//     }
//   },
//   // метод на вставлення ключа в замок
//   startKey: function () {
//     if(this.key) this.key = true
//   },
//   // метод на зняття ручника
//   startBreaks: function () {
//     if(this.breaks) this.breaks = false
//   },
//   // метод на переключання передачі на драйв
//   startGear: function() {
//     if(this.firstGear) this.firstGear = true, this.parking = false
//   },
//   // запуск мотора
//   startEngine: function() {
//     if (this.fuel > 10 && this.accumulator > 25 && this.firstGear && this.key && !this.breaks && !this.parking) {
//       console.log("Авто було успішно заведено." + "\nрівень палива: " + this.fuel + " " + "\nзаряд акумулятора: " + this.accumulator)
//       this.drive = confirm("Бажаєте почати рух?")
//       this.interval = setInterval(() => {
//         if (this.drive && this.fuel > 10) {
//           this.fuel -= 1 
//           console.log("Залишилось пального: " + this.fuel + " л")
//           if (this.accumulator != 100 && this.accumulator < 100) {
//             this.accumulator += 0.5
//             console.log("Заряд акумулятора: " + this.accumulator + " %")
//             if (this.fuel <= 10) {
//               alert("Рівень пального впав до: " +  this.fuel)
//               driveGasStation = confirm("Заїдьте на заправну станцію для продовження руху")
//               if (driveGasStation) {
//                 clearInterval(this.interval)
//                 this.gasStation()
//               } else {
//                 this.stopEngine()
//               }
//             }
//           }
//         } else {
//           this.stopEngine()
//         }
//       }, 500)
//     } else {
//       this.drive = false
//       console.log("Авто не заведено." + "\nрівень палива: " + this.fuel + " " + "\nзаряд акумулятора: " + this.accumulator)
//       if (this.fuel <= 10) {
//         alert("Рівень пального впав до: " +  this.fuel)
//         driveGasStation = confirm("Заїдьте на заправну станцію для продовження руху")
//         if (driveGasStation) {
//           clearInterval(this.interval)
//           this.gasStation()
//         } else {
//           this.stopEngine()
//         }
//       }
//       if (this.accumulator <= 25) {
//         alert("Рівень заряду акумулятора: " +  this.accumulator + " Зарядіть акумулятор")
//         this.interval = setInterval(() => {
//           if (this.accumulator <= 99) {
//             clearInterval(this.intervalFuel)
//             this.accumulator += 1
//             console.log("Заряд акумулятора: " + this.accumulator  + " %")
//           } else {
//             clearInterval(this.interval)
//             this.check()
//             this.startKey()
//             this.startBreaks()
//             this.startGear()
//             this.startEngine()
//           }
//         }, 50)
//       }
//     }
//   },
//   // метод для зупинки авто
//   stopEngine: function() {
//     if (this.drive) {
//       this.parking = confirm("поставити авто на передачу Parking")
//       if(this.parking) {
//         console.log('Авто зупинено')
//         this.drive = false
//         this.interval = setInterval(() => {
//           if (this.accumulator <= 100 && this.accumulator >= 0) {
//             this.accumulator -= 0.2
//             console.log("Заряд акумулятора: " + this.accumulator + " %")
//           } else {
//             this.accumulator = 0
//             clearInterval(this.interval)
//           }
//         }
//         , 500)
//       } else if (!this.parking) {
//         this.gasStation()
//       }
//     }
//   },
//   // метод для заправки
//   gasStation: function () {
//     if (this.fuel <= 10) {
//       let fuelToAdd = +prompt("Скільки л пального ви бажаєте залити в бак?")
//       console.log(fuelToAdd)
//       let newFuel = this.fuel + fuelToAdd
//       console.log(newFuel)
//       this.intervalFuel = setInterval(() => {
//         if(this.fuel != newFuel) {
//           this.fuel += 1
//           console.log("ви заправилися до рівня" + this.fuel)
//         } else {
//           clearInterval(this.intervalFuel)
//           console.log("Ви заправилися до рівня: " + this.fuel)
//           this.check()
//           this.startKey()
//           this.startBreaks()
//           this.startGear()
//           this.startEngine()
//         }
//       }, 500)
//     }
//   },
// }

// carDrive.check()
// carDrive.startKey()
// carDrive.startBreaks()
// carDrive.startGear()
// carDrive.startEngine()


// конструктор обєктів авто за допомогою класів

// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// class Car {
//   interval = "" 
//   intervalFuel = ""     
//   driveGasStation = ""
//   drive = false
//   parking = true
//   constructor(props) {
//     this.carBrand = props.carBrand
//     this.fuelCapacity = props.fuelCapacity
//     this.transmission = props.transmission
//     this.fuel = rand(0, this.fuelCapacity)
//     this.accumulator = rand(0,100)
//     this.key = confirm("Вставте ключ в замок")
//     this.firstGear = confirm("Включіть Drive на коробці передач")
//     this.breaks = confirm("Зніміть ручник")
//   }
//   check () {
//     if (!this.key) {
//       alert("Вставте ключ в замок")
//     } else if (!this.breaks) {
//       alert("Зніміть ручник")
//     } else if (!this.firstGear) {
//       alert("Включіть Drive на коробці передач")
//     }
//   }
//   // метод на вставлення ключа в замок
//   // startKey () {
//   //   if(this.key) this.key = true
//   // }
//   // метод на зняття ручника
//   startBreaks () {
//     if(this.breaks) this.breaks = false
//   }
//   // метод на переключання передачі на драйв
//   startGear () {
//     if(this.firstGear) this.parking = false
//   }
//   // запуск мотора
//   startEngine () {
//     if (this.fuel > 10 && this.accumulator > 25 && this.firstGear && this.key && !this.breaks && !this.parking) {
//       console.log("Авто було успішно заведено." + "\nрівень палива: " + this.fuel + " " + "\nзаряд акумулятора: " + this.accumulator)
//       this.drive = confirm("Бажаєте почати рух?")
//       this.interval = setInterval(() => {
//         if (this.drive && this.fuel > 10) {
//           this.fuel -= 1 
//           console.log("Залишилось пального: " + this.fuel + " л")
//           if (this.accumulator != 100 && this.accumulator < 100) {
//             this.accumulator += 0.5
//             console.log("Заряд акумулятора: " + this.accumulator + " %")
//             if (this.fuel <= 10) {
//               alert("Рівень пального впав до: " +  this.fuel)
//               this.driveGasStation = confirm("Заїдьте на заправну станцію для продовження руху")
//               if (this.driveGasStation) {
//                 clearInterval(this.interval)
//                 this.gasStation()
//               } else {
//                 this.stopEngine()
//               }
//             }
//           }
//         } else {
//           this.stopEngine()
//         }
//       }, 500)
//     } else {
//       this.drive = false
//       console.log("Авто не заведено." + "\nрівень палива: " + this.fuel + " " + "\nзаряд акумулятора: " + this.accumulator)
//       if (this.fuel <= 10) {
//         alert("Рівень пального впав до: " +  this.fuel)
//         this.driveGasStation = confirm("Заїдьте на заправну станцію для продовження руху")
//         if (this.driveGasStation) {
//           clearInterval(this.interval)
//           this.gasStation()
//         } else {
//           this.stopEngine()
//         }
//       }
//       if (this.accumulator <= 25) {
//         alert("Рівень заряду акумулятора: " +  this.accumulator + " Зарядіть акумулятор")
//         this.interval = setInterval(() => {
//           if (this.accumulator <= 99) {
//             clearInterval(this.intervalFuel)
//             this.accumulator += 1
//             console.log("Заряд акумулятора: " + this.accumulator  + " %")
//           } else {
//             clearInterval(this.interval)
//             this.check()
//             this.startBreaks()
//             this.startGear()
//             this.startEngine()
//           }
//         }, 50)
//       }
//     }
//   }
//   // метод для зупинки авто
//   stopEngine () {
//     if (this.drive) {
//       this.parking = confirm("поставити авто на передачу Parking")
//       if(this.parking) {
//         console.log('Авто зупинено')
//         this.drive = false
//         this.interval = setInterval(() => {
//           if (this.accumulator <= 100 && this.accumulator >= 0) {
//             this.accumulator -= 0.2
//             console.log("Заряд акумулятора: " + this.accumulator + " %")
//           } else {
//             clearInterval(this.interval)
//             this.accumulator = 0
//           }
//         }
//         , 500)
//       } else if (!this.parking) {
//         this.gasStation()
//       }
//     }
//   }
//   // метод для заправки
//   gasStation () {
//     if (this.fuel <= 10) {
//       let maxFuelToAdd = this.fuelCapacity - this.fuel;
//       let fuelToAdd = +prompt(`Скільки л пального ви бажаєте залити в бак? (Максимально можливий об'єм: ${maxFuelToAdd} л)`);

//       // Перевірка, чи введено коректне число
//       if (isNaN(fuelToAdd) || fuelToAdd <= 0) {
//         console.log("введіть коректне значення пального")
//         this.gasStation() // Викликаємо метод gasStation() знову для повторного введення пального
//         return
//       }

//       // Перевірка, чи заправлений об'єм не перевищує fuelCapacity
//       if (fuelToAdd > maxFuelToAdd) {
//         console.log("Об'єм заправленого пального перевищує максимальний об'єм бака!")
//         console.log("Максимально можливий об'єм заправлення: " + maxFuelToAdd + " л")
//         this.gasStation() // Викликаємо метод gasStation() знову для повторного введення пального
//         return
//       }

//       let newFuel = this.fuel + fuelToAdd
//       console.log(newFuel)
//       this.intervalFuel = setInterval(() => {
//         if (this.fuel != newFuel) {
//           this.fuel += 1
//           console.log("ви заправилися до рівня" + this.fuel)
//         } else {
//           clearInterval(this.intervalFuel)
//           console.log("Ви заправилися до рівня: " + this.fuel)
//           this.check()
//           this.startBreaks()
//           this.startGear()
//           this.startEngine()
//         }
//       }, 500)
//     }
//   }
// }

// const myCar = new Car ({
//   carBrand: "Mersedes",
//   fuelCapacity: 45,
//   transmission: "automat", 
// })

// myCar.check()
// myCar.startBreaks()
// myCar.startGear()
// myCar.startEngine()

// Регулярні вирази

// let text = "Hello, my name is Alina? I'm from Ukraine. My number phone 380974639593,my email sweetcf12@gmail.com, number phone my husband is 093 555 55 55, emain oleg123@gmail.net.ua number phone my mom - 073-254-87-77, number phone my dad 38063 325-55-65 ZavorotnaAlina123123@gmail.com zavotonta-alina123@gmil.com.ua zavorotna_alina333@gmail.com.ua ",
//     patternTel = /\b\+?(\d{2})?([(]?\d{3}[)]?)\s?[-]?\s?(?:\d{3})\s?[-]?(?:\s?\d{2})\s?[-]?(?:\s?\d{2})\b/g
//     // \+?(\d{2})?([(]?\d{3}[)]?)\s?[-]?\s?(?:\d{3})(?:\s?[-]?(?:\s?\d{2})){2}
//     patternMail = /(?:[a-z0-9._-]+)@((?:[a-z._-]+)[.](?:\w+)(?:[.]?(\w+)?))/gi
//     // \b(?:[a-z]+)((?:[0-9._-]?)(?:[a-z]+)?)+@((?:\w+[._-]?)(?:\w+)?(?:\.[a-z]+))\b



