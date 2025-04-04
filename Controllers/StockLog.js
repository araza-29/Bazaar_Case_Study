const db = require("../config")

db.run(`
    CREATE TABLE IF NOT EXISTS StockLog (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        reason STRING NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id)
    );
`);

const reviewStockLogByProductId = (req, res) => {
    db.all("SELECT * FROM StockLog where product_id = ?", [req.body.product_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

const reviewStockLogs = (req, res) => {
    db.all("SELECT * FROM StockLog", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

const createStockLog = (req, res) => {

    db.run("INSERT INTO StockLog (product_id, quantity, reason) VALUES (?, ?, ?)", 
        [req.body.product_id, req.body.quantity, req.body.reason], 
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: "StockLog added" });
        }
    );
};

const updateStockLog = (req, res) => {

    db.run("UPDATE StockLog SET quantity = ?, reason = ? WHERE id = ?", [req.body.quantity, req.body.reason, req.body.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "StockLog updated", changes: this.changes });
    });
};

const deleteStockLog = (req, res) => {
    db.run("DELETE FROM StockLog WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Quantity deleted", changes: this.changes });
    });
};

module.exports = {
    reviewStockLogByProductId,
    deleteStockLog,
    reviewStockLogs,
    updateStockLog,
    createStockLog
}