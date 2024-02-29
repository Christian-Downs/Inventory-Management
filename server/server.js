// Server for inventory app

require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/inventory.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the inventory database.");
});
const express = require("express");
const cors = require("cors");
const app = express();
const inventoryRoutes = require("./inventory/inventoryRoutes");
const packageRoutes = require("./package/packageRoutes");
const orderRoutes = require("./order/orderRoutes");
const addonRoutes = require("./addon/addonRoutes");
const calendarRoutes = require("./calendar/calendarRoutes");

app.use(express.json());
app.use(cors());

app.use("/api/inventory", inventoryRoutes);
app.use("/api/package", packageRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/addon", addonRoutes);
app.use("/api/calendar", calendarRoutes);


const sendMail = require("./mailer");


app.post("/api/sendEmail", (req, res) => {

  const { email, subject, message } = req.body;
  console.log(email, subject, message)
  sendMail(email, subject, message)
  res.status(200).json({ success: true });
});




// sendMail(process.env.MAIL_AUTH_USER, "test", "test message")

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// // connect to database
// let db = new sqlite3.Database('./db/inventory.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the inventory database.');
// });

// app.get('/', (req, res) => {
//     res.send('server is running');
// });

// // get items
// const getInventory = (res) => {
//     db.all("SELECT * FROM inventory", (err, rows) => {
//       if (err) {
//         console.error(err.message);
//       }
//       res.json(rows);
//     });
// }

// // get item by id
// const getItemById = (res, id) => {
//     db.all(`SELECT * FROM inventory WHERE id = ?`, [id], (err, rows) => {
//       if (err) {
//         console.error(err.message);
//       }
//       res.json(rows);
//     });
// }

// // get all inventory
// app.get('/api/inventory', (req, res) => {
//   console.log('Getting all inventory');
//   getInventory(res);
// });

// // get item by id
// app.get('/api/inventory/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting inventory with id: ' + id);
//   getItemById(res, id);
// });

// //add inventory
// app.post('/api/inventory', (req, res) => {
//   const { name, description, quantity, rent_price, cost, image, checked_out } = req.body;
//   db.run(`INSERT INTO inventory (name, description, quantity, rent_price, cost, image, checked_out) VALUES (?, ?, ?, ?, ?, ?,?)`, [name, description, quantity, rent_price, cost, image, checked_out], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ id: this.lastID });
//   });
// });

// //delete item from inventory
// app.delete('/api/inventory/:id', (req, res) => {
//     const id = req.params.id;
//     db.run(`DELETE FROM inventory WHERE id = ?`, [id], function (err) {
//         if (err) {
//             console.error(err.message);
//         }
//         res.json({ rows_deleted: this.changes });
//     });
//     console.log(`Deleted inventory with id: ${id}`);
// });

// //add checked out column
// app.get("/api/inventory/add-checked-out-column", (req, res) => {
//   db.run(
//     `ALTER TABLE inventory ADD COLUMN checked_out BOOLEAN DEFAULT 0`,
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         res.json({ success: true });
//       }
//     }
//   );
// });

// //check out item
// app.put("/api/inventory/check-out/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("Checking out: " + id);

//   db.run(
//     `UPDATE inventory SET checked_out = true WHERE id = ?`,
//     [ id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getInventory(res);
//       }
//     }
//   );
// });

// //check out items
// app.put("/api/inventory/check-out-items", (req, res) => {
//   const { ids } = req.body;
//   console.log("Checking out: " + ids);

//   db.run(
//     `UPDATE inventory SET checked_out = true WHERE id IN (${ids})`,
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getInventory(res);
//       }
//     }
//   );
// });

// //check in item
// app.put("/api/inventory/check-in/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("Checking in: " + id);

//   db.run(
//     `UPDATE inventory SET checked_out = false WHERE id = ?`,
//     [id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getInventory(res);
//       }
//     }
//   );
// });

// //check in items
// app.put("/api/inventory/check-in-items", (req, res) => {
//   const { ids } = req.body;
//   console.log("Checking in: " + ids)
//   db.run(
//     `UPDATE inventory SET checked_out = false WHERE id IN (${ids})`,
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getInventory(res);
//       }
//     }
//   );
// });

// //update inventory
// app.put("/api/inventory/:id", (req, res) => {
//   const id = req.params.id;
//   const { name, description, quantity, rent_price, cost, checked_out, image } = req.body;

//   db.run(
//     `UPDATE inventory SET name = ?, description = ?, quantity = ?, rent_price = ?, cost = ?, checked_out = ?, image = ? WHERE id = ?`,
//     [name, description, quantity, rent_price, cost, checked_out, image, id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getInventory(res);
//       }
//     }
//   );

// });

// //Upadate Any Column
// app.put("/api/inventory/update-any-column/:id/:column", (req, res) => {

//   const id = req.params.id;
//   const column = req.params.column;
//   const { value } = req.body;

//   db.run(
//     `UPDATE inventory SET ${column} = ? WHERE id = ?`,
//     [value, id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getItemById(res, id);
//       }
//     }
//   );
// });

// // Packages Tables

// // create Package Table
// // db.run(`Create table if not exists package (
// //         id integer primary key,
// //         name text,
// //         description text,
// //         price real,
// //         checked_out bool)`, (err) => {
// //   if (err) {
// //     console.error(err.message);
// //   }
// //   console.log('Created package table');
// // });

// // get packages
// const getPackages = (res) => {
//   db.all("SELECT * FROM package", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get package by id
// const getPackageById = (res, id) => {
//   db.all(`SELECT * FROM package WHERE id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get all packages
// app.get('/api/packages', (req, res) => {
//   console.log('Getting all packages');
//   getPackages(res);
// });

// // get package by id
// app.get('/api/packages/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting package with id: ' + id);
//   getPackageById(res, id);
// });

// //add package
// app.post('/api/packages', (req, res) => {
//   const { name, description, price } = req.body;
//   const checked_out = false;
//   db.run(`INSERT INTO package (name, description, price, checked_out) VALUES (?, ?, ?, ?)`, [name, description, price, checked_out], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ id: this.lastID });
//   });
// });

// //delete package
// app.delete('/api/packages/:id', (req, res) => {
//   const id = req.params.id;
//   db.run(`DELETE FROM package WHERE id = ?`, [id], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ rows_deleted: this.changes });
//   });
//   console.log(`Deleted package with id: ${id}`);
// });

// //check out package
// app.put("/api/packages/check-out/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("Checking out: " + id);

//   db.run(
//     `UPDATE package SET checked_out = true WHERE id = ?`,
//     [id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getPackages(res);
//       }
//     }
//   );
// });

// //check out packages
// app.put("/api/packages/check-out-packages", (req, res) => {
//   const { ids } = req.body;
//   console.log("Checking out: " + ids);

//   db.run(
//     `UPDATE package SET checked_out = true WHERE id IN (${ids})`,
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getPackages(res);
//       }
//     }
//   );
// });

// //check in package
// app.put("/api/packages/check-in/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("Checking in: " + id);

//   db.run(
//     `UPDATE package SET checked_out = false WHERE id = ?`,
//     [id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getPackages(res);
//       }
//     }
//   );
// });

// //check in packages
// app.put("/api/packages/check-in-packages", (req, res) => {
//   const { ids } = req.body;
//   console.log("Checking in: " + ids)
//   db.run(
//     `UPDATE package SET checked_out = false WHERE id IN (${ids})`,
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getPackages(res);
//       }
//     }
//   );
// });
// //update package
// app.put("/api/packages/:id", (req, res) => {
//   const id = req.params.id;
//   const { name, description, price, checked_out } = req.body;
//   db.run(
//     `UPDATE package SET name = ?, description = ?, price = ?, checked_out = ? WHERE id = ?`,
//     [name, description, price, checked_out, id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getPackages(res);
//       }
//     }
//   );
// });

// // Package to Inventory Tables
// // Package to Inventory one to many relationship

// // create package to inventory table
// db.run(`Create table if not exists package_to_inventory (
//         id integer primary key,
//         package_id integer,
//         inventory_id integer,
//         FOREIGN KEY(package_id) REFERENCES package(id),
//         FOREIGN KEY(inventory_id) REFERENCES inventory(id))`, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Created package to inventory table');
// });

// // get package to inventory
// const getPackageToInventory = (res) => {
//   db.all("SELECT * FROM package_to_inventory", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get package to inventory by id
// const getPackageToInventoryById = (res, id) => {
//   db.all(`SELECT * FROM package_to_inventory WHERE id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get package to inventory by package id
// const getPackageToInventoryByPackageId = (res, id) => {
//   db.all(`SELECT * FROM package_to_inventory WHERE package_id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get package to inventory by inventory id
// const getPackageToInventoryByInventoryId = (res, id) => {
//   db.all(`SELECT * FROM package_to_inventory WHERE inventory_id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// //get all package to inventory
// app.get('/api/package-to-inventory', (req, res) => {
//   console.log('Getting all package to inventory');
//   getPackageToInventory(res);
// });

// // get package to inventory by id
// app.get('/api/package-to-inventory/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting package to inventory with id: ' + id);
//   getPackageToInventoryById(res, id);
// });

// // get package to inventory by package id
// app.get('/api/package-to-inventory/package/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting package to inventory with package id: ' + id);
//   getPackageToInventoryByPackageId(res, id);
// });

// // get package to inventory by inventory id
// app.get('/api/package-to-inventory/inventory/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting package to inventory with inventory id: ' + id);
//   getPackageToInventoryByInventoryId(res, id);
// });

// //add package to inventory
// app.post('/api/package-to-inventory', (req, res) => {
//   const { package_id, inventory_id } = req.body;
//   db.run(`INSERT INTO package_to_inventory (package_id, inventory_id) VALUES (?, ?)`, [package_id, inventory_id], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ id: this.lastID });
//   });
// });

// //delete package to inventory
// app.delete('/api/package-to-inventory/:id', (req, res) => {
//   const id = req.params.id;
//   db.run(`DELETE FROM package_to_inventory WHERE id = ?`, [id], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ rows_deleted: this.changes });
//   });
//   console.log(`Deleted package to inventory with id: ${id}`);
// });

// //update package to inventory
// app.put("/api/package-to-inventory/:id", (req, res) => {
//   const id = req.params.id;
//   const { package_id, inventory_id } = req.body;
//   db.run(
//     `UPDATE package_to_inventory SET package_id = ?, inventory_id = ? WHERE id = ?`,
//     [package_id, inventory_id, id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getPackageToInventory(res);
//       }
//     }
//   );
// });

// // Orders Table

// // create orders table
// db.run(`Create table if not exists orders (
//         id integer primary key,
//         customer_name text,
//         customer_phone text,
//         customer_email text,
//         customer_address text,
//         start_date text,
//         end_date text,
//         total_price real)`, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Created orders table');
// });

// // get orders
// const getOrders = (res) => {
//   db.all("SELECT * FROM orders", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order by id
// const getOrderById = (res, id) => {
//   db.all(`SELECT * FROM orders WHERE id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get all orders
// app.get('/api/orders', (req, res) => {
//   console.log('Getting all orders');
//   getOrders(res);
// });

// // get order by id
// app.get('/api/orders/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order with id: ' + id);
//   getOrderById(res, id);
// });

// //add order
// app.post('/api/orders', (req, res) => {
//   const { customer_name, customer_phone, customer_email, customer_address, start_date, end_date, total_price } = req.body;
//   db.run(`INSERT INTO orders (customer_name, customer_phone, customer_email, customer_address, start_date, end_date, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)`, [customer_name, customer_phone, customer_email, customer_address, start_date, end_date, total_price], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ id: this.lastID });
//   });
// });

// //delete order
// app.delete('/api/orders/:id', (req, res) => {
//   const id = req.params.id;
//   db.run(`DELETE FROM orders WHERE id = ?`, [id], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ rows_deleted: this.changes });
//   });
//   console.log(`Deleted order with id: ${id}`);
// });

// //update order
// app.put("/api/orders/:id", (req, res) => {
//   const id = req.params.id;
//   const { customer_name, customer_phone, customer_email, customer_address, start_date, end_date, total_price } = req.body;
//   db.run(
//     `UPDATE orders SET customer_name = ?, customer_phone = ?, customer_email = ?, customer_address = ?, start_date = ?, end_date = ?, total_price = ? WHERE id = ?`,
//     [customer_name, customer_phone, customer_email, customer_address, start_date, end_date, total_price, id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getOrders(res);
//       }
//     }
//   );
// });

// // Order to Package Tables
// // Order to Package one to many relationship

// // create order to package table
// db.run(`Create table if not exists order_to_package (
//         id integer primary key,
//         order_id integer,
//         package_id integer,
//         FOREIGN KEY(order_id) REFERENCES orders(id),
//         FOREIGN KEY(package_id) REFERENCES package(id))`, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Created order to package table');
// });

// // get order to package
// const getOrderToPackage = (res) => {
//   db.all("SELECT * FROM order_to_package", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order to package by id
// const getOrderToPackageById = (res, id) => {
//   db.all(`SELECT * FROM order_to_package WHERE id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order to package by order id
// const getOrderToPackageByOrderId = (res, id) => {
//   db.all(`SELECT * FROM order_to_package WHERE order_id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order to package by package id
// const getOrderToPackageByPackageId = (res, id) => {
//   db.all(`SELECT * FROM order_to_package WHERE package_id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// //get all order to package
// app.get('/api/order-to-package', (req, res) => {
//   console.log('Getting all order to package');
//   getOrderToPackage(res);
// });

// // get order to package by id
// app.get('/api/order-to-package/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order to package with id: ' + id);
//   getOrderToPackageById(res, id);
// });

// // get order to package by order id
// app.get('/api/order-to-package/order/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order to package with order id: ' + id);
//   getOrderToPackageByOrderId(res, id);
// });

// // get order to package by package id
// app.get('/api/order-to-package/package/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order to package with package id: ' + id);
//   getOrderToPackageByPackageId(res, id);
// });

// //add order to package
// app.post('/api/order-to-package', (req, res) => {
//   const { order_id, package_id } = req.body;
//   db.run(`INSERT INTO order_to_package (order_id, package_id) VALUES (?, ?)`, [order_id, package_id], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ id: this.lastID });
//   });
// });

// //delete order to package
// app.delete('/api/order-to-package/:id', (req, res) => {
//   const id = req.params.id;
//   db.run(`DELETE FROM order_to_package WHERE id = ?`, [id], function (err) {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json({ rows_deleted: this.changes });
//   });
//   console.log(`Deleted order to package with id: ${id}`);
// });

// //update order to package
// app.put("/api/order-to-package/:id", (req, res) => {
//   const id = req.params.id;
//   const { order_id, package_id } = req.body;
//   db.run(
//     `UPDATE order_to_package SET order_id = ?, package_id = ? WHERE id = ?`,
//     [order_id, package_id, id],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.json({ success: false, error: err.message });
//       } else {
//         getOrderToPackage(res);
//       }
//     }
//   );
// });

// // Order to Inventory Tables
// // Order to Inventory one to many relationship

// // create order to inventory table
// db.run(`Create table if not exists order_to_inventory (
//         id integer primary key,
//         order_id integer,
//         inventory_id integer,
//         FOREIGN KEY(order_id) REFERENCES orders(id),
//         FOREIGN KEY(inventory_id) REFERENCES inventory(id))`, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Created order to inventory table');
// });

// // get order to inventory
// const getOrderToInventory = (res) => {
//   db.all("SELECT * FROM order_to_inventory", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order to inventory by id
// const getOrderToInventoryById = (res, id) => {
//   db.all(`SELECT * FROM order_to_inventory WHERE id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order to inventory by order id
// const getOrderToInventoryByOrderId = (res, id) => {
//   db.all(`SELECT * FROM order_to_inventory WHERE order_id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// // get order to inventory by inventory id
// const getOrderToInventoryByInventoryId = (res, id) => {
//   db.all(`SELECT * FROM order_to_inventory WHERE inventory_id = ?`, [id], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//     }
//     res.json(rows);
//   });
// }

// //get all order to inventory
// app.get('/api/order-to-inventory', (req, res) => {
//   console.log('Getting all order to inventory');
//   getOrderToInventory(res);
// });

// // get order to inventory by id
// app.get('/api/order-to-inventory/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order to inventory with id: ' + id);
//   getOrderToInventoryById(res, id);
// });

// // get order to inventory by order id
// app.get('/api/order-to-inventory/order/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order to inventory with order id: ' + id);
//   getOrderToInventoryByOrderId(res, id);
// });

// // get order to inventory by inventory id
// app.get('/api/order-to-inventory/inventory/:id', (req, res) => {
//   const id = req.params.id;
//   console.log('Getting order to inventory with inventory id: ' + id);
//   getOrderToInventoryByInventoryId(res, id);
// });

// //add order to inventory
// app.post('/api/order-to-inventory', (req, res) => {
//     const { order_id, inventory_id } = req.body;
//     db.run(`INSERT INTO order_to_inventory (order_id, inventory_id) VALUES (?, ?)`, [order_id, inventory_id], function (err) {
//       if (err) {
//         console.error(err.message);
//       }
//       res.json({ id: this.lastID });
//     });
// });

// //delete order to inventory
// app.delete('/api/order-to-inventory/:id', (req, res) => {
//     const id = req.params.id;
//     db.run(`DELETE FROM order_to_inventory WHERE id = ?`, [id], function (err) {
//       if (err) {
//         console.error(err.message);
//       }
//       res.json({ rows_deleted: this.changes });
//     });
//     console.log(`Deleted order to inventory with id: ${id}`);
// });

// //update order to inventory
// app.put("/api/order-to-inventory/:id", (req, res) => {
//     const id = req.params.id;
//     const { order_id, inventory_id } = req.body;
//     db.run(
//       `UPDATE order_to_inventory SET order_id = ?, inventory_id = ? WHERE id = ?`,
//       [order_id, inventory_id, id],
//       function (err) {
//         if (err) {
//           console.error(err.message);
//           res.json({ success: false, error: err.message });
//         } else {
//           getOrderToInventory(res);
//         }
//       }
//     );
// });

// app.listen(3001, () => {
//   console.log(`Server started on ${process.env.REACT_APP_SERVER_URL}`);
// });
