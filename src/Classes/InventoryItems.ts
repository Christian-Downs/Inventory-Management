// src/InventoryItem.ts

import { updateInventoryItem, } from "../Controller/InventoryController";

export class InventoryItem {
    id: number;
    name: string;
    description: string;
    rent_price: number;
    cost: number;
    image: string;
    link: string;


    constructor(id: number, name: string, description: string, rent_price: number, cost: number, image: string, link: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.rent_price = rent_price;
        this.cost = cost;
        this.image = image;
        this.link = link;
    }

    public getId(): number {
        return this.id;
    }


    public updateInventoryItem(): void {
        updateInventoryItem(this);
    }
}