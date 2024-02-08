// calendar controller
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
    console.log("Get calendar")
    const sql = `SELECT p.ID, p.Name , o.Start_Date, o.End_Date  FROM Package p 
    join Order_Package op ON p.ID = op.packageID 
    join "Order" o on o.ID = op.orderID 
    where o.Start_Date >  Date('now') `;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        var package_unavailable = {}
        var unavailableDays = []

        rows.forEach(row => {
            var start = new Date(row.Start_Date)
            var end = new Date(row.End_Date)
            var date = new Date(start)
            while (date <= end) {
                unavailableDays.push(date.toISOString().split('T')[0])
                date.setDate(date.getDate() + 1)
            }
            package_unavailable[row.ID] = unavailableDays
            unavailableDays = []
        });

        res.json(package_unavailable);
        // res.json(rows);
    });
};

const getUnavailableDaysForPackage = (req, res) => {
    const id = req.params.id
    const sql = `SELECT p.ID, p.Name , o.Start_Date, o.End_Date  FROM Package p 
    join Order_Package op ON p.ID = op.packageID 
    join "Order" o on o.ID = op.orderID 
    where o.Start_Date >  Date('now') and p.ID = ? `;
    db.all(sql, [id], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        var package_unavailable = {}
        var unavailableDays = []

        rows.forEach(row => {
            var start = new Date(row.Start_Date)
            var end = new Date(row.End_Date)
            var date = new Date(start)
            while (date <= end) {
                unavailableDays.push(date.toISOString().split('T')[0])
                date.setDate(date.getDate() + 1)
            }
            package_unavailable[row.ID] = unavailableDays
            unavailableDays = []
        });

        res.json(package_unavailable);
        // res.json(rows);
    });

}

module.exports = {
    getUnavailableDays,
    getUnavailableDaysForPackage
}