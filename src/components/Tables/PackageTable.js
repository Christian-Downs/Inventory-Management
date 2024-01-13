import React, { useRef, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Input, FormGroup, Label, Button } from "reactstrap";
import AddItemModal from "components/Modals/AddInventoryModal";
import {
  checkOutItems,
  checkInItems,
  deleteItemsById,
} from "Controller/InventoryController";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import "assets/css/add-inventory-custom.css";

import { getPackages } from "Controller/PackageController";

function PackageTable({
  selectedIds,
  setSelectedIds,
  refreshInventory,
  setRefreshInventory,
}) {
  const [searchTerm, setSearchTerm] = useState(""); // "a"

  const [modal, setModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  //const [selectedIds, setSelectedIds] = useState([]); // [1, 2, 3]

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const fetchItems = async () => {
    getPackages().then((items1) => {
      setItems(items1);
      console.log(items1.image);
      setIsLoading(false);
      if (setRefreshInventory) {
        setRefreshInventory(false);
      }
    });
  };

  

  useEffect(() => {
    fetchItems();
  }, []);

  

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
      console.log(selectedIds);
    } else {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
      console.log(selectedIds);
    }
  };

  if (refreshInventory) {
    fetchItems();
  }
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "98%", marginLeft: "1%" }}
      />
      <Table className="tablesorter ps-child" responsive>
        <thead className="text-primary">
          <tr>
            <th>Select</th>
            <th>id</th>
            <th>Checked Out</th>
            <th>Name</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter((item) => {
              if (searchTerm != "") {
                if (item.name && item.description) {
                  if (
                    item.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.description
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                }
              } else {
                return item;
              }
            })
            .map(
              (item, index) => (
                (item.string_checked_out = item.checked_out ? "True" : "False"),
                (
                  <tr key={index}>
                    <td>
                      <FormGroup check>
                        <Label check style={{ textAlign: "center" }}>
                          <Input
                            type="checkbox"
                            style={{
                              visibility: "visible",
                              opacity: 1,
                              position: "relative",
                              left: "0px",
                              top: "0px",
                            }}
                            onChange={(e) => handleCheckboxChange(e, item.id)}
                            checked={selectedIds.includes(item.id)}
                          />
                        </Label>
                      </FormGroup>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.string_checked_out}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                  </tr>
                )
              )
            )}
        </tbody>
      </Table>
    </>
  );
}
export default PackageTable;
