const express = require("express");
const rateLimit = require('express-rate-limit');
const bodyParser = require("body-parser");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes',
    headers: true,
  });


const Product = require("./Routers/Product")
const Supplier = require("./Routers/Supplier")
const StockLog = require("./Routers/StockLog")
const Category = require("./Routers/Category")
const Inventory = require("./Routers/Inventory")
const ProductMapping = require("./Routers/ProductMapping")
const Role = require("./Routers/Role")
const Store = require("./Routers/Store")
const Employee = require("./Routers/Employee")

const app = express();


// Middleware
app.use(bodyParser.json());

// Connect to SQLite database (or create it if it doesn't exist)

app.use("/Product", limiter, Product);
app.use("/Supplier", limiter, Supplier);
app.use("/Category", limiter, Category);
app.use("/Inventory", limiter, Inventory);
app.use("/ProductMapping", limiter, ProductMapping);
app.use("/Role", limiter, Role);
app.use("/StockLog", limiter, StockLog);
app.use("/Store", limiter, Store);
app.use("/Employee", limiter, Employee);

app.listen(3000, () => {
    console.log(`Server running`);
});
