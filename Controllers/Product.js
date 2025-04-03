const db = require("../config")
db.run(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        stock INTEGER NOT NULL,
        price REAL NOT NULL
    )
`);

// 🔹 **GET request - Fetch all products**
const reviewProducts = (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// 🔹 **GET request - Fetch a single product by ID**
const reviewProductsByProductID =  (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row || { message: "Product not found" });
    });
};

// 🔹 **POST request - Add a new product**
const createProduct = (req, res) => {
    const { name, stock, price } = req.body;
    if (!name || stock == null || price == null) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    db.run("INSERT INTO products (name, stock, price) VALUES (?, ?, ?)", 
        [name, stock, price], 
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID, name, stock, price });
        }
    );
};

// 🔹 **PUT request - Update product stock**
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { stock } = req.body;

    if (stock == null) {
        return res.status(400).json({ error: "Missing stock value" });
    }

    db.run("UPDATE products SET stock = ? WHERE id = ?", [stock, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Product updated", changes: this.changes });
    });
};

// 🔹 **DELETE request - Remove a product**
const deleteProduct = (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM products WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Product deleted", changes: this.changes });
    });
};

module.exports = {
    reviewProducts,
    reviewProductsByProductID,
    deleteProduct,
    updateProduct,
    createProduct
}