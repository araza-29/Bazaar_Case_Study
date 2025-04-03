const db = require("../config")

db.run(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        stock INTEGER NOT NULL,
        price REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`);

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
    db.get("SELECT * FROM products WHERE id = ?", [req.body.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row || { message: "Product not found" });
    });
};

// 🔹 **POST request - Add a new product**
const createProduct = (req, res) => {

    db.run("INSERT INTO products (name, stock, price) VALUES (?, ?, ?)", 
        [req.body.name, req.body.stock, req.body.price], 
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
    db.run("UPDATE products SET name = ? ,stock = ?, price = ? WHERE id = ?", [req.body.name, req.body.stock, req.body.price, req.body.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Product updated", changes: this.changes });
    });
};

// 🔹 **DELETE request - Remove a product**
const deleteProduct = (req, res) => {
    db.run("DELETE FROM products WHERE id = ?", [req.paramas.id], function (err) {
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