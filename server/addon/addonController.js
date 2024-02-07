// addon controller

const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./db/inventory.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    const sql = `select * from Addons limit 1`
    db.get(sql, [], (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row);
    }
    );
    console.log('Connected to the inventory database.');
});

// Get all addon items
const getAddon = (req, res) => {
    console.log("Get Addons")
    const sql = `SELECT * FROM Addons`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
};

// Get addon item by id
const getAddonById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM Addons WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(row);
    });
};

// Add addon item
const addAddon = (req, res) => {
    const { name, description, quantity } = req.body;
    const sql = `INSERT INTO Addons (name, description, quantity) VALUES (?, ?, ?)`;
    db.run(sql, [name, description, quantity], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "id": this.lastID });
    });
};

// Delete addon item
const deleteAddon = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM Addons WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            res.status(400).json({ "error": res.message });
            return;
        }
        res.json({ deleted: this.changes });
    });
};

// Update addon item
const updateAddon = (req, res) => {
    const id = req.params.id;
    const { name, description, quantity } = req.body;
    const sql = `UPDATE Addons SET name = ?, description = ?, quantity = ? WHERE id = ?`;
    db.run(sql, [name, description, quantity, id], function (err) {
        if (err) {
            res.status(400).json({ "error": res.message });
            return;
        }
        res.json({ updated: this.changes });
    });
};

module.exports = {
    getAddon,
    getAddonById,
    addAddon,
    deleteAddon,
    updateAddon
};