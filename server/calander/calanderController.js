// calander controller
const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./db/inventory.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the inventory database.');
});

// Get all packages that are rented
const getUnavailableDays = (req, res) => {
    console.log("Get Calander")
    const sql = `SELECT p.ID, p.Name , o.Start_Date, o.End_Date  FROM Package p 
    join Order_Package op ON p.ID = op.packageID 
    join "Order" o on o.ID = op.orderID 
    where o.Start_Date >  Date('now') `;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
};

module.exports = {
    getUnavailableDays
}