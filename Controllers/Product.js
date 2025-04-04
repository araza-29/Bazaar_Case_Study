const db = require("../config")

db.run(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        stock INTEGER NOT NULL,
        price REAL NOT NULL,
        supplier_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (supplier_id) REFERENCES supplier(id)
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

const reviewProductsByProductID =  (req, res) => {
    db.get("SELECT * FROM products WHERE id = ?", [req.body.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row || { message: "Product not found" });
    });
};

const createProduct = (req, res) => {

    db.run("INSERT INTO products (name, stock, price, supplier_id) VALUES (?, ?, ?, ?, ?)", 
        [req.body.name, req.body.stock, req.body.price, req.body.supplier_id], 
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID, name, stock, price });
        }
    );
};

const updateProduct = (req, res) => {
    db.run("UPDATE products SET name = ? ,stock = ?, price = ?, supplier_id = ? WHERE id = ?", [req.body.name, req.body.stock, req.body.price, req.body.supplier_id, req.body.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Product updated", changes: this.changes });
    });
};

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