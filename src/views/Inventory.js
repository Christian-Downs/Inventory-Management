import React, { useRef, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Input, FormGroup, Label, Button } from "reactstrap";
import AddItemModal from "components/Modals/AddInventoryModal";
import { checkOutItems, checkInItems } from "Controller/InventoryController";

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

import {getInventory} from "Controller/InventoryController.js"
import { createInventoryItem } from "Controller/InventoryController";
import { getItemById } from "Controller/InventoryController";

function Inventory() {
    const [searchTerm, setSearchTerm] = useState(""); // "a"

    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    
    const [items, setItems] = useState([]);

    const [selectedIds, setSelectedIds] = useState([]); // [1, 2, 3]
    
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        const fetchItems = async () => {getInventory().then((items1) => {
            setItems(items1);
            setIsLoading(false);
            });
        };
    fetchItems();
    }, []);

    //var items1 = getInventory();
    //console.log(items1);
    
    const toggle = () => {
      setModal(!modal);
    };

    
    const addItem = (newItem) => {
        console.log(newItem);
        createInventoryItem(newItem).then((item) => {
          console.log(item);
          getItemById(item.id).then((item) => {
            console.log(item);
            setItems([...items, item[0]]);
            console.log(items);
          });

        });
    };

    const handleCheckboxChange = (e, id) => {
        if (e.target.checked) {
          setSelectedIds([...selectedIds, id]);
        } else {
          setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
        }
    }

    const checkOut = async () => {
        var newItems = await checkOutItems(selectedIds);
        console.log(newItems);
        setItems(newItems);
    };

    const checkIn = async () => {
        var newItems = await checkInItems(selectedIds);
        console.log(newItems);
        setItems(newItems);
    };





    if(isLoading && items.length === 0){  
        return <div className="content">Loading...</div>;
    }  
  return (
    <div className="content">
      <Row>
        <Col lg="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Inventory Table</CardTitle>
            </CardHeader>
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "98%", marginLeft: "1%" }}
            />
            <CardBody>
              <Table className="tablesorter ps-child" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Select</th>
                    <th>id</th>
                    <th>Checked Out</th>
                    <th>Item Name</th>
                    <th>Item Description</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Price</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {items.filter(item => {
                    if(searchTerm != ""){
                    if (item.name && item.description) {
                      if(item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                      }
                    }
                    } else {
                      return item
                    }
                })
                  .map(
                    (item, index) => (
                      (item.string_checked_out = item.checked_out
                        ? "True"
                        : "False"),
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
                                  onChange={(e) =>
                                    handleCheckboxChange(e, item.id)
                                  }
                                />
                              </Label>
                            </FormGroup>
                          </td>
                          <td>{item.id}</td>
                          <td>{item.string_checked_out}</td>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>{item.quantity}</td>
                          <td className="text-center">${item.cost}</td>
                          <td className="text-center">${item.rent_price}</td>
                          <td>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRK7lYWsSFpakd1yRgn6b1bmhSiPHoqyLSH1225CrlSQ&s"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </Table>
              <Button color="primary" onClick={toggle}>
                {" "}
                Add Item{" "}
              </Button>
              <Button color="secondary" onClick={checkOut}>
                {" "}
                Check Out Items
              </Button>
              <Button color="secondary" onClick={checkIn}>
                {" "}
                Check In Items
              </Button>
              <AddItemModal
                isOpen={modal}
                toggle={toggle}
                addItem={addItem}
                className="no-background"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Inventory;