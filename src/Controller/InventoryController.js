import axios from "axios"
import { InventoryItem } from "Classes/InventoryItems.ts";

export async function getInventory() {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    //const [items, setItems] = useState([]);
    var items = [];
    const response = await axios.get(`${serverUrl}/api/inventory`)
    items = response.data;
    console.log(items);
    items = items.map(
      (item) =>
        new InventoryItem(
          item.id,
          item.name,
          item.description,
          item.quantity,
          item.rent_price,
          item.cost,
          item.image,
          item.checked_out
        )
    );
    console.log(items);
    return items;
}

export async function createInventoryItem(newItem) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.post(`${serverUrl}/api/inventory`, newItem);
    return response.data;
}

export async function updateInventoryItem(item) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.put(`${serverUrl}/api/inventory/${item.id}`, item);
    return response.data;
}

export async function checkOutItem(item) {
    console.log("Checking out: " + item.id);
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.put(`${serverUrl}/api/inventory/check-out/${item.id}`);
    return response.data;
}

export async function checkInItem(item) {
    console.log("Checking in: " + item.id)
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.put(`${serverUrl}/api/inventory/check-in/${item.id}`);
    return response.data;
}

export async function checkOutItems(ids) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.put(`${serverUrl}/api/inventory/check-out-items`, { "ids":ids });
    return response.data;
}

export async function checkInItems(ids) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.put(`${serverUrl}/api/inventory/check-in-items`, { "ids":ids });
    return response.data;
}

export async function getItemById(id) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios.get(`${serverUrl}/api/inventory/${id}`);
    return response.data;
}

export async function deleteItemsById(id) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const response = await axios.delete(`${serverUrl}/api/inventory/${id}`);
  return response.data;
}