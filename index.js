const express = require("express");

const bodyParser = require("body-parser");
const Product = require("./Routers/Product")
const Supplier = require("./Routers/Supplier")
const StockLog = require("./Routers/StockLog")

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to SQLite database (or create it if it doesn't exist)

app.use("/Product", Product)
app.use("/Supplier", Supplier)
app.use("/StockLog", StockLog)

app.listen(3000, () => {
    console.log(`Server running`);
});
