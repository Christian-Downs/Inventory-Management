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

import { getInventory } from "Controller/InventoryController.js";
import { createInventoryItem } from "Controller/InventoryController";
import { getItemById } from "Controller/InventoryController";

import InventoryTable  from "components/Tables/InventoryTable";

function Inventory() {
  const [refreshInventory, setRefreshInventory] = useState(false);

  const [searchTerm, setSearchTerm] = useState(""); // "a"

  const [modal, setModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]); // [1, 2, 3]

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    const fetchItems = async () => {
      getInventory().then((items1) => {
        setItems(items1);
        console.log(items1.image);
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
        setRefreshInventory(true);
      });
    });
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    }
  };

  const clearedSelectedIds = () => {
    setSelectedIds([]);
  };

  const checkOut = async () => {
    if (selectedIds.length != 0) {
      var newItems = await checkOutItems(selectedIds);
      console.log(newItems);
      clearedSelectedIds();
      setItems(newItems);
      setRefreshInventory(true);
    }
  };

  const checkIn = async () => {
    if (selectedIds.length != 0) {
      var newItems = await checkInItems(selectedIds);
      console.log(newItems);
      clearedSelectedIds();
      setItems(newItems);
      setRefreshInventory(true);
    }
  };

  const deleteItems = async () => {
    if (selectedIds.length != 0) {
      for (var i = 0; i < selectedIds.length; i++) {
        await deleteItemsById(selectedIds[i]);
      }
      var newItems = await getInventory();
      clearedSelectedIds();
      setItems(newItems);
      setRefreshInventory(true);
    }
  };

  const addTestItem = () => {
    addItem({
      name: "Test Item",
      description: "This is a test item",
      quantity: 1,
      cost: 1,
      rent_price: 1,
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAACZCAYAAAARgnVFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL3SURBVHhe7d0xaxRBHEDx/06IRASJjWhpmhixsTNCLCyvVEhxtd9AGzE2Yqz0I2inhUI6tbKxkJSCEO1sU0YQApHcejlm9DKwhEsV370fDJmd3VSPyW42xjSLSyttCCXljwIxKtDfL7/ftz6NFvR/unzlZp65U5GMCmRUIKMCGRXIqEBGBTIqkFGBJo7aNM2hUdTHRdd67ajPr0et63zXelGfL6NWr49fO75eq68ro+g6rtcn4U4FMiqQUYGMCmRUIKMCGRXIqEBGBTIqkFGBjApkVCCjAhkVyKhARgUyKpBRgYwKZFQgowIZFcioQEYFMiqQUYGMCmRUIKMCGRXIqEBGBTIqkFGBjApkVCCjAhkVyKhARgUyKlBKs6fzVBRp9sz5PBVFmpk7m6eiSGnmVJ6KYvigdLz/flQnV2pb/34fTXKj8qRwp+L48gHInQrkPRXIp1+g5EblcacCeU8F8ukXyO9TgVIb7lQan36BfPoF8p4KNIzqTqVxpwJ5TwXy6RfI71OBvKcC+e4XyJ/SAA2ffgd5KgqffoGGOzXPhJHawe88FUUa7P3KU1Gk/d2feSqK1O7v5akofKMEZFQgowIZFcioQEYFMiqQUYGMCmRUIKMCGRXIqEBGBTIqkFGBjApkVCCjAhkVyKhAE0c9+M3z8VHUx0XXeu2oz69Hret813pRny+jVq+PXzu+XquvK6PoOq7XJ+FOBTIqkFGBjApkVCCjAhkVyKhA+Kg7XzZifXUhmqaJ9c28CIeNur35Iu73FuLctTux9vZHXp0OzKg77+PJ8t14/mE3ek8/xueXt/OJ6cCMOn8jeo/vxauv3+Ldg1txaS6vTwnol9/56D16Fv2r8/l4uuAflKaRUYGMCmRUIKMCGRUIGnU7Xq82o1eDB+Nif2O0urb8b438ytCdCgSNeiH6bw7/q7x6PLyeLwVypwIZFcioQEYFMiqQUYGMCmRUIKMCNYtLK8f7JUidWO5UIKMCGRXIqEBGBTIqkFFxIv4A4Fr81M+nyXoAAAAASUVORK5CYII=",
      checked_out: false,
    });
  };

  if (isLoading && items.length === 0) {
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

            <CardBody>
              <InventoryTable 
              selectedIds = {selectedIds}
              setSelectedIds = {setSelectedIds}
              refreshInventory = {refreshInventory}
              setRefreshInventory = {setRefreshInventory}
              />
              <Button color="primary" onClick={toggle}>
                {" "}
                Add Item{" "}
              </Button>
              <Button color="info" onClick={checkOut}>
                {" "}
                Check Out Items
              </Button>
              <Button color="info" onClick={checkIn}>
                {" "}
                Check In Items
              </Button>
              <Button color="danger" onClick={deleteItems}>
                {" "}
                Delete Items
              </Button>
              <Button color="warning" onClick={addTestItem}>
                {" "}
                Add Test Item
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
