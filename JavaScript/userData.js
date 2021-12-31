let transactionData = require('../JavaScript/transactions.js')
var data = transactionData.transactions;

class user {
    constructor (name, items_purchased, spent) {
        this.name = name;
        this.items_purchased = items_purchased;
        this.spent = spent;
    }
}

var monthlyRevenue = { "Jan": 0, "Feb": 0, "Mar": 0, "Apr": 0, "May": 0, "Jun": 0, 
"Jul": 0, "Aug": 0, "Sep": 0, "Oct": 0, "Nov": 0, "Dec": 0 };

var months = { 0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 
6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec" };

for (let transaction of data) {
    var price = parseFloat(transaction.price.replace("$ ", ""));
    var date = transaction.date.split(" / ");
    var month = date[0];
    month = months[month]
    monthlyRevenue[month] = monthlyRevenue[month] + price
    console.log(monthlyRevenue);
}