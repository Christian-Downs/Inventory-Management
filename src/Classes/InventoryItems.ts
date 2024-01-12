// src/InventoryItem.ts

import { updateInventoryItem, checkInItem, checkOutItem } from "../Controller/InventoryController";

export class InventoryItem {
    id: number;
    name: string;
    quantity: number;
    description: string;
    rent_price: number;
    cost: number;
    image: string;
    checked_out: boolean;


    constructor(id: number, name: string, description: string , quantity: number, rent_price: number, cost: number, image: string, checked_out: boolean) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.rent_price = rent_price;
        this.cost = cost;
        this.image = image;
        this.checked_out = checked_out;
    }

    public getId(): number {
        return this.id;
    }

    public checkOut(): void {
        this.checked_out = true;
        checkOutItem(this);
    }

    public checkIn(): void {
        this.checked_out = false;
        checkInItem(this);
    }


    public updateInventoryItem(): void {
        updateInventoryItem(this);
    }
}