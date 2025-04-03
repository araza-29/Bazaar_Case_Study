const express = require("express");

const bodyParser = require("body-parser");
const Product = require("./Controllers/Product")
const Quantity = require("./Controllers/Quantity")
const StockMovement = require("./Controllers/StockMovement")

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to SQLite database (or create it if it doesn't exist)

app.use("/Product", Product)
app.use("/Quantity", Quantity)
app.use("/StockMovement", StockMovement)

app.listen(3000, () => {
    console.log(`Server running`);
});
