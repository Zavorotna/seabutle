// function smiles(howMuch = 10, smile = "=*-*=") {
//     console.log("Кількість повторень:", howMuch);
//     console.log("Смайлик:", smile);
//     for (var i = 1; i <= howMuch; i++) {
//         console.log(i + " " + smile);
//     }
// }

// var userSmile = prompt("Введіть Ваш смайл");
// var userCount = prompt("Введіть кількість повторень");

// if (userSmile && userCount) {
//     smiles(userCount, userSmile);
// } else if(userSmile) {
//     smiles (undefined, userSmile)
// } else if (userCount) {
//     smiles(userCount, undefined)
// } else {
//     smiles();
// }

// function smiles(smile = prompt("Введіть Ваш смайл"), howMuch = prompt("Введіть кількість повторень")) {
//     console.log("Кількість повторень:", howMuch)
//     console.log("Смайлик:", smile)
//     for (let i = 1; i <= howMuch; i++) {
//         console.log(i + smile)
//     }
// }
// smiles()

// let balance = 100500,
//     cameraOn = true

// function steal(balance, amount) {
//     cameraOn = !cameraOn
//     if (amount < balance) {
//         balance -= amount
//     }
//     cameraOn = true
//     return amount, balance
// }

// let amount = steal(balance, 50000)
// console.log(balance)
// console.log(cameraOn)
// console.log(amount)
// alert("criminal: you stole " + amount)


//костиль КРАДІЖКА


// let balance = 100500,
//     cameraOn = true,
//     lastBalance = balance

// function steal(amount) {
//   cameraOn = !cameraOn;
//   if (amount < lastBalance) {
//     lastBalance -= amount;
//   }
//   console.log(lastBalance);
//   console.log(cameraOn);
//   console.log(amount);
//   console.log("Criminal: You stole " + amount);
//   cameraOn = true;
//   return amount;
// }

// let amount = steal(500);



//  норм версія КРАДІЖКА


// let balance = 100500,
//   cameraOn = true,
//   amount = 0

// function steal(amount) {
//   cameraOn = !cameraOn
//   if (amount < balance) {
//     balance -= amount
//   }
//   console.log("Criminal: You stole " + amount)
//   console.log("New balance: " + balance)
//   cameraOn = true
//   return amount
// }

// amount += steal(1000)

// спільна версія КРАДІЖКА

// let balance = 100500,
//   cameraOn = true,
//   stolen = 0

// function steal(balance, amount) {
//   cameraOn = !cameraOn
//   if (amount < balance) {
//     balance -= amount
//     stolen += amount
//   }
//   console.log("Criminal: You stole " + stolen)
//   console.log("New balance: " + balance)
//   cameraOn = true
//   return balance
// }

// balance = steal(balance, 1000)

// ВИДАЛЕННЯ НЕВІРНИХ СИМВОЛІВ

// let str = prompt("Введіть ваше імя")

// function deleteSymbol(str) {
//   let abc = /[^a-zA-Z\s]/g
//   str = str.replace(abc, "")
//   return str;
// }

// str = deleteSymbol(str)
// console.log(str)

// ВАЛІДАЦІЯ НОМЕРІВ

// function validNumber(number) {
//   let phoneNumber = number.replace(/-/g, "")
//   if (phoneNumber.length !== 10) {
//     return false
//   }
//   if (isNaN(phoneNumber)) {
//     return false
//   }
//   return true
// }

// let checkNumber = prompt("Будь ласка, введіть номер телефону у форматі 123-1234567 або 1231234567:"),
//     numberNew = checkNumber.replace(/-/g, "")
// if (validNumber(numberNew)) {
//   alert("Номер телефону введено правильно.")
//   console.log(numberNew)
// } else {
//   alert("Номер телефону введено неправильно.")
//   console.log(numberNew)
// }
