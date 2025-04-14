const express = require("express");

const bodyParser = require("body-parser");
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

app.use("/Product", Product)
app.use("/Supplier", Supplier)
app.use("/Category", Category)
app.use("/Inventory", Inventory)
app.use("/ProductMapping", ProductMapping)
app.use("/Role", Role)
app.use("/StockLog", StockLog)
app.use("/Store", Store)
app.use("/Employee", Employee)

app.listen(3000, () => {
    console.log(`Server running`);
});
