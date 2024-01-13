import { updatePackage } from "../Controller/PackageController";

export class Package {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    checked_out: boolean;

    constructor(id: number, name: string, description: string, price: number, image: string, checked_out: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.checked_out = checked_out;
    }

    public getId(): number {
        return this.id;
    }

    public checkOut(): void {
        this.checked_out = true;
    }

    public checkIn(): void {
        this.checked_out = false;
    }

    public updatePackage(): void {
        updatePackage(this);
    }

}