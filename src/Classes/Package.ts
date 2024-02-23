import { updatePackage } from "../Controller/PackageController";

export class Package {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;

    constructor(id: number,
         name: string,
          description: string,
           price: number,
            image: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    public getId(): number {
        return this.id;
    }


    public updatePackage(): void {
        updatePackage(this);
    }

}