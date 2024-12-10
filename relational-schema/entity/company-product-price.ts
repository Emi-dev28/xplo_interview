import { Company } from "./company";
import { Product } from "./product";

export class CompanyProductPrice {
    price: number;
    company: Company;
    product: Product;

    constructor(price: number, company: Company) {
        this.price = price;
        this.company = company;
    }
}