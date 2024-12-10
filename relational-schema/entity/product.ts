export class Product {
    code: string;
    description: string;
    image: string; // URL
    price: number;
    quantity: number;

    constructor(code: string, description: string, image: string, price: number, quantity: number) {
        this.code = code;
        this.description = description;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
    }
}