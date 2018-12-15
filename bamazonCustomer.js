var inquirer = require("inquirer");
var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
  
    user: "root",
  
    password: "147035",
    database: "bamazon"
  });

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    // start();
    for (var i = 0; i < res.length; i++) {
        console.log(
            "ID: " + res[i].id + " || " +
            "Name: " + res[i].product_name + " || " +
            "Dept: " + res[i].department_name + " || " +
            "Price: " + res[i].price + " || " +
            "Stock: " + res[i].stock_quantity 
        )
    }     
    inquirer
        .prompt([
            {
                name: "firstchoice",
                type: "rawlist",
                choices: function() {
                  var choiceArray = [];
                  for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].product_name);
                  }
                  return choiceArray;
                },
                message: "What Item would you like to buy?"
            },
            {
                name: "unitchoice",
                type: "input",
                message: "How many units would you like to buy?",
                validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
                }
            }
        ])
        .then(function(answer) {
            var chosenItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].product_name === answer.firstchoice) {
                    chosenItem = res[i];
                }
            };
        updateStock(chosenItem, answer)      
        });
    });
  function updateStock(item, answer) {
    if (parseInt(answer.unitchoice) <= item.stock_quantity ) {
      var new_stock = (item.stock_quantity - parseInt(answer.unitchoice))
      var cost = (parseInt(item.price) * parseInt(answer.unitchoice))
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: new_stock
          },
          {
            id: item.id
          }
        ],
        function(error) {
          if (error) throw error;
          console.log("Nice! You've purchased " + answer.unitchoice + " " + item.product_name);
          console.log("Your total cost is", cost);
          connection.end();
        }
      )
    } else {
        console.log("Insufficient Quantity! Please Select Another item!");
        setTimeout(start(), 3000);
    };
  }