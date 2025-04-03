const express = require("express");

const bodyParser = require("body-parser");
const Product = require("./Routers/Product")
const Quantity = require("./Routers/Quantity")
const StockMovement = require("./Routers/StockMovement")

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to SQLite database (or create it if it doesn't exist)

app.use("/Product", Product)

app.listen(3000, () => {
    console.log(`Server running`);
});
