const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./db/inventory.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    const sql = `select * from 'order' limit 1`
    db.get(sql, [], (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row);
    }
    );
    console.log('Connected to the inventory database.');
});

// Get all order items
const getOrder = (req, res) => {
    console.log("Get Order")
    const sql = `SELECT * FROM 'order'`;
    db.all(sql, [], function(err){
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
};

// Get order by id
const getOrderById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM 'order' WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(row);
    });
};

// Add order item
const addOrder = (req, res) => {
    const { name, description, quantity } = req.body;
    const sql = `INSERT INTO 'order' (name, description, quantity) VALUES (?, ?, ?)`;
    db.run(sql, [name, description, quantity], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "id": this.lastID });
    });
};

// Delete order item
const deleteOrder = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM 'order' WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ changes: this.changes });
    });
};

// Update order item
const updateOrder = (req, res) => {
    const id = req.params.id;
    const { name, description, quantity } = req.body;
    const sql = `UPDATE 'order' SET name = ?, description = ?, quantity = ? WHERE id = ?`;
    db.run(sql, [name, description, quantity, id], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ changes: this.changes });
    });
};




module.exports = {
    getOrder,
    getOrderById,
    addOrder,
    deleteOrder,
    updateOrder
};