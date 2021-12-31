const fs = require('fs');

let names = require('./names');
var data = names.list

class transaction {
    constructor (price, purchaser, date, items_purchased, cc) {
        this.price = price;
        this.purchaser = purchaser;
        this.date = date;
        this.items_purchased = items_purchased;
        this.cc = cc;
    }
}

function generateName() {
    return data[Math.floor(Math.random() * data.length)];
}

function generateCCInfo(digit) {
    var digits = Math.random().toFixed(digit).split('.')[1];
    var firstFour = digits.substr(0, 4) + " ";
    var secondFour = digits.substr(4, 4) + " ";
    var thirdFour = digits.substr(8, 4) + " ";
    var fourthFour = digits.substr(12, 4)
    return (firstFour + secondFour + thirdFour + fourthFour);
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generatePurchase() {
    var purchase = {}
    var price = "$ " + (Math.random() * 1000).toFixed(2);
    var purchaseDate = randomDate(new Date(2021, 0, 1), new Date());
    var quantity = Math.floor(Math.random() * 10);
    purchaseDate = (purchaseDate.getMonth() + " / " + 
    purchaseDate.getDay() + " / " + purchaseDate.getFullYear())
    purchase.price = price;
    purchase.quantity = quantity;
    purchase.date = purchaseDate;
    return purchase
}

function generateTransaction() {
    var purchase = generatePurchase();
    return new transaction (
        purchase.price,
        generateName(),
        purchase.date,
        purchase.quantity,
        generateCCInfo(16)
    )
}

for (let i = 0; i < 300; i++) {
    fs.appendFileSync("./JavaScript/transactions.js", JSON.stringify(generateTransaction()) + ",\n");
}

//console.log(generateTransaction());

//console.log(Math.floor(Math.random() * 10))