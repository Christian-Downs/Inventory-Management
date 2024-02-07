// packageController.js
const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./db/inventory.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    const sql = `select * from package limit 1`
    db.get(sql, [], (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row);
    }
    );
    console.log('Connected to the inventory database.');
});

// Get all package items
const getPackage = (req, res) => {
    console.log("Get Package")
    const sql = `SELECT * FROM package`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
};

// Get package item by id
const getPackageById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM package WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(row);
    });
};

// Add package item
const addPackage = (req, res) => {
    const { name, description, quantity } = req.body;
    const sql = `INSERT INTO package (name, description, quantity) VALUES (?, ?, ?)`;
    db.run(sql, [name, description, quantity], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "id": this.lastID });
    });
};

// Delete package item
const deletePackage = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM package WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            res.status(400).json({ "error": res.message });
            return;
        }
        res.json({ deleted: this.changes });
    });
};

// Update package item
const updatePackage = (req, res) => {
    const id = req.params.id;
    const { name, description, quantity } = req.body;
    const sql = `UPDATE package SET name = ?, description = ?, quantity = ? WHERE id = ?`;
    db.run(sql, [name, description, quantity, id], function (err) {
        if (err) {
            res.status(400).json({ "error": res.message });
            return;
        }
        res.json({ updated: this.changes });
    });
};

module.exports = {
    getPackage,
    getPackageById,
    addPackage,
    deletePackage,
    updatePackage
};