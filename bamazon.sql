DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2)NOT NULL,
  stock_quantity DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("lowStockTest1", "test", 600.50, 2), 
("lowStockTest2", "test", 500.50, 1),
("lowStockTest3", "test", 400.90, 0)

("charizard", "pokemon", 600.50, 3), 
("pikachu", "pokemon", 500.50, 250),
("bulbasaur", "pokemon", 400.90, 200),
("charmander", "pokemon", 300.20, 150),
("squirtle", "pokemon", 200.22, 100),
("gengar", "pokemon", 1000.69, 69),
("snorlax", "pokemon", 1200.69, 0),
("Princess Leia toy", "star wars", 19.99, 30),
("Luke Skywalker toy", "star wars", 20.99, 40),
("Yoda toy", "star wars", 40.99, 0),
("Darth Maul toy", "star wars", 50.99, 80),
("General Grievious toy", "star wars", 120.69, 90)
;
