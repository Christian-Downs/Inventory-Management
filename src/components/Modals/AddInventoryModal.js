import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  CardBody,
  Card,

} from "reactstrap";
import 'assets/css/add-inventory-custom.css';
import {InventoryItem} from "../../Classes/InventoryItems.ts";




const AddItemModal = ({ isOpen, toggle, addItem }) => {
  const [newItem, setNewItem] = useState({
      name: "",
      description: "",
      quantity: 0,
      cost: 0,
      rent_price: 0,
      image: "",
      checked_out: false
  });

  const [ preview, setPreview ]= useState(null);

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (
      !newItem.name ||
      !newItem.description ||
      !newItem.quantity ||
      !newItem.rent_price ||
      !newItem.cost ||
      !newItem.image
    ) {
      alert("Please fill out all fields");
    } else {
      e.preventDefault();
      addItem(newItem);
      toggle();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {

        getBase64(file, (result) => {
            setNewItem({ ...newItem, image: result });
            setPreview(result);
            console.log(result);
        });
    }
  };

  function getBase64(file, callback) {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(file);
  }

  const closeModal = () => { 
    setNewItem({
      name: "",
      description: "",
      quantity: 0,
      cost: 0,
      rent_price: 0,
      image: "",
      checked_out: false,
    });
    setPreview(null);
    toggle();
  }

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
      className="no-background"
    >
      <Card style={{ backgroundColor: "" }}>
        <CardBody style={{ backgroundColor: "" }}>
          <ModalHeader
            toggle={closeModal}
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            <h5>Add New Item</h5>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="name">Item Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Item Name"
                onChange={handleInputChange}
              />
              <Label for="description">Item Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Item Description"
                onChange={handleInputChange}
              />
              <Label for="quantity">Quantity</Label>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                onChange={handleInputChange}
              />
              <Label for="cost">Cost</Label>
              <Input
                type="number"
                name="cost"
                id="cost"
                placeholder="Cost"
                onChange={handleInputChange}
              />
              <Label for="rent_price">Rent Price</Label>
              <Input
                type="number"
                name="rent_price"
                id="rent_price"
                placeholder="Rent Price"
                onChange={handleInputChange}
              />
              {/* Image upload input */}
              <Label
                for="image-upload"
                className="btn btn-primary"
                style={{ marginTop: "5px" }}
              >
                Upload Image
              </Label>
              <Input
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Image preview"
                  style={{ maxWidth: "100%", maxHeight: "20em" }}
                />
              )}
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Add Item
            </Button>{" "}
            <Button color="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default AddItemModal;
