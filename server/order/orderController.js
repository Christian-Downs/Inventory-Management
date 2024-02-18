const sqlite3 = require("sqlite3").verbose();

// Connect to the database
const db = new sqlite3.Database("./db/inventory.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  const sql = `select * from 'order' limit 1`;
  db.get(sql, [], (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
  console.log("Connected to the inventory database.");
});

function createOrder(res, customer) {
    console.log("Create Order");
  return new Promise((resolve, reject) => {
    const sql = `insert into 'Order'
      (
        customer_name, 
        customer_phone, 
        customer_email, 
        customer_street, 
        customer_city, 
        customer_zip, 
        payment, 
        date)
        values (?, ?, ?, ?,?,?, ?, ?);`;
    let orderId;
    db.run(
      sql,
      [
        customer.name,
        customer.phone,
        customer.email,
        customer.street,
        customer.city,
        customer.zip,
        customer.payment,
        customer.date,
      ],
      function (err) {
        if (err) {
          reject(err);
        }
        orderId = this.lastID;
        // res.json(this.lastID);
        resolve(orderId);
      }
    );
    // return orderId
  });
}

function addToOrderPackage(orderId, packageId) {
  return new Promise((resolve, reject) => {
    const sqlAddToPackageOrderTable = `
        insert into 'Order_Package' (order_id, package_id) values (?, ?)
        `;
    db.run(sqlAddToPackageOrderTable, [orderId, packageId], function (err) {
      if (err) {
        reject(err);
      }
      resolve(this.lastID);
    });
  });
}

const makeOrder = async (req, res) => {
  try {
    const {
      customer_name,
      phone,
      email,
      street,
      city,
      zip,
      payment,
      date,
      packageId,
     } = req.body;

     console.log(req.body);
     console.log(packageId);
     console.log(customer_name, phone, email, street, city, zip, payment, date, packageId)
    if (
      !customer_name ||
      !phone ||
      !email ||
      !street ||
      !city ||
      !zip ||
      !payment ||
      !date ||
      !packageId
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    customer = {
      name: customer_name,
      phone: phone,
      email: email,
      street: street,
      city: city,
      zip: zip,
      payment: payment,
      date: date,
    };

    let orderId = await createOrder(res, customer);

    if (orderId) {
      let packageOrderTableId = await addToOrderPackage(orderId, packageId);
      res.json({ orderId, packageOrderTableId });
    } else {
      res.status(400).json({ error: "Error creating order" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all order items
const getOrder = (req, res) => {
  console.log("Get Order");
  const sql = `SELECT * FROM 'order'`;
  db.all(sql, [], function (err, rows) {
    if (err) {
      res.status(400).json({ error: err.message });
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
      res.status(400).json({ error: err.message });
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
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
};

// Delete order item
const deleteOrder = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM 'order' WHERE id = ?`;
  db.run(sql, [id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
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
      res.status(400).json({ error: err.message });
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
  updateOrder,
  makeOrder,
};
