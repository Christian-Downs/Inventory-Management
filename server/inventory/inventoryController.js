const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./db/inventory.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    const sql = `select * from inventory limit 1`
    db.get(sql, [], (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row);
    }
    );
    console.log('Connected to the inventory database.');
});

// Get all inventory items
const getInventory = (req, res) => {
    console.log("Get Inventory")
    const sql = `SELECT * FROM inventory`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
};

// Get inventory item by id
const getItemById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM inventory WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(row);
    });
};

// Add inventory item
const addInventory = (req, res) => {
    const { name, description, quantity } = req.body;
    const sql = `INSERT INTO inventory (name, description, quantity) VALUES (?, ?, ?)`;
    db.run(sql, [name, description, quantity], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "id": this.lastID });
    });
};

// Delete inventory item
const deleteInventory = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM inventory WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            res.status(400).json({ "error": res.message });
            return;
        }
        res.json({ changes: this.changes });
    });
};

// Update inventory item
const updateInventory = (req, res) => {
    const id = req.params.id;
    const { name, description, quantity } = req.body;
    const sql = `UPDATE inventory SET name = ?, description = ?, quantity = ? WHERE id = ?`;
    db.run(sql, [name, description, quantity, id], function (err) {
        if (err) {
            res.status(400).json({ "error": res.message });
            return;
        }
        res.json({ changes: this.changes });
    });
};

module.exports = {
    getInventory,
    getItemById,
    addInventory,
    deleteInventory,
    updateInventory
};