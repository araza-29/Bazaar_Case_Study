const db = require("../config")

db.run(`
    CREATE TABLE IF NOT EXISTS supplier (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR NOT NULL,
        contactNo VARCHAR NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

const reviewSuppliers = (req, res) => {
    db.all("SELECT * FROM supplier", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });
};

const reviewSupplierBySupplierID =  (req, res) => {
    db.get("SELECT * FROM supplier WHERE id = ?", [req.body.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row || { message: "Supplier not found" });
    });
};

const createSupplier = (req, res) => {

    db.run("INSERT INTO supplier (name, contactNo) VALUES (?, ?)", 
        [req.body.name, req.body.contactNo], 
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({message: "Supplier Created" });
        }
    );
};

const updateSupplier = (req, res) => {
    db.run("UPDATE supplier SET name = ?, contactNo = ? WHERE id = ?", [req.body.name, req.body.contactNo, req.body.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({message: "Supplier updated"});
    });
};

const deleteSupplier = (req, res) => {
    db.run("DELETE FROM supplier WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({message: "Supplier deleted"});
    });
};

module.exports = {
    reviewSuppliers,
    reviewSupplierBySupplierID,
    deleteSupplier,
    updateSupplier,
    createSupplier
}