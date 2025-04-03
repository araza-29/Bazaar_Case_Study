const db = require("../config")

db.run(`
    CREATE TABLE IF NOT EXISTS quantity (
        product_id INTEGER PRIMARY KEY,
        stock INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );
`);

const reviewQuantityByProductId = (req, res) => {
    db.all("SELECT * FROM quantity where product_id = ?", [req.body.product_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// 🔹 **POST request - Add a new product**
const createQuantity = (req, res) => {

    db.run("INSERT INTO quantity (product_id, stock) VALUES (?, ?)", 
        [req.body.product_id, req.body.stock], 
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID, name, stock, price });
        }
    );
};

// 🔹 **PUT request - Update product stock**
const updateQuantity = (req, res) => {

    db.run("UPDATE quantity SET stock = ? WHERE id = ?", [req.body.stock, req.body.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Quantity updated", changes: this.changes });
    });
};

// 🔹 **DELETE request - Remove a product**
const deleteQuantity = (req, res) => {
    db.run("DELETE FROM quantity WHERE id = ?", [req.paramas.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Quantity deleted", changes: this.changes });
    });
};

module.exports = {
    reviewQuantityByProductId,
    deleteQuantity,
    updateQuantity,
    createQuantity
}